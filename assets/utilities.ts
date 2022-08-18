export const formatDate = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000)
  return date.toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric',
  })
}