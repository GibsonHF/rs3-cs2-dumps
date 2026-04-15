//
function script2332(string0: string, string1: string, string2: string): string {
    var int0 = STRING_INDEXOF_STRING(string0, string1, 0);
    var int1 = STRING_LENGTH(string1);
    while ((int0 != -1)) {
        var string0 = `${SUBSTRING(string0, 0, int0)}${string2}${SUBSTRING(string0, (int0 + int1), STRING_LENGTH(string0))}`;
        int0 = STRING_INDEXOF_STRING(string0, string1, int0);
    };
    return string0;
}