// Ben Darlington
// Input Sanitizer Module
class Sanitizer {
  static sanitize(input) {
    if (typeof input !== 'string') return '';

    let clean = input;

    // Remove script and style tags with their contents
    clean = clean.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '');

    // Strip remaining HTML tags but preserve text content
    clean = clean.replace(/<[^>]*>/g, '');

    // Encode potentially dangerous characters instead of removing them
    clean = clean
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/\\/g, '&#92;')
      .replace(/;/g, '&#59;');

    // Normalize whitespace
    clean = clean.replace(/\s+/g, ' ').trim();

    return clean;
  }
}
