//
function script3586(int0: int, int1: int): int {
    var int2 = script13433(6);
    var int3 = struct_getparam(int2, 6583);
    var int4 = ENUM_GETOUTPUTCOUNT(int3);
    var int5 = enum_getvalue(0, 0, int3, int0);
    var int6 = 0;
    if ((int0 < int4)) {
        int6 = enum_getvalue(0, 0, int3, (int0 + 1));
    } else {
        int6 = enum_getvalue(0, 0, int3, int0);
    };
    var int7 = (int6 - int5);
    if ((((int7 == 0) || (int0 == int4)) || (int6 == -1))) {
        return 100;
    };
    return SCALE((int1 - int5), int7, 100);
}