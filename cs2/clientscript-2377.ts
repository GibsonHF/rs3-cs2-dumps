//[proc,makeover_gender]
function script2377(int0: int, int1: component, int2: component): void {
    if ((int0 == 0)) {
        IF_SETCOLOUR(16777215, int1);
        IF_SETTEXTSHADOW(1, int1);
        IF_SETCOLOUR(script10495(3), int2);
        IF_SETTEXTSHADOW(0, int2);
    } else {
        IF_SETCOLOUR(16777215, int2);
        IF_SETTEXTSHADOW(1, int2);
        IF_SETCOLOUR(script10495(3), int1);
        IF_SETTEXTSHADOW(0, int1);
    };
    return;
}