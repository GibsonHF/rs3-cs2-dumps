//
function script6194(int0: int): [struct, int, int, int, int, int] {
    var int1 = enum_getvalue(0, 73, 11807 as cs2enum, int0);
    if ((int1 == -1 as struct)) {
        return [-1 as struct, -1, -1, -1, -1, -1];
    };
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    int5 = struct_getparam(int1, 7180);
    if ((int5 == 7)) {
        int6 = 0;
        int3 = script766(int1);
        int4 = script1016(int1);
    } else {
        int3 = struct_getparam(int1, 7184);
        int4 = struct_getparam(int1, 7185);
        int6 = struct_getparam(int1, 6099);
        int2 = struct_getparam(int1, 5799);
    };
    return [int1, int5, int3, int4, int6, int2];
}