//
function script12645(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int0);
    var int1 = -1;
    while ((++int1 <= 32)) {
        CC_CREATE(int0, 4, int1);
        if ((STRING_LENGTH(enum_getvalue(0, 36, 9734 as cs2enum, int1)) != 0)) {
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETSIZE(1, 27, 0, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTALIGN(2, 1, 0);
            CC_SETTEXTSHADOW(true);
            CC_SETCOLOUR(16777215);
            cc_setparam(5941, 255);
            cc_setparam(5838, 5);
            cc_setparam(5837, 3);
            CC_SETONTIMER(callback(script12648, -2147483645, -2147483643));
        };
        CC_SETTRANS(255);
        CC_SETHIDE(true);
    };
    return;
}