//
function script17397(string0: string): string {
    var int0 = STRING_LENGTH(string0);
    if ((int0 < 10)) {
        return string0;
    };
    if ((int0 > 10)) {
        return inttostring(2147483647, 10);
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    while ((int3 < 10)) {
        int1 = STRING_INDEXOF_STRING("0123456789", SUBSTRING(string0, int3, (int3 + 1)), 0);
        int2 = MODULO((2147483647 / POW(10, (9 - int3))), 10);
        if ((int1 < int2)) {
            return string0;
        };
        if ((int1 > int2)) {
            return inttostring(2147483647, 10);
        };
        int3 = (int3 + 1);
    };
    return string0;
}