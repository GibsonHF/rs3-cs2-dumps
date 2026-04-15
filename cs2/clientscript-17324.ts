//
function script17324(int0: component, int1: component, int2: int, int3: int, string0: string): void {
    IF_SETPOSITION(int2, int3, 0, 0, int0);
    IF_SETTEXT(string0, int1);
    IF_SETTRANS(0, int1);
    IF_SETHIDE(false, int0);
    IF_SETONTIMER(callback(script16735, 1, 0, -2147483645), int0);
    IF_SETONTIMER(callback(script17325, int1), int1);
    return;
}