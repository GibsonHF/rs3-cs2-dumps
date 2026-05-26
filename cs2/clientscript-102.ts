//[proc,meslayer_mode1]
function script102(string0: string): void {
    if ((varclient_5 > 1)) {
        return;
    };
    IF_SETHIDE(0, 96272384);
    IF_SETTEXTFONT(68, 96272387);
    IF_SETTEXTFONT(68, 96272388);
    IF_SETSIZE(0, 20, 1, 1, 96272387);
    IF_SETSIZE(0, 20, 1, 0, 96272388);
    var int0 = ((((IF_GETHEIGHT(96272385) - 60) - 20) / 2) + 60);
    IF_SETPOSITION(0, (((IF_GETHEIGHT(96272385) - 40) - int0) / 2), 1, 0, 96272387);
    IF_SETPOSITION(0, int0, 1, 0, 96272388);
    IF_SETTEXT(string0, 96272387);
    IF_SETTEXT("Select to continue", 96272388);
    varclient_5 = 1;
    IF_SETONCLICK(callback(script101), 96272385);
    CC_DELETEALL(96272385);
    IF_SETCOLOUR(128, 96272388);
    IF_SETONMOUSEREPEAT(callback(script45, -2147483645, 16777215), 96272388);
    IF_SETONMOUSELEAVE(callback(script45, -2147483645, 128), 96272388);
    IF_SETHIDE(1, 96272389);
    IF_SETONTIMER(callback(), 96272388);
    IF_SETONCLICK(callback(), 96272388);
    stack(3450);
    stack(1);
    stack("i");
    stack(96272388);
    IF_SETONSUBCHANGE();
    return;
}