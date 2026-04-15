//
function script17367(int0: int, int1: component, int2: component, int3: int): void {
    if ((int0 < int3)) {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script17367, int0, int1, int2, int3), int1);
        return;
    };
    IF_SETMODELANIM(29025 as seq, int1);
    IF_SETMODEL(128337 as model, int2);
    IF_SETMODELANIM(29028 as seq, int2);
    IF_SETONTIMER(callback(script17368, 0, int1, int2, SEQLENGTH(29025 as seq)), int1);
    return;
}