//
function script7850(string0: string): unknown_int {
    var int0 = STRING_LENGTH(string0);
    if ((int0 > 12)) {
        return 0;
    };
    var int1 = 0;
    while ((int1 < int0)) {
        if ((STRING_INDEXOF_STRING("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789  _-", SUBSTRING(string0, int1, (int1 + 1)), 0) == -1)) {
            return 0;
        };
        int1 = (int1 + 1);
    };
    return 1;
}