//
function script18323(int0: int): void {
    if ((CLIENTCLOCK() >= int0)) {
        script18324();
        IF_SETONTIMER(callback(), comp(1181, 0));
    };
    return;
}