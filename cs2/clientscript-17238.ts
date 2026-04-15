//
function script17238(string0: string, string1: string): string {
    if ((STRING_LENGTH(string0) == 0)) {
        return string1;
    };
    if ((STRING_LENGTH(string1) == 0)) {
        return string0;
    };
    return `${string0}<br>${string1}`;
}