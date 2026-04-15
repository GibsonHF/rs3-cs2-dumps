//
function script20238(int0: int, int1: int): void {
    var int2 = (CLIENTCLOCK() - int1);
    var int3 = MAX(int0, SCALE(255, 100, int2));
    script20242(int3);
    if ((int3 >= 255)) {
        IF_SETONTIMER(callback(), comp(1380, 1));
    };
    return;
}