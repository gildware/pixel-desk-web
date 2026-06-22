import { cookies } from 'next/headers';
import { API_BASE_URL } from '@/src/config/api.config';

function getCookieHeader(cookieStore: Awaited<ReturnType<typeof cookies>>): string {
  return cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join('; ');
}

async function resolveApiUrl(relativeOrAbsolute: string): Promise<string> {
  if (relativeOrAbsolute.startsWith('http')) return relativeOrAbsolute;

  if (relativeOrAbsolute.startsWith('/api/proxy')) {
    const base = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '');
    if (!base) {
      throw new Error(
        'NEXT_PUBLIC_BASE_URL is required for server-side API proxy calls.',
      );
    }
    return `${base}${relativeOrAbsolute}`;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '');
  if (apiUrl) {
    return `${apiUrl}${relativeOrAbsolute}`;
  }

  return relativeOrAbsolute;
}

export async function getServerSession() {
  const cookieStore = await cookies();
  const cookieHeader = getCookieHeader(cookieStore);
  const sessionUrl = await resolveApiUrl(`${API_BASE_URL}/auth/session`);

  const res = await fetch(sessionUrl, {
    headers: {
      cookie: cookieHeader,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Not authenticated');
  }

  return res.json();
}
