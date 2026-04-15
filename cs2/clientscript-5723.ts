//
function script5723(int0: int): [struct, int, int, int, int, int, int, int, int] {
    var int1 = enum_getvalue(0, 73, 11807 as cs2enum, int0);
    if ((int1 == -1 as struct)) {
        return [-1 as struct, -1, -1, -1, -1, -1, -1, -1, -1];
    };
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var string0 = "null";
    var int10 = -1;
    int4 = struct_getparam(int1, 7180);
    if ((int4 == 7)) {
        int5 = 0;
        int7 = script766(int1);
        int8 = script1016(int1);
        if ((int8 == -1)) {
            int5 = struct_getparam(int1, 6099);
        };
    } else {
        int7 = struct_getparam(int1, 7184);
        int8 = struct_getparam(int1, 7185);
        int5 = struct_getparam(int1, 6099);
    };
    int2 = struct_getparam(int1, 5799);
    int3 = struct_getparam(int1, 7182);
    int6 = struct_getparam(int1, 6111);
    int10 = struct_getparam(int1, 6045);
    return [int1, int4, int7, int8, int3, int5, int2, int6, int10];
}