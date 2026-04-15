//
function script4629(int0: unknown_int, int1: component, int2: unknown_int, int3: unknown_int): void {
    var int4 = 0;
    var int5 = 50;
    if ((int3 == 1)) {
        int5 = 86;
    };
    if ((IF_FIND(int1) == 1)) {
        if ((int0 == 1)) {
            int4 = (CC_GETWIDTH() + 3);
            int4 = MIN(int5, int4);
            if ((int4 == int5)) {
                CC_SETONTIMER(callback());
            };
        } else {
            int4 = (CC_GETWIDTH() - 3);
            int4 = MAX(1, int4);
            if ((int4 == 1)) {
                CC_SETONTIMER(callback());
                IF_SETHIDE(1, int2);
            };
        };
        if ((int3 == 0)) {
            CC_SETSIZE(int4, 19, 0, 0);
        } else {
            CC_SETSIZE(int4, 27, 0, 0);
        };
    };
    return;
}