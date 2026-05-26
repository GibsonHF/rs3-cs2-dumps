//
function script8164(): void {
    if (((varbitplayer_27169 == 1) || (varbitplayer_38842 == 1))) {
        IF_SETHIDE(1, 96796737);
        return;
    };
    if ((script20475() == 0)) {
        IF_SETHIDE(1, 96796737);
        return;
    };
    if (((CC_FIND(96796737, 1) == 1) && (script20475() == 1))) {
        CC_SETOP(1, "Toggle Interface Customisation");
        CC_SETONOP(callback(script8166, -2147483645, -2147483643));
        CC_SETONMOUSEREPEAT(callback(script8171, -2147483645, -2147483643));
        CC_SETONMOUSELEAVE(callback(script8172, -2147483645, -2147483643));
        CC_SETONVARTRANSMIT(callback(script8165, -2147483645, -2147483643, 3814, 1));
        if ((script8839(20) == 1)) {
            script8844(1, script8825(20, 0), 96796737, 1);
        };
        CC_SETMOUSEOVERCURSOR(36);
        CC_SETNOCLICKTHROUGH(1);
    };
    IF_SETHIDE(0, 96796737);
    return;
}