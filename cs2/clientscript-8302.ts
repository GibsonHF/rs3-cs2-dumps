//
function script8302(int0: int, int1: int): [int, int] {
    if ((int0 == -1)) {
        return [0, 0];
    };
    var int2 = script10405(int0);
    var int3 = script8418(int2, 0);
    var int4 = struct_getparam(int2, 3509);
    var int5 = 0;
    var int6 = 0;
    if (((int4 != comp(-1, 65535)) && (int3 != -1 as struct))) {
        if ((IF_GETHIDE(int4) == true)) {
            int4 = struct_getparam(int2, 3506);
            int5 = ((script8407(int4) + struct_getparam(int3, 3550)) - 12);
            int6 = ((script8408(int4) + struct_getparam(int3, 3548)) + 6);
        } else {
            int5 = ((script8407(int4) + script8375(int0, int1)) - 12);
            int6 = (script8408(int4) + 6);
        };
    };
    return [int5, int6];
}