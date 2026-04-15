//[proc,quickchat_tutorial_showpage]
function script1032(int0: unknown_int, int1: unknown_int, int2: unknown_int): void {
    IF_SETHIDE(false, comp(157, 1));
    IF_SETONCLICK(callback(script1028), comp(157, 6));
    script13993(10289158, -1, 28556, "Shortcut keys");
    CC_DELETEALL(10289154);
    CC_DELETEALL(10289155);
    script1033(enum_getvalue(0, 36, int0, int1));
    IF_SETTEXT(`Page ${inttostring((int1 + 1), 10)} of ${inttostring(int2, 10)}`, 10289159);
    var int3 = (int1 + 1);
    var int4 = (int1 - 1);
    if ((int1 != (int2 - 1))) {
        IF_SETONCLICK(callback(script784, int0, int3, int2), 10289160);
        IF_SETTRANS(0, 10289160);
    } else {
        IF_SETONCLICK(callback(), comp(157, 8));
        IF_SETTRANS(200, 10289160);
    };
    if ((int1 != 0)) {
        IF_SETONCLICK(callback(script784, int0, int4, int2), 10289161);
        IF_SETTRANS(0, 10289161);
    } else {
        IF_SETONCLICK(callback(), comp(157, 9));
        IF_SETTRANS(200, 10289161);
    };
    return;
}