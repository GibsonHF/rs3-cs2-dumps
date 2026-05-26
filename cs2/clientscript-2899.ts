//
function script2899(): void {
    IF_SETHIDE(false, comp(476, 58));
    IF_SETTRANS(0, comp(476, 58));
    var int0 = CLIENTCLOCK();
    IF_SETONTIMER(callback(script2900, int0), comp(476, 58));
    return;
}