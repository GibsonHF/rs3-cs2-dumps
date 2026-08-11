//[proc,quickchat_tutorial_showpage]
function script1032(int0: number, int1: number, int2: number): void {
    IF_SETHIDE(false, comp(157, 1));  // quickchat_tutorial:pagecontrols
    IF_SETONCLICK(callback(script1028), comp(157, 6));  // quickchat_tutorial:button_active
    script13993(10289158, -1, 28556, "Shortcut keys");
    CC_DELETEALL(comp(157, 2));  // quickchat_tutorial:main
    CC_DELETEALL(comp(157, 3));  // quickchat_tutorial:text
    script1033(enum_getvalue(0, 36, int0, int1));
    IF_SETTEXT(`Page ${inttostring((int1 + 1), 10)} of ${inttostring(int2, 10)}`, comp(157, 7));  // quickchat_tutorial:pagecount
    var int3 = (int1 + 1);
    var int4 = (int1 - 1);
    if ((int1 != (int2 - 1))) {
        IF_SETONCLICK(callback(script784, int0, int3, int2), comp(157, 8));  // quickchat_tutorial:button_next
        IF_SETTRANS(0, comp(157, 8));  // quickchat_tutorial:button_next
    } else {
        IF_SETONCLICK(callback(), comp(157, 8));  // quickchat_tutorial:button_next
        IF_SETTRANS(200, comp(157, 8));  // quickchat_tutorial:button_next
    };
    if ((int1 != 0)) {
        IF_SETONCLICK(callback(script784, int0, int4, int2), comp(157, 9));  // quickchat_tutorial:button_back
        IF_SETTRANS(0, comp(157, 9));  // quickchat_tutorial:button_back
    } else {
        IF_SETONCLICK(callback(), comp(157, 9));  // quickchat_tutorial:button_back
        IF_SETTRANS(200, comp(157, 9));  // quickchat_tutorial:button_back
    };
    return;
}