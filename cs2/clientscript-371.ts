//
function script371(int0: component, int1: component, int2: component, int3: int): void {
    if ((script14177(int2) == 0)) {
        return;
    };
    script14191(int2, 20, 10, 8, int3);
    if ((AND(12, int3) > 0)) {
        IF_SETONVERTICALSWIPE(callback(script14143, int0, int2, -2147483646), int2);
    };
    if ((AND(3, int3) > 0)) {
        IF_SETONHORIZONTALSWIPE(callback(script14142, int1, int2, -2147483647), int2);
    };
    return;
}