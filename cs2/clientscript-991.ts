//
function script991(int0: number): void {
    IF_SETHIDE(false, comp(204, 67));  // rsraffle:claim_fireworks
    if ((CLIENTCLOCK() > int0)) {
        IF_SETHIDE(true, comp(204, 67));  // rsraffle:claim_fireworks
        IF_SETONTIMER(callback(), comp(204, 78));  // rsraffle:claim_window
    };
    return;
}