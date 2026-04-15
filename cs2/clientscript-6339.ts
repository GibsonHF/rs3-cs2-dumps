//
function script6339(int0: component, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = -1 as obj;
    while ((int2 < int1)) {
        if ((CC_FIND(int0, int2) == 1)) {
            if ((script6340(int2) == 1)) {
                int5 = enum_getvalue(0, 33, 5918 as cs2enum, int2);
                int4 = enum_getvalue(0, 0, 5919 as cs2enum, int2);
                if (((OC_STACKABLE(int5) == 0) || (int2 == 0))) {
                    int4 = (int4 - INV_TOTAL(93 as inv, int5));
                };
                if ((int4 > 0)) {
                    CC_SETOBJECT(int5, int4);
                    CC_SETHIDE(false);
                    CC_SETPOSITION((50 * MODULO(int3, 3)), (50 * (int3 / 3)), 0, 0);
                    int3 = (int3 + 1);
                } else {
                    CC_SETHIDE(true);
                };
            } else {
                CC_SETHIDE(true);
            };
        };
        int2 = (int2 + 1);
    };
    return;
}