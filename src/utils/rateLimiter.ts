interface RateLimiterEntry {
    count: number;
    lastReset: number;
}

class RateLimiter {
    private limits: Map<string, RateLimiterEntry> = new Map();
    private readonly maxRequests: number;
    private readonly windowMs: number;

    constructor(maxRequests: number, windowMs: number) {
        this.maxRequests = maxRequests;
        this.windowMs = windowMs;
    }

    check(key: string): boolean {
        const now = Date.now();
        const entry = this.limits.get(key);

        if (!entry) {
            this.limits.set(key, { count: 1, lastReset: now });
            return true;
        }

        if (now - entry.lastReset > this.windowMs) {
            entry.count = 1;
            entry.lastReset = now;
            return true;
        }

        if (entry.count < this.maxRequests) {
            entry.count++;
            return true;
        }

        return false;
    }
}

export function getClientIP(request: Request): string {
    const forwardedFor = request.headers.get('x-forwarded-for');
    if (forwardedFor) {
        return forwardedFor.split(',')[0].trim();
    }
    return request.headers.get('x-real-ip') || 'unknown';
}

export const blogPostLimiter = new RateLimiter(2, 60 * 60 * 1000);
export const contactFormLimiter = new RateLimiter(2, 60 * 60 * 1000);
export const joinLimiter = new RateLimiter(1, 60 * 60 * 1000);