//
function script10451(int0: component, int1: component, int2: int, int3: int, int4: int, int5: int, int6: unknown_int): void {
    if ((((int0 != comp(-1, 65535)) && (IF_FIND(int0) == 1)) && ((cc_getparam(7250) != int3) || (cc_getparam(9106) != int2)))) {
        cc_setparam(7250, int3);
        cc_setparam(9106, int2);
        if (((int6 == 0) && (CC_FINDBYCATEGORY(int0, int2, int3) == 1))) {
            CC_TRIGGEROP(1);
            script10603(int0, int2, int3);
        };
        CC_DELETEALL(int1);
    };
    if (((int6 == 0) && (IF_GETNEXTSUBID(int1) > 0))) {
        return;
    };
    var int7 = ((int5 - int4) + 1);
    var int8 = 0;
    while ((int8 < int7)) {
        CC_CREATE(int1, 4, int8);
        CC_SETSIZE(1, 1, 0, 0);
        CC_SETPOSITION(-1, -1, 0, 0);
        CC_SETOP(1, "Select");
        int8 = (int8 + 1);
    };
    return;
}