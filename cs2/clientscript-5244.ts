//
function script5244(int0: number, int1: number, int2: number): void {
    var int3 = -1;
    if ((int0 != 106496005)) {
        var int2 = (CLIENTCLOCK() + (int2 * 50));
        int3 = IF_GETNEXTSUBID(comp(1625, 4));  // tuska_effects:universe
        CC_CREATE(comp(1625, 4), 4, int3);  // tuska_effects:universe
        CC_SETSIZE(10, 10, 0, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETONTIMER(callback(script5246, int0, int1, int2, int3));
    };
    return;
}