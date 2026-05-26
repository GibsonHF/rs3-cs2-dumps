//
function script13988(int0: number, int1: number, int2: number, int3: number): void {
    if ((int1 == -1)) {
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