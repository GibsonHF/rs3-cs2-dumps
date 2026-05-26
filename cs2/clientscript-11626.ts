//
function script11626(int0: number, int1: number, int2: number): void {
    if ((int1 == -1)) {
        return;
    };
    if ((CC_FIND(int0, int2) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int1, 3909));
        CC_SETCOLOUR(struct_getparam(int1, 7448));
    };
    return;
}