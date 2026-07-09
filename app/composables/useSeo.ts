interface SeoInput {
  title: string
  description: string
  image?: string
  noIndex?: boolean
}

/**
 * Centralises page SEO: title, description, Open Graph, Twitter card, canonical
 * and robots. Relative image paths are resolved to absolute URLs for crawlers.
 */
export const useSeo = ({ title, description, image, noIndex }: SeoInput) => {
  const route = useRoute()
  const { public: { siteUrl } } = useRuntimeConfig()

  const canonical = `${siteUrl}${route.path}`
  const ogImage = image
    ? (image.startsWith('http') ? image : `${siteUrl}${image}`)
    : undefined

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: canonical,
    ogSiteName: 'Bham Designs',
    ogImage,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
  })
}
