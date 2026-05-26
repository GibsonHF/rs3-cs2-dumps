//
function script20272(int0: number): void {
    var int1 = ((CLIENTCLOCK() - int0) / 50);
    if ((int1 >= 5)) {
        IF_SETHIDE(1, 94568490);
        IF_SETTEXT("Activate Relic", 94568489);
        IF_SETENABLED(1, 94568489);
        IF_SETONTIMER(callback(), 94568489);
        return;
    };
    IF_SETTEXT(`${inttostring((5 - int1), 10)}...`, 94568489);
    return;
}