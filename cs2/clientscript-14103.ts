//
function script14103(int0: number, int1: number, int2: number): void {
    if ((int2 >= 0)) {
        IF_SETONTIMER(callback(script14103, int0, int1, (int2 - 1)), int1);
        return;
    };
    IF_SETONTIMER(callback(), int1);
    IF_SETVFLIP(1, int1);
    IF_SETOP(1, "Expand", comp(1944, 31));  // toolbelt_v2:info_expandarrow
    IF_SETHIDE(true, int0);
    return;
}