//
function script20234(int0: number): void {
    var int1 = (CLIENTCLOCK() - int0);
    var int2 = (int1 / 50);
    if ((int1 == 1)) {
        IF_SETENABLED(0, 91815973);
        IF_SETHIDE(0, 91815974);
    } else if ((int1 >= 250)) {
        IF_SETONTIMER(callback(), 91815938);
        IF_SETENABLED(1, 91815973);
        IF_SETHIDE(1, 91815974);
        IF_SETTEXT("Confirm Nomination", 91815973);
    } else {
        IF_SETTEXT(`${inttostring((5 - int2), 10)}...`, 91815973);
    };
    return;
}