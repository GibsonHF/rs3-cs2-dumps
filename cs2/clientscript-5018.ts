//
function script5018(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int4 >= 5)) {
        IF_SETCOLOUR(HSVTORGB(int2), int0);
        IF_SETCOLOUR(HSVTORGB(int3), int1);
    } else {
        IF_SETCOLOUR(HSVTORGB(42550), int0);
        IF_SETCOLOUR(HSVTORGB(39382), int1);
    };
    return;
}