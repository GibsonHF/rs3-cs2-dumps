//
function script17398(string0: string): string {
    var int0 = STRING_LENGTH(string0);
    if ((int0 < 19)) {
        return string0;
    };
    if ((int0 > 19)) {
        return unk11054(9223372036854775807n, 10);
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var long0 = 1000000000000000000n;
    var int4 = (19 - 1);
    while ((int3 < int4)) {
        int1 = STRING_INDEXOF_STRING("0123456789", SUBSTRING(string0, int3, (int3 + 1)), 0);
        int2 = script17138(MODULO_LONG(DIVIDE_LONG(9223372036854775807n, long0), 10n));
        if ((int1 < int2)) {
            return string0;
        };
        if ((int1 > int2)) {
            return unk11054(9223372036854775807n, 10);
        };
        long0 = DIVIDE_LONG(long0, 10n);
        int3 = (int3 + 1);
    };
    return string0;
}