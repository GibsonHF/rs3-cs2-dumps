//
function script1251(int0: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    IF_SETONTIMER(callback(), comp(64, 7));
    IF_SETHIDE(true, comp(64, 7));
    IF_SETONMOUSEOVER(callback(script1249), comp(64, 31));
    IF_SETONMOUSEREPEAT(callback(), comp(64, 31));
    return;
}