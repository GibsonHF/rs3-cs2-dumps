//
function script17394(string0: string): long {
    var string0 = script17398(string0);
    var int0 = STRING_LENGTH(string0);
    var int1 = 0;
    var long0 = 0n;
    var long1 = 1n;
    while ((int0 > 0)) {
        int1 = STRING_INDEXOF_STRING("0123456789", SUBSTRING(string0, (int0 - 1), int0), 0);
        if ((int1 > 0)) {
            long0 = ADD_LONG(long0, MULTIPLY_LONG(long1, INT_TO_LONG(int1)));
        };
        if ((--int0 > 0)) {
            long1 = MULTIPLY_LONG(long1, 10n);
        };
    };
    return long0;
}