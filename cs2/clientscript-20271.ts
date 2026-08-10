//
function script20271(): void {
    IF_SETHIDE(true, comp(1443, 27));
    IF_SETHIDE(false, comp(1443, 26));
    IF_SETENABLED(true, comp(1443, 38));
    IF_SETENABLED(false, comp(1443, 45));
    IF_SETONTIMER(callback(), comp(1443, 45));
    return;
}