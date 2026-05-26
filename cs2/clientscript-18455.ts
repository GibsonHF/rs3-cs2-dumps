//
function script18455(int0: number): void {
    IF_SETHIDE(0, 83886151);
    if ((CLIENTCLOCK() > int0)) {
        IF_SETHIDE(1, 83886151);
        IF_SETONTIMER(callback(), 83886104);
    };
    return;
}