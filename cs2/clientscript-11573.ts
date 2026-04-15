//
function script11573(int0: struct, int1: component, int2: stat): void {
    if ((CC_FIND(int1, 1) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 3799));
    };
    if ((CC_FIND(int1, 2) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 3798));
    };
    if ((CC_FIND(int1, 3) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 3800));
    };
    if ((CC_FIND(int1, 4) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 3801));
    };
    if ((CC_FIND(int1, 5) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 3802));
    };
    if ((CC_FIND(int1, 6) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 3803));
    };
    if ((CC_FIND(int1, 7) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 3805));
    };
    if ((CC_FIND(int1, 8) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 3804));
    };
    if ((CC_FIND(int1, 9) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 3806));
    };
    if ((int2 == -1 as stat)) {
        return;
    };
    var string0 = enum_getvalue(17, 36, 680 as cs2enum, int2);
    script8800(string0, int1, -1);
    return;
}