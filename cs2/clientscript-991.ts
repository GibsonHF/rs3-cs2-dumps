//
function script991(int0: int): void {
    IF_SETHIDE(false, comp(204, 67));
    if ((CLIENTCLOCK() > int0)) {
        IF_SETHIDE(true, comp(204, 67));
        IF_SETONTIMER(callback(), comp(204, 78));
    };
    return;
}