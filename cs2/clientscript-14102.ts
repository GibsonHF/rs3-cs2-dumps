//
function script14102(int0: number, int1: number, int2: number): void {
    if ((int2 >= 0)) {
        IF_SETONTIMER(callback(script14102, int0, int1, (int2 - 1)), int1);
        return;
    };
    IF_SETONTIMER(callback(), int1);
    IF_SETOP(1, "Shrink", 127402015);
    IF_SETVFLIP(0, int1);
    return;
}