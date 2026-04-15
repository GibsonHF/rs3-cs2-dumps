//
function script17060(int0: int, int1: seq, int2: unknown_int, int3: component): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script17060, int0, int1, int2, int3), int3);
        return;
    };
    IF_SETMODELANIM(int1, int3);
    IF_SETONTIMER(callback(script17059, SEQLENGTH(int1), int2, int3), int3);
    return;
}