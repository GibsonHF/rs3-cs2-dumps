//
function script2900(int0: int): void {
    if ((CLIENTCLOCK() > (int0 + 200))) {
        IF_SETONTIMER(callback(), comp(476, 58));
        IF_SETHIDE(1, 31195194);
    } else if ((CLIENTCLOCK() > (int0 + 150))) {
        IF_SETTRANS(MIN((IF_GETTRANS(comp(476, 58)) + 10), 255), comp(476, 58));
    };
    return;
}