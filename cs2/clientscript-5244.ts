//
function script5244(int0: unknown_int, int1: unknown_int, int2: int): void {
    var int3 = -1;
    if ((int0 != 106496005)) {
        var int2 = (CLIENTCLOCK() + (int2 * 50));
        int3 = IF_GETNEXTSUBID(comp(1625, 4));
        CC_CREATE(comp(1625, 4), 4, int3);
        CC_SETSIZE(10, 10, 0, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETONTIMER(callback(script5246, int0, int1, int2, int3));
    };
    return;
}