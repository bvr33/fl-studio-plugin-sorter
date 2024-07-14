export function normalizeVendorName(vendorName: string): string {
  return vendorName.replace(',', ' ').replace('.', ' ').replace('  ', ' ').trim()
}
