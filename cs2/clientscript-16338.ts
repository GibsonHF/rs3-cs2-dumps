//
function script16338(int0: number): void {
    var string0 = "";
    if ((int0 == 1)) {
        string0 = "Frank's Free Deaths: This boss is active this week.";
    } else {
        string0 = "Frank's Free Deaths: This boss will be active in an upcoming week.";
    };
    IF_SETONMOUSEREPEAT(callback(script10009, string0, -2147483645, -2147483643), comp(753, 90));  // bslay_boss_info:boss_spotlight_click
    IF_SETONMOUSEOVER(callback(script16339, int0), comp(753, 90));  // bslay_boss_info:boss_spotlight_click
    IF_SETONMOUSELEAVE(callback(script16340, int0), comp(753, 90));  // bslay_boss_info:boss_spotlight_click
    return;
}