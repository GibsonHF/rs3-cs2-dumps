//[proc,graphics_options_reviewoptions]
function script2692(): [int, int] {
    var int0 = -1 as struct;
    var int1 = -1 as cs2enum;
    var int2 = 10849 as cs2enum;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = (ENUM_GETOUTPUTCOUNT(int2) - 1);
    while ((int6 >= 0)) {
        int0 = enum_getvalue(0, 73, int2, int6);
        int3 = (int3 + 1);
        int1 = struct_getparam(int0, 683);
        int5 = (ENUM_GETOUTPUTCOUNT(int1) - 1);
        while ((int5 >= 0)) {
            int4 = MAX(STRINGWIDTH(enum_getvalue(0, 36, int1, int5), 26 as fontmetrics), int4);
            int5 = (int5 - 1);
        };
        int6 = (int6 - 1);
    };
    return [int3, int4];
}