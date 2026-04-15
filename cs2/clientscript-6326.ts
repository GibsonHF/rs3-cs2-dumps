//
function script6326(int0: unknown_int, int1: unknown_int, int2: unknown_int): void {
    if ((int0 == 1)) {
        stack(11510);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETTRANS(100, int1);
        IF_SETHIDE(1, int2);
        IF_SETTRANS(255, int2);
        IF_CLEARSCRIPTHOOKS(int1);
        IF_CLEARSCRIPTHOOKS(int2);
    } else {
        stack(11508);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETTRANS(100, int1);
        IF_SETHIDE(0, int2);
        IF_SETONMOUSEREPEAT(callback(script6327, -2147483645), int2);
        IF_SETONOP(callback(script6329, -2147483644, int2), int1);
    };
    return;
}