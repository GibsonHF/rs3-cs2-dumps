//
function script5244(int0: number, int1: number, int2: number): void {
    var int3 = -1;
    if ((int0 != 106496005)) {
        var int2 = (CLIENTCLOCK() + (int2 * 50));
        int3 = IF_GETNEXTSUBID(106496004);
        CC_CREATE(106496004, 4, int3);
        CC_SETSIZE(10, 10, 0, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETONTIMER(callback(script5246, int0, int1, int2, int3));
    };
    return;
}