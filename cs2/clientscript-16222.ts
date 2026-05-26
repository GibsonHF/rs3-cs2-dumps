//
function script16222(int0: number, int1: number, int2: number, int3: number): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETGRAPHIC(int2);
        CC_SETONMOUSEOVER(callback(script5336, int0, int1, int3));
        CC_SETONMOUSELEAVE(callback(script5336, int0, int1, int2));
    };
    return;
}