//
function script15884(string0: string, string1: string): int {
    var int0 = STRING_INDEXOF_STRING(string0, string1, 0);
    if ((int0 == -1)) {
        return 0;
    };
    var int1 = STRING_LENGTH(string0);
    var int2 = 1;
    int0 = (int0 + 1);
    while (((int0 != -1) && (int0 < int1))) {
        int0 = STRING_INDEXOF_STRING(string0, string1, int0);
        if ((int0 != -1)) {
            int2 = (int2 + 1);
            int0 = (int0 + 1);
        };
    };
    return int2;
}