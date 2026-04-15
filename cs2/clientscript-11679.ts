//
function script11679(int0: inv, int1: component, int2: int, int3: inv, int4: component, int5: int): void {
    var int6 = -1 as obj;
    var int7 = -1;
    var int8 = -1;
    var int9 = comp(-1, 65535);
    var int10 = comp(-1, 65535);
    if ((IF_FIND(int1) == 1)) {
        int10 = cc_getparam(3819);
    };
    if ((IF_FIND(int4) == 1)) {
        int9 = cc_getparam(3819);
    };
    if ((CC_FIND(int1, int2) == 1)) {
        if (((int0 == 530 as inv) && (int3 == 93 as inv))) {
            int6 = CC_GETINVOBJECT();
            if (((int6 != -1 as obj) && (CC_FIND[1](int4, int5) == 1))) {
                script9256(int1, int2, int10, int0, int4, int5, int9, int3);
            };
        } else if (((int0 == 93 as inv) && (int3 == 530 as inv))) {
            int6 = CC_GETINVOBJECT();
            if (((int6 != -1 as obj) && (CC_FIND[1](int4, int5) == 1))) {
                script9256(int1, int2, int10, int0, int4, int5, int9, int3);
            };
        };
    };
    return;
}