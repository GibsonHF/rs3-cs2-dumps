//
function script612(int0: number, string0: string, string1: string, string2: string): [string, number] {
    var int1 = STRING_LENGTH(string1);
    if ((STRING_LENGTH(string0) < int1)) {
        return [string0, 0];
    };
    if ((strcmp(string1, SUBSTRING(string0, 0, int1)) == 0)) {
        var string0 = script20896(string0, string1, string2, int0);
        return [string0, 1];
    };
    if ((STRING_INDEXOF_STRING(string0, ` ${string1}`, 0) != -1)) {
        string0 = script20896(string0, ` ${string1}`, ` ${string2}`, int0);
        return [string0, 1];
    };
    return [string0, 0];
}