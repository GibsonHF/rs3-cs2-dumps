//
function script19798(int0: unknown_int, int1: int, int2: graphic, int3: graphic): void {
    if ((CC_GETGRAPHIC() != int3)) {
        CC_SETGRAPHIC(int2);
    };
    CC_SETONMOUSEOVER(callback(script16245, -2147483645, int0, int1, int3));
    CC_SETONMOUSELEAVE(callback(script16245, -2147483645, int0, int1, int2));
    return;
}