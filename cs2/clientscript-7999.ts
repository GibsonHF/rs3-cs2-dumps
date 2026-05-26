//
function script7999(int0: number, int1: number): void {
    if (((int0 == comp(-1, 65535)) || (int1 == -1))) {
        return;
    };
    IF_SETONVARTRANSMIT(callback(script9989, int0, int1, 3814, 1), int0);
    var int2 = struct_getparam(int1, 3797);
    var int3 = struct_getparam(int1, 4405);
    if ((int3 != -1)) {
        var int1 = int3;
    };
    int1 = script9984(int1, int2);
    if ((int1 != -1)) {
        IF_SETTEXTFONT(struct_getparam(int1, 3810), int0);
        IF_SETCOLOUR(struct_getparam(int1, 3811), int0);
    };
    return;
}