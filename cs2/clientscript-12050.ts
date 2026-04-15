//
function script12050(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script12538();
    if (((int3 < 0) || (int4 < 0))) {
        return;
    };
    if (((int3 == 3) && (int4 == 23))) {
        return;
    };
    while ((CC_FIND(int0, int1) == 1)) {
        if (((cc_getparam(5763) == int3) && (cc_getparam(5764) == int4))) {
            CC_SETCOLOUR(16711680);
            int2 = 1;
        } else {
            CC_SETCOLOUR(16777215);
        };
        int1 = (int1 + 1);
    };
    if ((int2 == 0)) {
        CC_CREATE(int0, 3, int1);
        CC_SETSIZE(5, 5, 0, 0);
        CC_SETFILL(1);
        CC_SETCOLOUR(16777215);
        CC_SETPOSITION((int3 * 5), (int4 * 5), 0, 2);
        cc_setparam(5763, int3);
        cc_setparam(5764, int4);
    };
    return;
}