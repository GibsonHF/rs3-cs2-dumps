//
function script20241(int0: int): void {
    var int1 = (CLIENTCLOCK() - int0);
    var int2 = (255 - SCALE(255, 100, int1));
    script20242(int2);
    if ((int2 <= 0)) {
        IF_SETONTIMER(callback(), comp(1380, 1));
    };
    return;
}