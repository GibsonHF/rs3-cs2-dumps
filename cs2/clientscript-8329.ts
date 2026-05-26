//
function script8329(int0: number, int1: number): void {
    if ((int0 > 0)) {
        IF_SETONTIMER(callback(script8329, (int0 - 1), -2147483645), int1);
    };
    IF_SETONTIMER(callback(), int1);
    script8792();
    return;
}