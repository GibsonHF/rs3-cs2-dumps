//
function script20543(int0: struct, int1: unknown_int): [int, int, int, int] {
    var int2 = script8418(int0, int1);
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = struct_getparam(int0, 3506);
    var int8 = struct_getparam(int0, 3509);
    var int9 = struct_getparam(int0, 3508);
    if ((IF_GETHIDE(int7) == false)) {
        int3 = struct_getparam(int2, 3550);
        int4 = struct_getparam(int2, 3547);
        int5 = (int3 + struct_getparam(int2, 3551));
        int6 = (int4 + struct_getparam(int2, 3549));
    };
    if ((((int8 != comp(-1, 65535)) && (int1 == 0)) && (IF_GETHIDE(int8) == false))) {
        if ((struct_getparam(int2, 8296) == 2)) {
            if ((IF_GETHIDE(int7) == false)) {
                int4 = (int4 + struct_getparam(int2, 3586));
                int6 = (int6 + struct_getparam(int2, 3586));
            };
            if (((int9 != comp(-1, 65535)) && (IF_GETHEIGHT(int9) > IF_GETHEIGHT(int8)))) {
                int6 = (int6 + IF_GETHEIGHT(int9));
                int6 = (int6 - struct_getparam(int2, 3549));
            } else {
                int6 = (int6 + IF_GETHEIGHT(int8));
            };
        } else {
            int4 = ((int4 + struct_getparam(int2, 3577)) + struct_getparam(int2, 3586));
            int6 = ((int6 + struct_getparam(int2, 3577)) + struct_getparam(int2, 3586));
        };
    } else if ((IF_GETHIDE(int7) == false)) {
        int4 = (int4 + struct_getparam(int2, 3586));
        int6 = (int6 + struct_getparam(int2, 3586));
    };
    return [int3, int4, int5, int6];
}