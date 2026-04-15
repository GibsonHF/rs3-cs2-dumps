//
function script5898(int0: unknown_int, int1: int): void {
    var int2 = (int1 + 1);
    if ((((IF_GETHIDE(comp(1253, 8)) == true) || (IF_GETHIDE(comp(1253, 265)) == false)) || (IF_GETHIDE(comp(1253, 91)) == false))) {
        IF_SETONTIMER(callback(), comp(1253, 0));
        return;
    };
    if ((int2 >= 300)) {
        IF_SETONTIMER(callback(), comp(1253, 0));
        if ((varclient_1781 > 0)) {
            script6976();
            varclient_1784 = 0;
        };
    } else {
        IF_SETONTIMER(callback(script5898, -2147483645, int2), comp(1253, 0));
    };
    return;
}