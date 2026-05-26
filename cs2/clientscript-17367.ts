//
function script17367(int0: number, int1: number, int2: number, int3: number): void {
    if ((int0 < int3)) {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script17367, int0, int1, int2, int3), int1);
        return;
    };
    IF_SETMODELANIM(29025, int1);
    IF_SETMODEL(128337, int2);
    IF_SETMODELANIM(29028, int2);
    IF_SETONTIMER(callback(script17368, 0, int1, int2, SEQLENGTH(29025)), int1);
    return;
}