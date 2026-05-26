//
function script19798(int0: number, int1: number, int2: number, int3: number): void {
    if ((CC_GETGRAPHIC() != int3)) {
        CC_SETGRAPHIC(int2);
    };
    CC_SETONMOUSEOVER(callback(script16245, -2147483645, int0, int1, int3));
    CC_SETONMOUSELEAVE(callback(script16245, -2147483645, int0, int1, int2));
    return;
}