//
function script16909(int0: number, int1: number): void {
    if ((int1 >= 375)) {
        script16908(0);
        IF_SETONTIMER(callback(), 59441154);
        IF_SETONTIMER(callback(script16910, 0, int0, script16913(int0)), 59441156);
        return;
    };
    IF_SETONTIMER(callback(script16909, int0, (int1 + 1)), 59441154);
    return;
}