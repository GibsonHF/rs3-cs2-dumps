//
function script20270(): void {
    IF_SETHIDE(false, comp(1443, 23));
    IF_SETHIDE(true, comp(1443, 22));
    IF_SETONTIMER(callback(script20272, CLIENTCLOCK()), comp(1443, 41));
    IF_SETHIDE(false, comp(1443, 42));
    IF_SETTEXT("5...", comp(1443, 41));
    IF_SETENABLED(false, comp(1443, 41));
    IF_SETENABLED(false, comp(1443, 34));
    return;
}