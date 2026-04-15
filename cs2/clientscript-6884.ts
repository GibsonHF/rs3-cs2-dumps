//
function script6884(int0: component, int1: unknown_int, int2: unknown_int): void {
    IF_SETONTIMER(callback(script6885, int0), int0);
    IF_SETONTIMER(callback(script6885, int1), int1);
    IF_SETONTIMER(callback(script6885, int2), int2);
    return;
}