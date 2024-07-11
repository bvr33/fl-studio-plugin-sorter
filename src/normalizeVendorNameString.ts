export function normalizeVendorNameString(vendorName: string): string {
  return vendorName.replace(',', ' ').replace('.', ' ').replace('  ', ' ').trim()
}
