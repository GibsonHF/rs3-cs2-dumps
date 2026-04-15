//
function script11909(int0: component, int1: int): void {
    var string0 = "Drop";
    if ((varbitplayer_29537 == 0)) {
        string0 = "Loot";
    };
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        if ((CC_GETWIDTH() < PARAWIDTH(string0, 1000, CC_GETFONTMETRICS()))) {
            CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
            CC_SETTEXT(script3930(string0, CC_GETWIDTH(), 1, CC_GETFONTMETRICS()));
        } else {
            CC_SETONMOUSEREPEAT(callback());
            CC_SETTEXT(string0);
        };
    };
    return;
}