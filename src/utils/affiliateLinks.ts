const MAGNOLIA_BASE = 'https://www.magnolia.fr/comparer-assurance-pret-immobilier';

export function getMagnoliaLink(placement: string): string {
  const params = new URLSearchParams({
    utm_source: 'Netaudience',
    utm_medium: 'referral',
    utm_campaign: 'calculemprunteur',
    utm_content: placement,
  });
  return `${MAGNOLIA_BASE}?${params.toString()}`;
}
