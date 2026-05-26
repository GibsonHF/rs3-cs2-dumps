//
function script16446(string0: string): void {
    var string1 = "<br>";
    var int0 = STRING_INDEXOF_STRING(string0, string1, 0);
    if ((int0 == -1)) {
        string1 = ": ";
        int0 = STRING_INDEXOF_STRING(string0, string1, 0);
    };
    var string2 = string0;
    var string3 = "";
    if ((int0 != -1)) {
        string2 = SUBSTRING(string0, 0, int0);
        string3 = SUBSTRING(string0, (int0 + STRING_LENGTH(string1)), STRING_LENGTH(string0));
    };
    if (((STRING_LENGTH(string2) == 0) && (STRING_LENGTH(string3) == 0))) {
        return;
    };
    var int1 = comp(1486, 14);
    var int2 = MIN((480 - (2 * 4)), PARAWIDTH(string2, 1000, 58 as fontmetrics));
    if ((STRING_LENGTH(string3) > 0)) {
        int2 = MAX(int2, MIN((480 - (2 * 4)), PARAWIDTH(string3, 1000, 29 as fontmetrics)));
    };
    int2 = (int2 + (2 * 4));
    var int3 = script14747(int1, 0, 0, int2, string2, -1, 0);
    var int4 = -1;
    if ((STRING_LENGTH(string3) > 0)) {
        int3 = script14748(int1, 0, int3);
        [int4, int3] = script14749(int1, 0, int3, 0, 0);
        int3 = script14757(int1, 4, int3, (int2 - 4), string3, -1);
        int3 = (int3 + 8);
        script14750(int1, int4, int3, 0);
    };
    IF_SETSIZE(int2, int3, 0, 0, int1);
    return;
}