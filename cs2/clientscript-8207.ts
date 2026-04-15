//
function script8207(int0: int, int1: int, int2: component): void {
    CC_CREATE(int2, 5, 0);
    CC_SETGRAPHIC(18695 as graphic);
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETPOSITION(2, 0, 2, 1);
    var string0 = "Clear Keybind";
    CC_SETOP(1, string0);
    CC_SETONOP(callback(script8822, int0, int1));
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    CC_SETONMOUSELEAVE(callback(script8805));
    CC_SETHIDE(1);
    CC_CREATE(int2, 5, 1);
    CC_SETGRAPHIC(-1);
    CC_SETSIZE(18, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 1);
    string0 = "Change Keybind";
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    CC_SETONMOUSELEAVE(callback(script8805));
    return;
}