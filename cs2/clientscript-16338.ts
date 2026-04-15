//
function script16338(int0: unknown_int): void {
    var string0 = "";
    if ((int0 == 1)) {
        string0 = "Frank's Free Deaths: This boss is active this week.";
    } else {
        string0 = "Frank's Free Deaths: This boss will be active in an upcoming week.";
    };
    IF_SETONMOUSEREPEAT(callback(script10009, string0, -2147483645, -2147483643), 49348698);
    IF_SETONMOUSEOVER(callback(script16339, int0), 49348698);
    IF_SETONMOUSELEAVE(callback(script16340, int0), 49348698);
    return;
}