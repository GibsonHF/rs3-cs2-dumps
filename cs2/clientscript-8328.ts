//
function script8328(int0: number, int1: number, int2: number): void {
    if ((int1 > 0)) {
        IF_SETONTIMER(callback(script8328, int0, (int1 - 1), -2147483645), int2);
        return;
    };
    IF_SETONTIMER(callback(), int2);
    script8062(int0);
    return;
}