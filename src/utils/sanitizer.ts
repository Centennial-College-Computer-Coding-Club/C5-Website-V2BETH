import {sanitize} from "isomorphic-dompurify";

export function sanitizeHtml(html: string): string {
    return sanitize(html, {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
        ALLOWED_ATTR: ['href']
    });
}
