//
function script8786(int0: int, int1: unknown_int): unknown_int {
    var int2 = -1;
    var int3 = -1 as struct;
    var int4 = 0;
    var int5 = ENUM_GETOUTPUTCOUNT(7717 as cs2enum);
    while ((int4 < int5)) {
        int2 = enum_getvalue(0, 0, 7717 as cs2enum, int4);
        int3 = script10405(int2);
        if (((((int3 != -1 as struct) && (int0 != int2)) && (IF_GETHIDE(struct_getparam(int3, 3503)) == false)) && (script12612(int3) == true))) {
            script8356(int2, int0, script8374(struct_getparam(int3, 3509)), 0, int1);
            return 1;
        };
        int4 = (int4 + 1);
    };
    return 0;
}