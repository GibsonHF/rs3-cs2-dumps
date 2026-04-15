//
function script18930(int0: struct, int1: int): int {
    if ((int0 == -1 as struct)) {
        return 0;
    };
    var int2 = struct_getparam(int0, 3839);
    if ((int2 == -1 as cs2enum)) {
        return struct_getparam(int0, 4631);
    };
    var int3 = ENUM_GETOUTPUTCOUNT(int2);
    if ((int3 == 0)) {
        return 0;
    };
    var int4 = 0;
    if ((enum_getreversecount(0, int2, int1) > 0)) {
        int4 = 1;
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    if ((int4 == 0)) {
        int6 = enum_getvalue(0, 0, int2, 0);
        if ((int1 > int6)) {
            return int6;
        };
        int5 = int3;
        while ((--int5 >= 0)) {
            int6 = enum_getvalue(0, 0, int2, int5);
            if ((int1 < int6)) {
                int7 = enum_getvalue(0, 0, int2, (int5 - 1));
                while ((int7 == (int6 + 1))) {
                    int5 = (int5 - 1);
                    int6 = enum_getvalue(0, 0, int2, int5);
                    int7 = enum_getvalue(0, 0, int2, (int5 - 1));
                };
                return int6;
            };
        };
    } else {
        int5 = enum_getreverseindex(0, 0, int2, int1, 0);
        while ((int5 >= 0)) {
            int6 = enum_getvalue(0, 0, int2, int5);
            if ((enum_getvalue(0, 0, int2, (int5 - 1)) != (int6 + 1))) {
                return int6;
            };
            int5 = (int5 - 1);
        };
    };
    return 0;
}