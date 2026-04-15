//
function script13988(int0: component, int1: struct, int2: int, int3: unknown_int): void {
    if ((int1 == -1 as struct)) {
        return;
    };
    var int4 = struct_getparam(int1, 7448);
    if ((CC_FIND(int0, (int2 + 0)) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int1, 3801));
        CC_SETCOLOUR(int4);
    };
    if ((CC_FIND(int0, (int2 + 1)) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int1, 3802));
        CC_SETCOLOUR(int4);
    };
    if ((CC_FIND(int0, (int2 + 2)) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int1, 3803));
        CC_SETCOLOUR(int4);
    };
    return;
}