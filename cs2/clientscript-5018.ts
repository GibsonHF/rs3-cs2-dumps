//
function script5018(int0: component, int1: component, int2: int, int3: int, int4: unknown_int): void {
    if ((int4 >= 5)) {
        IF_SETCOLOUR(HSVTORGB(int2), int0);
        IF_SETCOLOUR(HSVTORGB(int3), int1);
    } else {
        IF_SETCOLOUR(HSVTORGB(42550), int0);
        IF_SETCOLOUR(HSVTORGB(39382), int1);
    };
    return;
}