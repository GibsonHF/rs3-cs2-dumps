//
function script16915(int0: int): void {
    IF_SETONTIMER(callback(), comp(907, 2));
    var int1 = 0;
    while ((int1 < 4)) {
        IF_SETHIDE(true, script16916(int1));
        IF_SETTRANS(255, script16917(int1));
        int1 = (int1 + 1);
    };
    script16911(50, -1, int0, 1);
    IF_SETONTIMER(callback(script16909, int0, -6000), comp(907, 2));
    return;
}