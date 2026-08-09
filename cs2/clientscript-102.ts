//[proc,meslayer_mode1]
function script102(string0: string): void {
    if ((varclient_5 > 1)) {
        return;
    };
    IF_SETHIDE(false, comp(1469, 0));
    IF_SETTEXTFONT(68 as fontmetrics, comp(1469, 3));
    IF_SETTEXTFONT(68 as fontmetrics, comp(1469, 4));
    IF_SETSIZE(0, 20, 1, 1, comp(1469, 3));
    IF_SETSIZE(0, 20, 1, 0, comp(1469, 4));
    var int0 = ((((IF_GETHEIGHT(comp(1469, 1)) - 60) - 20) / 2) + 60);
    IF_SETPOSITION(0, (((IF_GETHEIGHT(comp(1469, 1)) - 40) - int0) / 2), 1, 0, comp(1469, 3));
    IF_SETPOSITION(0, int0, 1, 0, comp(1469, 4));
    IF_SETTEXT(string0, comp(1469, 3));
    IF_SETTEXT("Select to continue", comp(1469, 4));
    varclient_5 = 1;
    IF_SETONCLICK(callback(script101), comp(1469, 1));
    CC_DELETEALL(comp(1469, 1));
    IF_SETCOLOUR(128, comp(1469, 4));
    IF_SETONMOUSEREPEAT(callback(script45, -2147483645, 16777215), comp(1469, 4));
    IF_SETONMOUSELEAVE(callback(script45, -2147483645, 128), comp(1469, 4));
    IF_SETHIDE(true, comp(1469, 5));
    IF_SETONTIMER(callback(), comp(1469, 4));
    IF_SETONCLICK(callback(), comp(1469, 4));
    stack(callback(script3450, 1));
    stack(96272388);
    IF_SETONSUBCHANGE();
    return;
}