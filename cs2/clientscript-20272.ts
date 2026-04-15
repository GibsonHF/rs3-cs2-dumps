//
function script20272(int0: int): void {
    var int1 = ((CLIENTCLOCK() - int0) / 50);
    if ((int1 >= 5)) {
        IF_SETHIDE(true, comp(1443, 42));
        IF_SETTEXT("Activate Relic", comp(1443, 41));
        IF_SETENABLED(true, comp(1443, 41));
        IF_SETONTIMER(callback(), comp(1443, 41));
        return;
    };
    IF_SETTEXT(`${inttostring((5 - int1), 10)}...`, comp(1443, 41));
    return;
}