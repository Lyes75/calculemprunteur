-- ============================================================
-- CalculEmprunteur.fr - Supabase Database Schema
-- ============================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- 1. LEADS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Contact info
  prenom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT,

  -- Loan details
  capital NUMERIC NOT NULL,
  duree INTEGER NOT NULL,           -- in years
  age INTEGER,
  fumeur BOOLEAN DEFAULT FALSE,
  taux_actuel NUMERIC,              -- current insurance rate (%)

  -- Simulation results
  economie_estimee NUMERIC,         -- estimated savings in EUR
  mensualite_actuelle NUMERIC,
  mensualite_optimisee NUMERIC,

  -- Tracking
  session_id TEXT,
  source_form TEXT,                  -- e.g. 'hero', 'comparateur', 'landing'
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  referrer TEXT,
  device_type TEXT,                  -- 'mobile', 'tablet', 'desktop'
  ip_address TEXT,

  -- CRM fields
  status TEXT NOT NULL DEFAULT 'nouveau',  -- nouveau, contacte, en_cours, converti, perdu
  notes TEXT,
  banque_slug TEXT                    -- which insurer was clicked
);

-- Indexes for leads
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads (email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads (status);
CREATE INDEX IF NOT EXISTS idx_leads_session_id ON leads (session_id);
CREATE INDEX IF NOT EXISTS idx_leads_source_form ON leads (source_form);
CREATE INDEX IF NOT EXISTS idx_leads_banque_slug ON leads (banque_slug);

-- ============================================================
-- 2. AFFILIATE CLICKS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS affiliate_clicks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  session_id TEXT,
  insurer_slug TEXT NOT NULL,        -- e.g. 'cardif', 'april', 'swisslife'
  insurer_name TEXT,
  click_url TEXT,                    -- the affiliate link clicked
  source_page TEXT,                  -- page where click happened
  device_type TEXT,
  ip_address TEXT,
  user_agent TEXT,

  -- UTM tracking
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

-- Indexes for affiliate_clicks
CREATE INDEX IF NOT EXISTS idx_clicks_created_at ON affiliate_clicks (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_clicks_insurer_slug ON affiliate_clicks (insurer_slug);
CREATE INDEX IF NOT EXISTS idx_clicks_session_id ON affiliate_clicks (session_id);

-- ============================================================
-- 3. SIMULATIONS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS simulations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  session_id TEXT,
  capital NUMERIC NOT NULL,
  duree INTEGER NOT NULL,
  age INTEGER,
  fumeur BOOLEAN DEFAULT FALSE,
  taux_actuel NUMERIC,

  -- Results
  cout_actuel NUMERIC,
  cout_optimise NUMERIC,
  economie NUMERIC,
  mensualite_actuelle NUMERIC,
  mensualite_optimisee NUMERIC,

  -- Context
  source_form TEXT,
  device_type TEXT,
  ip_address TEXT,
  has_converted BOOLEAN DEFAULT FALSE,  -- set to true when a lead is captured from this session

  -- UTM tracking
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

-- Indexes for simulations
CREATE INDEX IF NOT EXISTS idx_simulations_created_at ON simulations (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_simulations_session_id ON simulations (session_id);
CREATE INDEX IF NOT EXISTS idx_simulations_has_converted ON simulations (has_converted);

-- ============================================================
-- 4. EMAIL EVENTS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS email_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL,          -- 'sent', 'delivered', 'opened', 'clicked', 'bounced', 'unsubscribed'
  email_type TEXT,                   -- 'welcome', 'followup', 'comparison', etc.
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Indexes for email_events
CREATE INDEX IF NOT EXISTS idx_email_events_lead_id ON email_events (lead_id);
CREATE INDEX IF NOT EXISTS idx_email_events_event_type ON email_events (event_type);
CREATE INDEX IF NOT EXISTS idx_email_events_created_at ON email_events (created_at DESC);

-- ============================================================
-- 5. ADMIN SESSIONS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS admin_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMPTZ NOT NULL,
  ip_address TEXT,
  user_agent TEXT
);

-- Indexes for admin_sessions
CREATE INDEX IF NOT EXISTS idx_admin_sessions_token ON admin_sessions (token);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_expires_at ON admin_sessions (expires_at);

-- ============================================================
-- TRIGGER: Auto-update updated_at on leads
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================

-- Enable RLS on all tables
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliate_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE simulations ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_sessions ENABLE ROW LEVEL SECURITY;

-- Public (anon) can INSERT into leads, affiliate_clicks, simulations
CREATE POLICY "Allow public insert on leads"
  ON leads FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public insert on affiliate_clicks"
  ON affiliate_clicks FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public insert on simulations"
  ON simulations FOR INSERT
  TO anon
  WITH CHECK (true);

-- Service role has full access (implicit, but explicit for clarity)
CREATE POLICY "Service role full access on leads"
  ON leads FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role full access on affiliate_clicks"
  ON affiliate_clicks FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role full access on simulations"
  ON simulations FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role full access on email_events"
  ON email_events FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role full access on admin_sessions"
  ON admin_sessions FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
