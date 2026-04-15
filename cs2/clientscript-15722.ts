//
function script15722(int0: int, int1: int): void {
    var int2 = script10495(int0);
    CC_SETCOLOUR[1](int2);
    CC_SETONMOUSEOVER[1](callback(script6267, -2147483645, -2147483643, script10495(int1)));
    CC_SETONMOUSELEAVE[1](callback(script6267, -2147483645, -2147483643, int2));
    CC_SETONVARTRANSMIT[1](callback(script6676, -2147483645, -2147483643, int0, int1, 3814, 1));
    return;
}