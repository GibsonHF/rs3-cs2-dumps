//
function script1249(): void {
    IF_SETHIDE(false, comp(64, 7));
    IF_SETONMOUSEOVER(callback(), comp(64, 33));
    IF_SETONMOUSEREPEAT(callback(script1250), comp(64, 33));
    IF_SETONTIMER(callback(script1251, (CLIENTCLOCK() + 5)), comp(64, 7));
    return;
}