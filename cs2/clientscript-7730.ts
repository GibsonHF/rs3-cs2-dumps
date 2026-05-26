//
function script7730(int0: number, int1: number, int2: number, int3: number): void {
    CC_CREATE(91684866, 5, int1);
    CC_SETGRAPHIC(int0);
    if ((int2 == 1)) {
        CC_SETPOSITION(0, int3, 1, 0);
        CC_SETONCLICK(callback(script7567, int1));
    } else {
        CC_SETPOSITION(int3, 0, 0, 1);
        CC_SETONMOUSEOVER(callback(script7567, int1));
        CC_SETONMOUSELEAVE(callback(script7568, int1));
    };
    CC_SETSIZE(25, 25, 0, 0);
    return;
}