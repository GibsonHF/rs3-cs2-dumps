//
function script14417(int0: component, int1: struct, int2: int, int3: unknown_int): void {
    if ((int1 == -1 as struct)) {
        return;
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    if ((CC_FIND(int0, (int2 + 0)) == 1)) {
        int4 = CC_GETX();
        int5 = CC_GETY();
    };
    if ((CC_FIND(int0, (int2 + 8)) == 1)) {
        int6 = ((CC_GETX() + CC_GETWIDTH()) - int4);
        int7 = ((CC_GETY() + CC_GETHEIGHT()) - int5);
    };
    var int8 = struct_getparam(int1, 3808);
    var int9 = struct_getparam(int1, 3807);
    var int10 = struct_getparam(int1, 7447);
    var int11 = struct_getparam(int1, 7448);
    var int12 = (int6 - (int8 * 2));
    var int13 = (int7 - (int9 * 2));
    if ((CC_FIND(int0, (int2 + 0)) == 1)) {
        CC_SETSIZE(int8, int9, 0, 0);
        CC_SETPOSITION(int4, int5, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3799));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 1)) == 1)) {
        CC_SETSIZE(int12, int9, 0, 0);
        CC_SETPOSITION((int4 + int8), int5, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3798));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 2)) == 1)) {
        CC_SETSIZE(int8, int9, 0, 0);
        CC_SETPOSITION(((int4 + int12) + int8), int5, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3800));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 3)) == 1)) {
        CC_SETSIZE(int8, int13, 0, 0);
        CC_SETPOSITION(int4, (int5 + int9), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3801));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 4)) == 1)) {
        CC_SETSIZE(int12, int13, 0, 0);
        CC_SETPOSITION((int4 + int8), (int5 + int9), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3802));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 5)) == 1)) {
        CC_SETSIZE(int8, int13, 0, 0);
        CC_SETPOSITION(((int4 + int12) + int8), (int5 + int9), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3803));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 6)) == 1)) {
        CC_SETSIZE(int8, int9, 0, 0);
        CC_SETPOSITION(int4, ((int5 + int13) + int9), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3805));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 7)) == 1)) {
        CC_SETSIZE(int12, int9, 0, 0);
        CC_SETPOSITION((int4 + int8), ((int5 + int13) + int9), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3804));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if ((CC_FIND(int0, (int2 + 8)) == 1)) {
        CC_SETSIZE(int8, int9, 0, 0);
        CC_SETPOSITION(((int4 + int12) + int8), ((int5 + int13) + int9), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3806));
        CC_SETCOLOUR(int11);
        CC_SETTILING(int10);
    };
    if (((CC_FIND(int0, (int2 + 9)) == 1) && (STRING_LENGTH(CC_GETTEXT()) > 0))) {
        if ((struct_getparam(int1, 8063) == true)) {
            CC_SETSIZE(int12, int13, 0, 0);
            CC_SETPOSITION((int4 + int8), (int5 + int9), 0, 0);
        } else {
            CC_SETSIZE(int6, int7, 0, 0);
            CC_SETPOSITION(int4, int5, 0, 0);
        };
        if ((int3 == 1)) {
            CC_SETCOLOUR(16777215);
        } else {
            script11024(19);
        };
    };
    return;
}