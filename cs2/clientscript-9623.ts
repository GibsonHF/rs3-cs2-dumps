//
function script9623(int0: number, int1: number, int2: number): void {
    if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](int0, 0) == 1))) {
        CC_SETCOLOUR(int2);
        CC_SETHIDE[1](1);
        CC_SETPOSITION[1](CC_GETX[1](), (CC_GETY() - (5 / 2)), 0, 0);
        CC_SETHIDE[1](0);
    };
    return;
}