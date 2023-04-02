export const getSizePreview = (
  size: 'small' | 'medium' | 'large' | 'extra-large'
) => {
  const options = {
    small: 80,
    medium: 144,
    large: 172,
    'extra-large': 260
  }
  return options[size]
}
