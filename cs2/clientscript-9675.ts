//
function script9675(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(2350 as cs2enum);
    var int2 = comp(-1, 65535);
    while ((int0 < int1)) {
        int2 = enum_getvalue(0, 9, 2350 as cs2enum, int0);
        if ((int2 != comp(-1, 65535))) {
            if ((varplayer_2644 == comp(-1, 65535))) {
                IF_SETOP(1, "Select", int2);
                IF_SETOP(2, "Reset", int2);
            } else {
                IF_CLEAROPS(int2);
            };
        };
        int0 = (int0 + 1);
    };
    return;
}