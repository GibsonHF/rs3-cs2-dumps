//
function script8142(int0: int, int1: int, int2: int): unknown_int {
    var int3 = struct_getparam(script10405(int0), 3503);
    if ((int3 == comp(-1, 65535))) {
        return 0;
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = 1;
    int4 = IF_GETX(int3);
    int5 = IF_GETY(int3);
    var [int4, int5, int1, int2, int6] = script8382(int4, int5, int1, int2, int0, 0, 1);
    if ((int6 == 1)) {
        script8387(int4, int5, int1, int2, int0);
    };
    return int6;
}