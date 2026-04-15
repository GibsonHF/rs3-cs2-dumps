//
function script20271(): void {
    IF_SETHIDE(true, comp(1443, 23));
    IF_SETHIDE(false, comp(1443, 22));
    IF_SETENABLED(true, comp(1443, 34));
    IF_SETENABLED(false, comp(1443, 41));
    IF_SETONTIMER(callback(), comp(1443, 41));
    return;
}