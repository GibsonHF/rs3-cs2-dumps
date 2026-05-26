//
function script2899(): void {
    IF_SETHIDE(0, 31195194);
    IF_SETTRANS(0, 31195194);
    var int0 = CLIENTCLOCK();
    IF_SETONTIMER(callback(script2900, int0), 31195194);
    return;
}