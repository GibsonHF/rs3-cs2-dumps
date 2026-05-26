//
function script2900(int0: number): void {
    if ((CLIENTCLOCK() > (int0 + 200))) {
        IF_SETONTIMER(callback(), 31195194);
        IF_SETHIDE(1, 31195194);
    } else if ((CLIENTCLOCK() > (int0 + 150))) {
        IF_SETTRANS(MIN((IF_GETTRANS(31195194) + 10), 255), 31195194);
    };
    return;
}