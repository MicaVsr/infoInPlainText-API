export function parseTimezoneToUse(tzString: string): string {
    return tzString.replace(/\*/g, '/');
}

export function parseTimezoneToShow(tzString: string): string {
    return tzString.replace(/\//g, '*');
}