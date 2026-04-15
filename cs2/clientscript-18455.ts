//
function script18455(int0: int): void {
    IF_SETHIDE(false, comp(1280, 71));
    if ((CLIENTCLOCK() > int0)) {
        IF_SETHIDE(true, comp(1280, 71));
        IF_SETONTIMER(callback(), comp(1280, 24));
    };
    return;
}