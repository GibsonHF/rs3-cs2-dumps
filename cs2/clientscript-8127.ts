//
function script8127(int0: component, int1: int, int2: int, int3: unknown_int): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = script11695(int0);
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int6 == 0)) {
            if ((int2 < CC_GETWIDTH())) {
                int4 = MAX(int2, (CC_GETWIDTH() - 2));
            } else if ((int2 >= CC_GETWIDTH())) {
                int4 = MIN(int2, (CC_GETWIDTH() + 2));
            };
        } else if ((int2 < CC_GETHEIGHT())) {
            int4 = MAX(int2, (CC_GETHEIGHT() - 2));
        } else if ((int2 >= CC_GETHEIGHT())) {
            int4 = MIN(int2, (CC_GETHEIGHT() + 2));
        };
        script8128(int0, int4, int3);
        if ((int4 == int2)) {
            CC_SETONTIMER(callback());
        };
    };
    return;
}