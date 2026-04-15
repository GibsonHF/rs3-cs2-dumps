//
function script13650(int0: struct): void {
    if ((int0 == -1 as struct)) {
        return;
    };
    CC_SETCOLOUR(script10495(struct_getparam(int0, 4427)));
    var int1 = struct_getparam(int0, 4524);
    if ((int1 != -1)) {
        CC_SETONMOUSEOVER(callback(script10473, -2147483645, -2147483643, int1));
        CC_SETONMOUSELEAVE(callback(script10473, -2147483645, -2147483643, struct_getparam(int0, 4427)));
    };
    CC_SETONVARTRANSMIT(callback(script13648, -2147483645, -2147483643, int0, 3814, 1));
    return;
}