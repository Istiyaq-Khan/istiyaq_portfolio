/**
 * SEO utility functions for generating slugs, extracting keywords, and formatting metadata
 */

/**
 * Generate a URL-friendly slug from a title
 * @param title - The title to convert to a slug
 * @returns A URL-friendly slug
 */
export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Truncate and clean HTML description for meta tags
 * @param htmlOrText - HTML or plain text description
 * @param maxLength - Maximum character length (default 160 for meta descriptions)
 * @returns Clean, truncated text suitable for meta descriptions
 */
export function truncateDescription(htmlOrText: string, maxLength: number = 160): string {
    // Strip HTML tags
    const plainText = htmlOrText.replace(/<[^>]*>/g, '');

    // Decode HTML entities
    const decoded = plainText
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"');

    // Clean up whitespace
    const cleaned = decoded.replace(/\s+/g, ' ').trim();

    // Truncate to maxLength, breaking at last space
    if (cleaned.length <= maxLength) {
        return cleaned;
    }

    const truncated = cleaned.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');

    return lastSpace > 0
        ? truncated.substring(0, lastSpace) + '...'
        : truncated + '...';
}

/**
 * Extract keywords from text (simple implementation)
 * @param text - Text to extract keywords from
 * @param maxKeywords - Maximum number of keywords to return
 * @returns Array of keywords
 */
export function extractKeywords(text: string, maxKeywords: number = 10): string[] {
    // Strip HTML
    const plainText = text.replace(/<[^>]*>/g, '');

    // Common words to exclude
    const stopWords = new Set([
        'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
        'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'be',
        'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will',
        'would', 'should', 'could', 'may', 'might', 'must', 'can', 'this',
        'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they'
    ]);

    // Extract words, filter stop words, count frequency
    const words = plainText
        .toLowerCase()
        .match(/\b[a-z]{3,}\b/g) || [];

    const wordFreq = new Map<string, number>();
    words.forEach(word => {
        if (!stopWords.has(word)) {
            wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
        }
    });

    // Sort by frequency and return top N
    return Array.from(wordFreq.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, maxKeywords)
        .map(([word]) => word);
}

/**
 * Generate canonical URL
 * @param path - Path relative to site root
 * @param baseUrl - Base URL of the site
 * @returns Full canonical URL
 */
export function generateCanonicalUrl(path: string, baseUrl: string = 'https://istiyaq.vercel.app'): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${baseUrl}${cleanPath}`;
}

/**
 * Format date for sitemap
 * @param date - Date to format
 * @returns ISO 8601 formatted date string
 */
export function formatSitemapDate(date: Date): string {
    return date.toISOString();
}
