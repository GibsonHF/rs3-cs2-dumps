//
function script10415(int0: component, int1: struct, int2: int, int3: unknown_int): void {
    if ((int1 == -1 as struct)) {
        return;
    };
    var int4 = script9984(struct_getparam(int1, 4405), 6);
    var int5 = struct_getparam(int1, 7448);
    if ((CC_FIND(int0, (int2 + 0)) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int1, 3799));
        CC_SETCOLOUR(int5);
    };
    if ((CC_FIND(int0, (int2 + 1)) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int1, 3798));
        CC_SETCOLOUR(int5);
    };
    if ((CC_FIND(int0, (int2 + 2)) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int1, 3800));
        CC_SETCOLOUR(int5);
    };
    if ((CC_FIND(int0, (int2 + 3)) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int1, 3801));
        CC_SETCOLOUR(int5);
    };
    if ((CC_FIND(int0, (int2 + 4)) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int1, 3802));
        CC_SETCOLOUR(int5);
    };
    if ((CC_FIND(int0, (int2 + 5)) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int1, 3803));
        CC_SETCOLOUR(int5);
    };
    if ((CC_FIND(int0, (int2 + 6)) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int1, 3805));
        CC_SETCOLOUR(int5);
    };
    if ((CC_FIND(int0, (int2 + 7)) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int1, 3804));
        CC_SETCOLOUR(int5);
    };
    if ((CC_FIND(int0, (int2 + 8)) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int1, 3806));
        CC_SETCOLOUR(int5);
    };
    if (((CC_FIND(int0, (int2 + 9)) == 1) && (STRING_LENGTH(CC_GETTEXT()) > 0))) {
        if ((int3 == 1)) {
            CC_SETCOLOUR(16777215);
        } else if ((int4 != -1 as struct)) {
            CC_SETCOLOUR(struct_getparam(int4, 3811));
        } else {
            script11024(19);
        };
    };
    return;
}