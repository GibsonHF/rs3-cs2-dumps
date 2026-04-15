//
function script7621(): unknown_int {
    var int0 = 0;
    var int1 = 0;
    var int2 = -1 as struct;
    var int3 = -1;
    while ((int0 < 8)) {
        int1 = script2384(int0, 1);
        if ((script8314(int1) != -1)) {
            return 1;
        };
        int2 = enum_getvalue(0, 73, 736 as cs2enum, int1);
        if ((int2 != -1 as struct)) {
            int3 = struct_getparam(int2, 3487);
            while ((int3 != -1)) {
                if ((script8314(int3) != -1)) {
                    return 1;
                };
                int2 = enum_getvalue(0, 73, 736 as cs2enum, int3);
                int3 = -1;
                if ((int2 != -1 as struct)) {
                    int3 = struct_getparam(int2, 3487);
                };
            };
        };
        int0 = (int0 + 1);
    };
    return 0;
}