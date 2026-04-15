//
function script6549(int0: component, int1: unknown_int, int2: unknown_int): void {
    if ((int2 == -1)) {
        IF_SETONTIMER(callback(script6550, int1, int0), int0);
    } else {
        IF_SETONTIMER(callback(), int0);
        IF_SETTEXT(inttostring(int2, 10), int0);
    };
    return;
}