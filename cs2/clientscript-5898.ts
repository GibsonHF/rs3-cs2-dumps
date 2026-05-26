//
function script5898(int0: number, int1: number): void {
    var int2 = (int1 + 1);
    if ((((IF_GETHIDE(82116616) == 1) || (IF_GETHIDE(82116873) == 0)) || (IF_GETHIDE(82116699) == 0))) {
        IF_SETONTIMER(callback(), 82116608);
        return;
    };
    if ((int2 >= 300)) {
        IF_SETONTIMER(callback(), 82116608);
        if ((varclient_1781 > 0)) {
            script6976();
            varclient_1784 = 0;
        };
    } else {
        IF_SETONTIMER(callback(script5898, -2147483645, int2), 82116608);
    };
    return;
}