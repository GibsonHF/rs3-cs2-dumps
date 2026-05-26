//
function script14387(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    [int5, int6, int7] = script15906(varbitplayer_22179);
    if (((int5 == -1) || (int4 >= INV_SIZE(int5)))) {
        return;
    };
    var int8 = script3504(int2);
    if (((int5 == 741) && ((script9257(741, int8, 1) == 1) || (script14291(int8, 1) == 1)))) {
        return;
    };
    var int9 = -1;
    if (((OC_STACKABLE(int8) == 1) || (int8 != OC_UNCERT(int8)))) {
        int9 = script12517(int5, int8, 0);
        if ((int9 != -1)) {
            var int4 = int9;
            var int3 = script11882(int3, INV_GETNUM(int5, int4));
        };
    };
    if ((CC_FIND(33882391, int4) == 1)) {
        CC_SETOBJECT(int8, int3);
    };
    return;
}