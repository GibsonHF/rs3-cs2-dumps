//
function script6288(int0: unknown_int, int1: unknown_int): void {
    CC_CREATE(comp(1296, 2), 4, 0);
    CC_SETSIZE(65, 12, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETTEXTALIGN(2, 1, 0);
    varclient_1932 = 0;
    if ((int1 == 1)) {
        CC_SETTEXT("+1 death");
        CC_SETCOLOUR(16711680);
    } else if ((int0 == 1)) {
        CC_SETTEXT("+1 kill");
        CC_SETCOLOUR(65280);
    };
    CC_SETTEXTSHADOW(true);
    IF_SETONTIMER(callback(script6289), comp(1296, 2));
    return;
}