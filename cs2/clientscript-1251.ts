//
function script1251(int0: int): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    IF_SETONTIMER(callback(), comp(64, 7));
    IF_SETHIDE(1, 4194311);
    IF_SETONMOUSEOVER(callback(script1249), 4194335);
    IF_SETONMOUSEREPEAT(callback(), 4194335);
    return;
}