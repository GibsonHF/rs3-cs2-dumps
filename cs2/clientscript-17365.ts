//
function script17365(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int0 < int3)) {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script17365, int0, int1, int2, int3, int4), int1);
        return;
    };
    IF_SETMODELANIM(17970, int1);
    IF_SETONTIMER(callback(script17366, 0, int1, int2, int4), int1);
    return;
}