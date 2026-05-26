//
function script16915(int0: number): void {
    IF_SETONTIMER(callback(), 59441154);
    var int1 = 0;
    while ((int1 < 4)) {
        IF_SETHIDE(1, script16916(int1));
        IF_SETTRANS(255, script16917(int1));
        int1 = (int1 + 1);
    };
    script16911(50, -1, int0, 1);
    IF_SETONTIMER(callback(script16909, int0, -6000), 59441154);
    return;
}