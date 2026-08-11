//
function script12503(): void {
    var int0 = ENUM_GETOUTPUTCOUNT(9029 as cs2enum);
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
                CC_CREATE(comp(1761, 0), 5, IF_GETNEXTSUBID(comp(1761, 0)));  // bslay_choose_task:click_layer
            } else {
                if ((struct_getparam(int2, 1353) > script1432())) {
                    int3 = 1;
                };
                if ((script16088(int2) == 0)) {
                    int3 = 1;
                };
                script12501(115408897, 115408896, 28556, (8 + ((IF_GETWIDTH(comp(1761, 1) /*bslay_choose_task:build_layer*/) / 2) * MODULO((int1 - 1), 2))), int4, ((IF_GETWIDTH(comp(1761, 1) /*bslay_choose_task:build_layer*/) - 20) / 2), 20, IF_GETNEXTSUBID(comp(1761, 0) /*bslay_choose_task:click_layer*/), int3, struct_getparam(int2, 1348));
                int4 = (int4 + (23 * MODULO((int1 - 1), 2)));
            };
            int5 = (int5 + (23 * MODULO((int1 - 1), 2)));
        };
        int1 = (int1 + 1);
    };
    if ((IF_GETHEIGHT(comp(1761, 5)) < (int5 + 27))) {  // bslay_choose_task:content_layer
        IF_SETSCROLLSIZE(0, int5, comp(1761, 5));  // bslay_choose_task:content_layer
        script7791(115408902, 115408901);
    };
    return;
}