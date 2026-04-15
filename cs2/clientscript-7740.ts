//
function script7740(int0: component, int1: unknown_int, int2: unknown_int): void {
    IF_SETONTIMER(callback(script7741, int0), int0);
    IF_SETONTIMER(callback(script7741, int1), int1);
    IF_SETONTIMER(callback(script7741, int2), int2);
    return;
}