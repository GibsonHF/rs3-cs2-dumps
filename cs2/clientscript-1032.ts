//[proc,quickchat_tutorial_showpage]
function script1032(int0: number, int1: number, int2: number): void {
    IF_SETHIDE(false, comp(157, 1));
    IF_SETONCLICK(callback(script1028), comp(157, 6));
    script13993(10289158, -1, 28556, "Shortcut keys");
    CC_DELETEALL(comp(157, 2));
    CC_DELETEALL(comp(157, 3));
    script1033(enum_getvalue(0, 36, int0, int1));
    IF_SETTEXT(`Page ${inttostring((int1 + 1), 10)} of ${inttostring(int2, 10)}`, comp(157, 7));
    var int3 = (int1 + 1);
    var int4 = (int1 - 1);
    if ((int1 != (int2 - 1))) {
        IF_SETONCLICK(callback(script784, int0, int3, int2), comp(157, 8));
        IF_SETTRANS(0, comp(157, 8));
    } else {
        IF_SETONCLICK(callback(), comp(157, 8));
        IF_SETTRANS(200, comp(157, 8));
    };
    if ((int1 != 0)) {
        IF_SETONCLICK(callback(script784, int0, int4, int2), comp(157, 9));
        IF_SETTRANS(0, comp(157, 9));
    } else {
        IF_SETONCLICK(callback(), comp(157, 9));
        IF_SETTRANS(200, comp(157, 9));
    };
    return;
}