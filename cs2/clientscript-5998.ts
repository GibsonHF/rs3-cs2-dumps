//
function script5998(int0: int, int1: int, int2: graphic): void {
    if (((int0 == -1) || (int1 == -1))) {
        return;
    };
    var int3 = (MODULO(int0, 8) + (int1 * 8));
    script8023(comp(942, 8), int3, 0, (int0 * 32), (int1 * 32), 0, 2, 32, 32, 0, 0, int2);
    if ((script6431() == true)) {
        CC_SETTRANS(130);
    };
    return;
}