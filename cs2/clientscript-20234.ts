//
function script20234(int0: number): void {
    var int1 = (CLIENTCLOCK() - int0);
    var int2 = (int1 / 50);
    if ((int1 == 1)) {
        IF_SETENABLED(false, comp(1401, 37));
        IF_SETHIDE(false, comp(1401, 38));
    } else if ((int1 >= 250)) {
        IF_SETONTIMER(callback(), comp(1401, 2));
        IF_SETENABLED(true, comp(1401, 37));
        IF_SETHIDE(true, comp(1401, 38));
        IF_SETTEXT("Confirm Nomination", comp(1401, 37));
    } else {
        IF_SETTEXT(`${inttostring((5 - int2), 10)}...`, comp(1401, 37));
    };
    return;
}