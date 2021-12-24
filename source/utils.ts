export function parseTimezoneToUse(tzString: string): string {
    return tzString.replace(/\*/g, '/');
}

export function parseTimezoneToShow(tzString: string): string {
    return tzString.replace(/\//g, '*');
}

export function convertTZ(date: Date | string, tzString: string): Date {
    return new Date(
        (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString})
    );
}