export type AnalyticsEventParams = Record<string, unknown>

declare global {
    interface Window {
        dataLayer?: Array<Record<string, unknown>>
    }
}

export function trackEvent(eventName: string, params: AnalyticsEventParams = {}): void {
    if (typeof window === "undefined") {
        return
    }

    try {
        const payload = { event: eventName, ...params }

        if (Array.isArray(window.dataLayer)) {
            window.dataLayer.push(payload)
        }

        if (process.env.NODE_ENV !== "production") {
            console.debug("Analytics event: ", payload)
        }
    } catch (err) {
        console.error("Não foi possível enviar evento para o Google Analytics", err)
    }
}


