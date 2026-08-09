//
function script14764(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number): void {
    script11624(int0, -1, int6, int4, int5, 0, 1);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(int9, int10, 0, 0);
    CC_SETPOSITION(((int4 + ((int7 - int9) / 2)) + 2), (int5 + ((int8 - int10) / 2)), 0, 0);
    if ((item_getparam(int2, 6580) != -1 as graphic)) {
        CC_SETGRAPHIC(item_getparam(int2, 6580));
        if ((int3 == 0)) {
            CC_SETTRANS(40);
            CC_SETCOLOUR(1315860);
        };
    } else if ((int3 > 0)) {
        CC_SETOBJECT(int2, int3);
    } else {
        CC_SETOBJECT_NONUM(int2, 1);
        CC_SETTRANS(40);
        CC_SETCOLOUR(1315860);
    };
    if ((int1 != comp(-1, 65535))) {
        CC_SETONMOUSEREPEAT(callback(script9564, int2, -2147483645, CC_GETID()));
        CC_CREATE(int1, 4, int11);
        CC_SETSIZE(int9, int10, 0, 0);
        CC_SETPOSITION(((int4 + ((int7 - int9) / 2)) + 2), (int5 + ((int8 - int10) / 2)), 0, 0);
        CC_SETOPBASE(`${script4033(int2)}${OC_NAME(int2)}`);
    } else {
        script14738(int2);
    };
    return;
}