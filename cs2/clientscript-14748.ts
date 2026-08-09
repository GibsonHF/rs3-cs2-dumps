//
function script14748(int0: number, int1: number, int2: number): number {
    var int3 = IF_GETNEXTSUBID(int0);
    stack(int0);
    stack(9);
    stack(int3);
    int3 = (int3 + 1);
    CC_CREATE();
    CC_SETPOSITION(int1, int2, 0, 0);
    CC_SETSIZE(0, 0, 1, 0);
    CC_SETCOLOUR(script10495(8));
    stack(int0);
    stack(9);
    stack(int3);
    int3 = (int3 + 1);
    CC_CREATE();
    CC_SETPOSITION(int1, (int2 + 1), 0, 0);
    CC_SETSIZE(0, 0, 1, 0);
    CC_SETCOLOUR(script10495(7));
    var int2 = (int2 + (2 + (2 * 2)));
    return int2;
}