//
function script12310(int0: component, int1: int, int2: int): [unknown_int, int, int] {
    var int3 = 0;
    var int4 = 0;
    var int5 = IF_GETNEXTSUBID(int0);
    if (((int2 < 0) || ((int1 + int2) > int5))) {
        return [0, int3, int4];
    };
    var int6 = 0;
    if ((IF_FIND(int0) == 1)) {
        int6 = cc_getparam(5643);
    };
    int6 = MODULO(((int6 + int5) - int1), int5);
    var int7 = -1;
    var int8 = 0;
    while ((++int7 < int2)) {
        if ((CC_FIND(int0, MODULO(((int6 + int5) - int7), int5)) == 1)) {
            int8 = cc_getparam(5946);
            [int3, int4] = script12312(int3, int4, int8);
        } else {
            return [0, int3, int4];
        };
    };
    return [1, int3, int4];
}