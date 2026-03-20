-- ============================================================
-- CalculEmprunteur.fr — Supabase Database Schema
-- ============================================================
-- INSTRUCTIONS:
-- 1. Go to Supabase → SQL Editor → New query
-- 2. Paste this entire script
-- 3. Click Run
-- ============================================================

-- Drop existing tables if they exist (clean install)
DROP TABLE IF EXISTS email_events CASCADE;
DROP TABLE IF EXISTS affiliate_clicks CASCADE;
DROP TABLE IF EXISTS simulations CASCADE;
DROP TABLE IF EXISTS admin_sessions CASCADE;
DROP TABLE IF EXISTS leads CASCADE;

-- ============================================================
-- TABLE 1: LEADS
-- ============================================================
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Source
  source_page TEXT NOT NULL DEFAULT '/',
  source_form TEXT NOT NULL DEFAULT 'devis',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,

  -- Loan data (step 1)
  capital INTEGER NOT NULL,
  duree_restante INTEGER NOT NULL,
  banque_slug TEXT,
  banque_nom TEXT,
  taux_actuel DECIMAL(5,4),

  -- Profile data (step 2)
  tranche_age TEXT,
  fumeur BOOLEAN NOT NULL DEFAULT FALSE,
  profession_risque BOOLEAN NOT NULL DEFAULT FALSE,

  -- Calculated results (step 3)
  economie_estimee INTEGER,
  taux_delegation_estime DECIMAL(5,4),
  cout_mensuel_actuel INTEGER,
  cout_mensuel_delegation INTEGER,
  cout_total_actuel INTEGER,
  cout_total_delegation INTEGER,

  -- Top 3
  top3_assureur_1 TEXT,
  top3_assureur_2 TEXT,
  top3_assureur_3 TEXT,

  -- Contact
  prenom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT,

  -- Letter-specific fields
  nom_complet TEXT,
  adresse_postale TEXT,
  numero_pret TEXT,
  lettre_generee BOOLEAN DEFAULT FALSE,
  lettre_telechargee BOOLEAN DEFAULT FALSE,

  -- RGPD consent
  consent_marketing BOOLEAN NOT NULL DEFAULT FALSE,
  consent_date TIMESTAMPTZ,
  ip_address TEXT,
  user_agent TEXT,

  -- CRM
  status TEXT NOT NULL DEFAULT 'new',
  notes TEXT,

  -- Session tracking
  session_id TEXT,
  device_type TEXT
);

CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_banque ON leads(banque_slug);
CREATE INDEX idx_leads_source_form ON leads(source_form);
CREATE INDEX idx_leads_session_id ON leads(session_id);

-- ============================================================
-- TABLE 2: AFFILIATE CLICKS
-- ============================================================
CREATE TABLE affiliate_clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,
  session_id TEXT,

  insurer_slug TEXT NOT NULL,
  insurer_name TEXT,
  affiliate_platform TEXT NOT NULL DEFAULT 'awin',
  affiliate_url TEXT,

  source_page TEXT NOT NULL DEFAULT '/',
  source_component TEXT NOT NULL DEFAULT 'top3',

  capital INTEGER,
  banque_slug TEXT,
  economie_estimee INTEGER,
  tranche_age TEXT,

  device_type TEXT,
  user_agent TEXT,
  ip_address TEXT
);

CREATE INDEX idx_clicks_created_at ON affiliate_clicks(created_at DESC);
CREATE INDEX idx_clicks_session_id ON affiliate_clicks(session_id);
CREATE INDEX idx_clicks_lead_id ON affiliate_clicks(lead_id);
CREATE INDEX idx_clicks_insurer ON affiliate_clicks(insurer_slug);

-- ============================================================
-- TABLE 3: SIMULATIONS
-- ============================================================
CREATE TABLE simulations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  session_id TEXT,

  capital INTEGER NOT NULL,
  duree_restante INTEGER NOT NULL,
  banque_slug TEXT,
  taux_actuel DECIMAL(5,4),
  tranche_age TEXT,
  fumeur BOOLEAN NOT NULL DEFAULT FALSE,
  profession_risque BOOLEAN NOT NULL DEFAULT FALSE,

  economie_estimee INTEGER,
  taux_delegation_estime DECIMAL(5,4),

  has_converted BOOLEAN DEFAULT FALSE,
  lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,

  source_page TEXT NOT NULL DEFAULT '/',
  device_type TEXT,
  ip_address TEXT
);

CREATE INDEX idx_simulations_created_at ON simulations(created_at DESC);
CREATE INDEX idx_simulations_session_id ON simulations(session_id);
CREATE INDEX idx_simulations_converted ON simulations(has_converted);

-- ============================================================
-- TABLE 4: EMAIL EVENTS (Phase 2)
-- ============================================================
CREATE TABLE email_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE NOT NULL,

  sequence TEXT NOT NULL,
  step INTEGER NOT NULL,
  email_subject TEXT,

  sent_at TIMESTAMPTZ,
  opened_at TIMESTAMPTZ,
  clicked_at TIMESTAMPTZ,
  bounced_at TIMESTAMPTZ,
  unsubscribed_at TIMESTAMPTZ
);

CREATE INDEX idx_email_events_lead_id ON email_events(lead_id);

-- ============================================================
-- TABLE 5: ADMIN SESSIONS
-- ============================================================
CREATE TABLE admin_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  token TEXT NOT NULL UNIQUE
);

CREATE INDEX idx_admin_sessions_token ON admin_sessions(token);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliate_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE simulations ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_sessions ENABLE ROW LEVEL SECURITY;

-- Public can INSERT only (no read, no update, no delete)
CREATE POLICY "Allow public insert on leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on clicks" ON affiliate_clicks FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on simulations" ON simulations FOR INSERT WITH CHECK (true);

-- ============================================================
-- AUTO-UPDATE updated_at TRIGGER
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
