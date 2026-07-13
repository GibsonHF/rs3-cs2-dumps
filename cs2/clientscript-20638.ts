//
function script20638(int0: number, int1: number): void {
    if ((int1 == 1)) {
        CC_SETGRAPHIC(struct_getparam(int0, 2802));
        return;
    };
    var int2 = struct_getparam(int0, 4030);
    if ((int2 == -1 as graphic)) {
        CC_SETGRAPHIC(struct_getparam(int0, 2802));
        CC_SETCOLOUR(7829367);
        return;
    };
    CC_SETGRAPHIC(int2);
    return;
}