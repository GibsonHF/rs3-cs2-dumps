//
function script4515(int0: component, int1: int): void {
    var int2 = -1;
    while ((CC_FIND(int0, ++int2) == 1)) {
        if ((cc_getparam(7186) == 1)) {
            CC_SETHIDE(true);
        };
    };
    if ((CC_FIND(int0, (int1 + 1)) == 1)) {
        CC_SETHIDE(false);
    };
    if ((CC_FIND(int0, (int1 + 2)) == 1)) {
        CC_SETHIDE(false);
    };
    if ((CC_FIND(int0, (int1 + 3)) == 1)) {
        CC_SETHIDE(false);
    };
    if (((CC_FIND(int0, int1) == 1) && (varbitclient_40728 != cc_getparam(7189)))) {
        varbitclient_40728 = cc_getparam(7189);
        script4491(varbitclient_40728);
    };
    return;
}