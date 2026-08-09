//
function script11679(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
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
        if ((int0 == 530)) {
            if ((int3 == 93)) {
                int6 = CC_GETINVOBJECT();
                if (((int6 != -1 as obj) && (CC_FIND[1](int4, int5) == 1))) {
                    script9256(int1, int2, int10, int0, int4, int5, int9, int3);
                };
            } else if (((int0 == 93) && (int3 == 530))) {
                int6 = CC_GETINVOBJECT();
                if (((int6 != -1 as obj) && (CC_FIND[1](int4, int5) == 1))) {
                    script9256(int1, int2, int10, int0, int4, int5, int9, int3);
                };
            };
        } else if (((int0 == 93) && (int3 == 530))) {
            int6 = CC_GETINVOBJECT();
            if (((int6 != -1 as obj) && (CC_FIND[1](int4, int5) == 1))) {
                script9256(int1, int2, int10, int0, int4, int5, int9, int3);
            };
        };
    };
    return;
}