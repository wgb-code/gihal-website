import type { MetadataRoute } from 'next'
import { produtos } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gihal.com.br'
  const now = new Date().toISOString()

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/produtos',
    '/tecnologia',
    '/revendedores',
    '/noticias',
    '/empresa',
    '/contato',
    '/suporte',
    '/carreiras',
    '/privacidade',
    '/termos',
  ].map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: 'weekly', priority: path === '' ? 1 : 0.6 }))

  const productRoutes: MetadataRoute.Sitemap = produtos.map((p) => ({
    url: `${base}/produtos/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...productRoutes]
}


