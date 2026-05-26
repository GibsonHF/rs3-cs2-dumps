//
function script7740(int0: number, int1: number, int2: number): void {
    IF_SETONTIMER(callback(script7741, int0), int0);
    IF_SETONTIMER(callback(script7741, int1), int1);
    IF_SETONTIMER(callback(script7741, int2), int2);
    return;
}