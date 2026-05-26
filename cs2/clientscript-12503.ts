//
function script12503(): void {
    var int0 = ENUM_GETOUTPUTCOUNT(9029);
    var int1 = 1;
    var int2 = -1 as struct;
    var int3 = 0;
    var int4 = 10;
    var int5 = 10;
    while ((int1 <= int0)) {
        int2 = enum_getvalue(0, 73, 9029 as cs2enum, int1);
        int3 = 0;
        if ((int2 != -1 as struct)) {
            if ((struct_getparam(int2, 8522) == false)) {
                CC_CREATE(115408896, 5, IF_GETNEXTSUBID(115408896));
            } else {
                if ((struct_getparam(int2, 1353) > script1432())) {
                    int3 = 1;
                };
                if ((script16088(int2) == 0)) {
                    int3 = 1;
                };
                script12501(115408897, 115408896, 28556, (8 + ((IF_GETWIDTH(115408897) / 2) * MODULO((int1 - 1), 2))), int4, ((IF_GETWIDTH(115408897) - 20) / 2), 20, IF_GETNEXTSUBID(115408896), int3, struct_getparam(int2, 1348));
                int4 = (int4 + (23 * MODULO((int1 - 1), 2)));
            };
            int5 = (int5 + (23 * MODULO((int1 - 1), 2)));
        };
        int1 = (int1 + 1);
    };
    if ((IF_GETHEIGHT(115408901) < (int5 + 27))) {
        IF_SETSCROLLSIZE(0, int5, 115408901);
        script7791(115408902, 115408901);
    };
    return;
}