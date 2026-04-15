//
function script9256(int0: component, int1: int, int2: component, int3: inv, int4: component, int5: int, int6: component, int7: inv): unknown_int {
    if ((varplayer_1784 == -1 as npc)) {
        return 0;
    };
    if (((int3 == -1 as inv) || (int7 == -1 as inv))) {
        return 0;
    };
    if (((int1 < 0) || (int1 >= INV_SIZE(int3)))) {
        return 0;
    };
    var int8 = -1 as obj;
    var int9 = -1;
    if ((CC_FIND(int0, int1) == 1)) {
        int8 = CC_GETINVOBJECT();
        int9 = CC_GETINVCOUNT();
    };
    if ((int8 == -1 as obj)) {
        return 0;
    };
    if ((int5 == -1)) {
        var int5 = script3797(int4);
        if ((int5 == -1)) {
            return 0;
        };
    };
    var int10 = -1 as obj;
    var int11 = -1;
    if ((((int4 != comp(-1, 65535)) && (int5 != -1)) && (CC_FIND(int4, int5) == 1))) {
        int10 = CC_GETINVOBJECT();
        int11 = CC_GETINVCOUNT();
    };
    if ((int10 != -1 as obj)) {
        if (((OC_STACKABLE(int8) == 1) && ((int8 == int10) || (INV_TOTAL(int7, int8) > 0)))) {
            int10 = -1 as obj;
            int11 = 0;
        } else {
            int11 = MIN(int11, INV_TOTAL(int7, int10));
            if ((int11 <= 0)) {
                return 0;
            };
        };
    };
    if ((int7 == 530 as inv)) {
        if (((script9257(int3, int8, 0) == 1) || (script14291(int8, 0) == 1))) {
            return 0;
        };
    } else if (((int10 != -1 as obj) && ((script9257(int7, int10, 0) == 1) || (script14291(int10, 0) == 1)))) {
        return 0;
    };
    var int12 = script11682(varplayer_1784);
    var int13 = 0;
    var int14 = 0;
    if ((OC_STACKABLE(int8) == 1)) {
        int13 = script11677(int4, int7, int8);
        if ((int13 == -1)) {
            int14 = 0;
        } else if ((CC_FIND(int4, int13) == 1)) {
            int14 = CC_GETINVCOUNT();
        };
        if ((int14 > 0)) {
            if (((2147483647 - int9) < INV_TOTAL(int7, int8))) {
                int9 = 2147483647;
            } else {
                int9 = (int9 + INV_TOTAL(int7, int8));
            };
            int5 = script9250(int7, int8);
            if ((CC_FIND(int4, int5) == 1)) {
                CC_SETOBJECT(int8, int9);
            };
            if ((CC_FIND(int0, int1) == 1)) {
                CC_SETOBJECT(-1 as obj, 0);
                CC_CLEAROPS();
            };
            return 1;
        };
    };
    if ((((int10 != -1 as obj) && (OC_STACKABLE(int10) == 1)) && (int10 == int8))) {
        if (((2147483647 - int11) < INV_TOTAL(int3, int10))) {
            int11 = 2147483647;
        } else {
            int11 = (int11 + INV_TOTAL(int3, int10));
        };
        int13 = script9250(int3, int10);
        if ((CC_FIND(int0, int13) == 1)) {
            CC_SETOBJECT(int10, int11);
        };
        if ((CC_FIND(int4, int5) == 1)) {
            CC_CLEAROPS();
            CC_SETOBJECT(-1 as obj, 0);
        };
    };
    script9245(int0, int1, int2, int3, int4, int5, int6, int7);
    return 1;
}