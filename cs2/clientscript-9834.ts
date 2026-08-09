//
function script9834(): void {
    script9836();
    IF_SETONVARCTRANSMIT(callback(script9835, 4200, 1), comp(1350, 26));
    if ((varclient_4199 > CLIENTCLOCK())) {
        IF_SETHIDE(false, comp(1350, 9));
        IF_SETHIDE(false, comp(1350, 10));
        IF_SETHIDE(false, comp(1350, 34));
        IF_SETHIDE(false, comp(1350, 42));
        IF_SETHIDE(false, comp(1350, 50));
        IF_SETHIDE(false, comp(1350, 58));
        varclient_4198 = ((varclient_4199 - CLIENTCLOCK()) / 50);
        script9842();
    } else {
        IF_SETONTIMER(callback(), comp(200, 69));
        IF_SETHIDE(true, comp(1350, 9));
        IF_SETHIDE(true, comp(1350, 10));
        IF_SETHIDE(true, comp(1350, 34));
        IF_SETHIDE(true, comp(1350, 42));
        IF_SETHIDE(true, comp(1350, 50));
        IF_SETHIDE(true, comp(1350, 58));
    };
    return;
}