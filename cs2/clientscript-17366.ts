//
function script17366(int0: number, int1: number, int2: number, int3: number): void {
    if ((int0 < int3)) {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script17366, int0, int1, int2, int3), int1);
        return;
    };
    IF_SETMODEL(128339, int2);
    IF_SETMODELANIM(29027, int2);
    IF_SETONTIMER(callback(script17367, 0, int1, int2, SEQLENGTH(29027)), int1);
    return;
}