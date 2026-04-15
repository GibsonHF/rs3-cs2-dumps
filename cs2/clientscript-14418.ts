//
function script14418(int0: component, int1: struct, int2: int, int3: unknown_int): void {
    if ((int1 == -1 as struct)) {
        return;
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    if ((CC_FIND(int0, -1) == 1)) {
        int4 = CC_GETX();
        int5 = CC_GETY();
        int6 = CC_GETWIDTH();
        int7 = CC_GETHEIGHT();
    };
    var int8 = struct_getparam(int1, 3808);
    var int9 = struct_getparam(int1, 3807);
    var int10 = struct_getparam(int1, 7447);
    var int11 = struct_getparam(int1, 7448);
    var int12 = (int6 - (int8 * 2));
    var int13 = (int7 - (int9 * 2));
    if ((CC_FIND(int0, (int2 + 0)) == 1)) {
        CC_SETSIZE(int8, int9, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3799));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 1)) == 1)) {
        CC_SETSIZE((int8 * 2), int9, 1, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3798));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 2)) == 1)) {
        CC_SETSIZE(int8, int9, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3800));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 3)) == 1)) {
        CC_SETSIZE(int8, (int9 * 2), 0, 1);
        CC_SETGRAPHIC(struct_getparam(int1, 3801));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 4)) == 1)) {
        CC_SETSIZE((int8 * 2), (int9 * 2), 1, 1);
        CC_SETGRAPHIC(struct_getparam(int1, 3802));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 5)) == 1)) {
        CC_SETSIZE(int8, (int9 * 2), 0, 1);
        CC_SETGRAPHIC(struct_getparam(int1, 3803));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 6)) == 1)) {
        CC_SETSIZE(int8, int9, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3805));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 7)) == 1)) {
        CC_SETSIZE((int8 * 2), int9, 1, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3804));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 8)) == 1)) {
        CC_SETSIZE(int8, int9, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3806));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    return;
}