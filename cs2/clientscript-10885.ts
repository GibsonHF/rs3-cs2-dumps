//
function script10885(int0: component, int1: struct): void {
    var string0 = script17676(int1);
    if ((CC_FIND[1](int0, 3) == 1)) {
        if ((script6431() == false)) {
            CC_SETONMOUSEREPEAT[1](callback(script10490, string0, -2147483645, -2147483643, 25));
        } else {
            CC_SETONCLICK[1](callback(script7774, string0, -2147483645, -2147483643, 0));
        };
    };
    return;
}