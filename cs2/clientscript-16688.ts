//
function script16688(int0: component, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        int2 = (enum_getvalue(0, 0, 9054 as cs2enum, script16684(cc_getparam(8629), cc_getparam(8628))) + 100);
        int3 = (cc_getparam(4058) + SCALE(cc_getparam(8550), 200, int2));
        int4 = (cc_getparam(4059) + SCALE(cc_getparam(8627), 200, int2));
        int3 = MAX(1, int3);
        int4 = MAX(1, int4);
        if ((int2 >= 0)) {
            if ((MODULO(cc_getparam(4058), 2) != MODULO(int3, 2))) {
                int3 = (int3 - 1);
            };
            if ((MODULO(cc_getparam(4059), 2) != MODULO(int4, 2))) {
                int4 = (int4 - 1);
            };
        } else {
            if ((MODULO(cc_getparam(4058), 2) != MODULO(int3, 2))) {
                int3 = (int3 + 1);
            };
            if ((MODULO(cc_getparam(4059), 2) != MODULO(int4, 2))) {
                int4 = (int4 + 1);
            };
        };
        CC_SETSIZE(int3, int4, 0, 0);
    };
    return;
}