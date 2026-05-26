//
function script2026(): void {
    IF_SETTEXTFONT(26, 96272387);
    IF_SETTEXTFONT(26, 96272388);
    IF_SETSIZE(20, 40, 1, 0, 96272387);
    IF_SETSIZE(20, 20, 1, 0, 96272388);
    var int0 = ((((IF_GETHEIGHT(96272385) - 60) - 20) / 2) + 60);
    IF_SETPOSITION(0, (((((IF_GETHEIGHT(96272385) - 20) - 40) - int0) / 2) + 20), 1, 0, 96272387);
    IF_SETPOSITION(0, int0, 1, 0, 96272388);
    IF_SETONMOUSEREPEAT(callback(), 96272388);
    IF_SETONMOUSELEAVE(callback(), 96272388);
    stack(-1);
    stack("");
    stack(96272388);
    IF_SETONSUBCHANGE();
    IF_SETCOLOUR(128, 96272388);
    CC_DELETEALL(96272385);
    return;
}