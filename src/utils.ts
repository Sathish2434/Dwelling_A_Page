// Format a rupee amount into a compact, premium-looking label (e.g. ₹1.25 Cr, ₹84 L).
export function formatPrice(amount: number): string {
  if (amount >= 10000000) {
    const cr = amount / 10000000
    return `₹${cr % 1 === 0 ? cr : cr.toFixed(2)} Cr`
  }
  if (amount >= 100000) {
    const l = amount / 100000
    return `₹${l % 1 === 0 ? l : l.toFixed(1)} L`
  }
  return `₹${amount.toLocaleString('en-IN')}`
}

export function formatPerSqFt(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}/sq ft`
}
