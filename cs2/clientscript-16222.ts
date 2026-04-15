//
function script16222(int0: component, int1: int, int2: graphic, int3: unknown_int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETGRAPHIC(int2);
        CC_SETONMOUSEOVER(callback(script5336, int0, int1, int3));
        CC_SETONMOUSELEAVE(callback(script5336, int0, int1, int2));
    };
    return;
}