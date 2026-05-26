//
function script6884(int0: number, int1: number, int2: number): void {
    IF_SETONTIMER(callback(script6885, int0), int0);
    IF_SETONTIMER(callback(script6885, int1), int1);
    IF_SETONTIMER(callback(script6885, int2), int2);
    return;
}