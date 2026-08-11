//
function script1030(int0: number): void {
    IF_SETHIDE(true, comp(157, 1));  // quickchat_tutorial:pagecontrols
    CC_DELETEALL(comp(157, 2));  // quickchat_tutorial:main
    CC_DELETEALL(comp(157, 3));  // quickchat_tutorial:text
    IF_SETONCLICK(callback(script1031), comp(157, 6));  // quickchat_tutorial:button_active
    script13993(10289158, -1, 28556, "Safety Guide");
    script1033(enum_getvalue(0, 36, 1485 as cs2enum, 0));
    return;
}