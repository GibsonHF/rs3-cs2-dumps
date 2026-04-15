//
function script13588(int0: cs2enum): [int, int] {
    if ((int0 == -1 as cs2enum)) {
        return [0, 0];
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(int0);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as cs2enum;
    var int8 = -1 as struct;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as struct;
    while ((int1 < int3)) {
        int8 = enum_getvalue(0, 73, int0, int1);
        int7 = struct_getparam(int8, 8072);
        if ((int7 != -1 as cs2enum)) {
            int9 = 0;
            int10 = ENUM_GETOUTPUTCOUNT(int7);
            int5 = 0;
            int4 = 0;
            while ((int9 < int10)) {
                int11 = enum_getvalue(0, 73, int7, int9);
                if ((int11 != -1 as struct)) {
                    if ((script13280(int11) == -2)) {
                        int5 = (int5 + 1);
                        int4 = (int4 + 1);
                    } else if ((struct_getparam(int11, 6797) == 0)) {
                        int5 = (int5 + 1);
                    };
                };
                int9 = (int9 + 1);
            };
            if ((int4 >= int5)) {
                int2 = (int2 + 1);
            };
        };
        int1 = (int1 + 1);
    };
    return [int2, int3];
}