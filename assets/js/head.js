export const generateHead = ({ title, description, image, noIndex }) => {
  const head = {
    title,
    meta: [
      { hid: 'description', name: 'description', content: description },
      { hid: 'ogTitle', property: 'og:title', content: title },
      { hid: 'ogImage', property: 'og:image', content: image },
      {
        hid: 'ogDescription',
        property: 'og:description',
        content: description,
      },
    ],
  }

  if (noIndex) {
    head.meta.push({
      hid: 'robots',
      name: 'robots',
      content: 'noindex',
    })
  }

  return head
}
