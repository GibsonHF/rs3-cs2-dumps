//
function script4629(int0: number, int1: number, int2: number, int3: number): void {
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
                IF_SETHIDE(true, int2);
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