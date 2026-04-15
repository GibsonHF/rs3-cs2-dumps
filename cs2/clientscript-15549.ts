//
function script15549(string0: string): unknown_int {
    var int0 = STRING_LENGTH(string0);
    var int1 = 0;
    while ((int1 < int0)) {
        if ((STRING_INDEXOF_STRING("0123456789", SUBSTRING(string0, int1, (int1 + 1)), 0) == -1)) {
            return 1;
        };
        int1 = (int1 + 1);
    };
    return 0;
}