//
function script14017(int0: int, int1: int): void {
    if ((IF_GETHIDE(comp(1934, 19)) == false)) {
        return;
    };
    var int2 = -1;
    if ((CC_FIND(comp(1934, 23), int0) == 1)) {
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
        script14019(comp(1934, 23), int0, int2);
    };
    return;
}