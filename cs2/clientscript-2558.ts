//
function script2558(): void {
    var int0 = 0;
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = 0;
    while ((int0 <= (60 - 1))) {
        int1 = enum_getvalue(0, 9, 9993 as cs2enum, int0);
        int2 = enum_getvalue(0, 9, 9994 as cs2enum, int0);
        int3 = script2531(int0);
        if ((int3 == 1)) {
            IF_SETHIDE(false, int1);
            IF_SETHIDE(false, int2);
            IF_SETCOLOUR(16777215, int2);
        } else if ((int3 == 2)) {
            IF_SETHIDE(false, int1);
            IF_SETHIDE(false, int2);
            IF_SETCOLOUR(65280, int2);
        } else if ((int3 == 0)) {
            IF_SETHIDE(true, int1);
            IF_SETHIDE(true, int2);
        };
        int0 = (int0 + 1);
    };
    return;
}