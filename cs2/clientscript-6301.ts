//
function script6301(int0: struct, int1: int, int2: int): [int, struct] {
    if ((int0 == -1 as struct)) {
        script12478("Null path struct encountered.");
        return [-1, -1 as struct];
    };
    var int3 = struct_getparam(int0, 8072);
    if ((int3 == -1 as cs2enum)) {
        script12478(`No cheevo_path_enum param found on path struct '${struct_getparam(int0, 8073)}'.`);
        return [-1, -1 as struct];
    };
    var int4 = 0;
    var int5 = ENUM_GETOUTPUTCOUNT(int3);
    var int6 = -1 as struct;
    var int7 = 0;
    if ((int6 == -1 as struct)) {
        while ((int4 < int5)) {
            int6 = enum_getvalue(0, 73, int3, int4);
            if ((int6 == -1 as struct)) {
                script12478("Couldn't find cheevo.");
                return [-1, -1 as struct];
            };
            int7 = script13280(int6);
            if ((((int1 == 0) || (int2 == 0)) && (int7 >= 0))) {
                return [int7, int6];
            };
            if (((int7 == int1) || (int7 == int2))) {
                return [int7, int6];
            };
            int4 = (int4 + 1);
        };
    };
    return [-1, -1 as struct];
}