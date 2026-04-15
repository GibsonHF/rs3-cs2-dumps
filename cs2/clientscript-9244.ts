//
function script9244(int0: component, int1: int, int2: component, int3: int): void {
    var int4 = -1 as inv;
    var int5 = -1 as inv;
    var int6 = false;
    var int7 = false;
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    if ((((int1 != -1) && (int2 != comp(-1, 65535))) && (int3 != -1))) {
        if ((IF_FIND(int0) == 1)) {
            int8 = cc_getparam(3819);
        };
        if ((IF_FIND(int2) == 1)) {
            int9 = cc_getparam(3819);
        };
        if ((IF_FIND(int0) == 1)) {
            int4 = cc_getparam(3818);
            int6 = cc_getparam(3820);
        };
        if ((IF_FIND(int2) == 1)) {
            int5 = cc_getparam(3818);
            int7 = cc_getparam(3820);
        };
        if ((((((int4 == int5) && (int4 != -1 as inv)) && (int6 == false)) && (int5 != -1 as inv)) && (int7 == false))) {
            if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](int2, int3) == 1))) {
                script9245(int0, int1, int8, int4, int2, int3, int9, int5);
                script5824(int0, int1, int4, int2, int3, int5);
            };
        } else {
            script9248(int0, int1, int4, int2, int3, int5);
        };
    } else {
        script9248(int0, int1, int4, int2, int3, int5);
    };
    return;
}