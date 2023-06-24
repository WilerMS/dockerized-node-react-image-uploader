export function isImage (file: File) {
  // An array of image MIME types
  const acceptedImageTypes = [
    'image/gif', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/x-png',
    'image/svg+xml', 'image/bmp', 'image/webp', 'image/avif', 'image/apng',
    'image/heic', 'image/heif', 'image/indd', 'image/jxl', 'image/tiff',
    'image/vnd.microsoft.icon', 'image/vnd.wap.wbmp', 'image/eps'
  ]

  // Check if the file's type is in the array of image types
  return file && acceptedImageTypes.includes(file.type)
}
