'use client';

/**
 * Client-side session management.
 * Generates a unique session_id stored in a 30-day cookie.
 */

const COOKIE_NAME = 'calc_session_id';
const COOKIE_DAYS = 30;

export function getSessionId(): string {
  // Try to read existing session from cookie
  const existing = getCookie(COOKIE_NAME);
  if (existing) return existing;

  // Generate new session ID
  const sessionId = crypto.randomUUID();
  setCookie(COOKIE_NAME, sessionId, COOKIE_DAYS);
  return sessionId;
}

export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';

  const ua = navigator.userAgent.toLowerCase();
  const width = window.innerWidth;

  if (/mobile|android|iphone|ipod|blackberry|opera mini|iemobile/i.test(ua) || width < 768) {
    return 'mobile';
  }
  if (/tablet|ipad|playbook|silk/i.test(ua) || (width >= 768 && width < 1024)) {
    return 'tablet';
  }
  return 'desktop';
}

// ---- Cookie helpers ----

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return;
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
}
