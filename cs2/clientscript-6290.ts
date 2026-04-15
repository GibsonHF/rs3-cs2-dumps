//
function script6290(int0: int): void {
    CC_CREATE(comp(1296, 3), 4, 0);
    CC_SETSIZE(90, 12, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETTEXTALIGN(2, 1, 0);
    varclient_1933 = 0;
    if ((int0 < 1)) {
        CC_SETTEXT(`Fee: ${script46(int0, ",")}`);
        CC_SETCOLOUR(16711680);
    } else {
        CC_SETTEXT(`Fee: + ${script46(int0, ",")}`);
        CC_SETCOLOUR(65280);
    };
    CC_SETTEXTSHADOW(true);
    IF_SETONTIMER(callback(script6291), comp(1296, 3));
    return;
}