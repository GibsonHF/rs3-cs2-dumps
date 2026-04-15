//
function script12015(int0: component): unknown_int {
    var int1 = -1 as struct;
    var int2 = script12006(int0);
    var int3 = 0;
    while ((int3 < ENUM_GETOUTPUTCOUNT(int2))) {
        int1 = script9101(enum_getvalue(0, 73, int2, int3));
        if ((script7083(int1) == 1)) {
            return 1;
        };
        int3 = (int3 + 1);
    };
    return 0;
}