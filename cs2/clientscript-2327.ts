//
function script2327(int0: number): void {
    if ((CLIENTCLOCK() >= (100 + int0))) {
        IF_SETONTIMER(callback(), comp(306, 25));  // easter09_nuts:result
        IF_SETHIDE(true, comp(306, 25));  // easter09_nuts:result
    };
    return;
}