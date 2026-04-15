//
function script14145(string0: string, string1: string, string2: string): string {
    if ((STRING_LENGTH(string2) == 0)) {
        return string0;
    };
    if ((STRING_LENGTH(string1) > 0)) {
        if ((STRING_LENGTH(string0) > 0)) {
            return `${string0}<br><br><col=E0D471>${string1}</col><br>${string2}`;
        };
        return `<col=E0D471>${string1}</col><br>${string2}`;
    };
    return `${string0}${string2}`;
}