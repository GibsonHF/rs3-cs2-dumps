//
function script14017(int0: number, int1: number): void {
    if ((IF_GETHIDE(126746643) == 0)) {
        return;
    };
    var int2 = -1;
    if ((CC_FIND(126746647, int0) == 1)) {
        if ((int1 == 1)) {
            int2 = enum_getvalue(0, 0, 13526 as cs2enum, cc_getparam(5691));
        } else {
            int2 = (int1 - 1);
            if ((int2 == 6)) {
                int2 = 0;
            };
        };
        if ((int2 == -1)) {
            return;
        };
        script14019(126746647, int0, int2);
    };
    return;
}