//
function script11462(int0: int, int1: component, int2: int): void {
    var string0 = `Rank: ${enum_getvalue(0, 36, 3715 as cs2enum, int0)}`;
    CC_SETONMOUSEOVER(callback(script3167, int1, int2, string0));
    CC_SETONMOUSELEAVE(callback(script3169, int1, int2));
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    return;
}