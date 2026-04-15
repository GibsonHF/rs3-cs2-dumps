//
function script7040(int0: int, int1: graphic, string0: string): void {
    var int2 = script10405(int0);
    var int3 = struct_getparam(int2, 3506);
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    if ((CC_FIND(int3, 14) == 1)) {
        CC_SETTEXT(string0);
    };
    if ((CC_FIND(int3, 15) == 1)) {
        CC_SETGRAPHIC(int1);
    };
    return;
}