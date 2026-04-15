//
function script19609(string0: string, string1: string, string2: string): string {
    var int0 = STRING_INDEXOF_STRING(string0, string1, 0);
    if ((int0 == -1)) {
        return string0;
    };
    var int1 = STRING_LENGTH(string1);
    var string3 = SUBSTRING(string0, 0, int0);
    var string4 = SUBSTRING(string0, (int0 + int1), STRING_LENGTH(string0));
    return `${string3}${string2}${string4}`;
}