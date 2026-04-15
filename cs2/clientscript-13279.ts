//
function script13279(int0: struct): [int, int] {
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(11155 as cs2enum);
    var int3 = -1;
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as struct;
    var int8 = -1 as cs2enum;
    var int9 = -1 as cs2enum;
    if ((struct_getparam(int0, 6590) != -1 as struct)) {
        var int0 = struct_getparam(int0, 6590);
    };
    while (((int1 < int2) && (int3 == -1))) {
        int7 = enum_getvalue(0, 73, 11155 as cs2enum, int1);
        int9 = struct_getparam(int7, 6422);
        if (((int9 != -1 as cs2enum) && (enum_hasoutput(73, int9, int0) == 1))) {
            int3 = int1;
        };
        int8 = struct_getparam(int7, 6420);
        if (((int8 != -1 as cs2enum) && (int3 == -1))) {
            int5 = 0;
            int6 = ENUM_GETOUTPUTCOUNT(int8);
            while (((int5 < int6) && (int3 == -1))) {
                int7 = enum_getvalue(0, 73, int8, int5);
                int9 = struct_getparam(int7, 6422);
                if (((int9 != -1 as cs2enum) && (enum_hasoutput(73, int9, int0) == 1))) {
                    int3 = int1;
                    int4 = int5;
                    int5 = int6;
                };
                int5 = (int5 + 1);
            };
        };
        int1 = (int1 + 1);
    };
    return [(int3 + 1), int4];
}