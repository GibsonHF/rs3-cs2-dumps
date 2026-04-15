//
function script6711(int0: int, int1: int): void {
    var int2 = script10495(int0);
    CC_SETCOLOUR(int2);
    CC_SETONMOUSEOVER(callback(script6267, -2147483645, -2147483643, script10495(int1)));
    CC_SETONMOUSELEAVE(callback(script6267, -2147483645, -2147483643, int2));
    CC_SETONVARTRANSMIT(callback(script6676, -2147483645, -2147483643, int0, int1, 3814, 1));
    return;
}