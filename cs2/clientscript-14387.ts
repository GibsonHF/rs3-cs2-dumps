//
function script14387(int0: inv, int1: int, int2: obj, int3: int, int4: int): void {
    var int5 = -1 as inv;
    var int6 = -1 as inv;
    var int7 = -1 as inv;
    [int5, int6, int7] = script15906(varbitplayer_22179);
    if (((int5 == -1 as inv) || (int4 >= INV_SIZE(int5)))) {
        return;
    };
    var int8 = script3504(int2);
    if (((int5 == 741 as inv) && ((script9257(741 as inv, int8, 1) == 1) || (script14291(int8, 1) == 1)))) {
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
    if ((CC_FIND(comp(517, 279), int4) == 1)) {
        CC_SETOBJECT(int8, int3);
    };
    return;
}