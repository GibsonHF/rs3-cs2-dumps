//
function script2026(): void {
    IF_SETTEXTFONT(26 as fontmetrics, comp(1469, 3));  // meslayer:mes_text
    IF_SETTEXTFONT(26 as fontmetrics, comp(1469, 4));  // meslayer:mes_text2
    IF_SETSIZE(20, 40, 1, 0, comp(1469, 3));  // meslayer:mes_text
    IF_SETSIZE(20, 20, 1, 0, comp(1469, 4));  // meslayer:mes_text2
    var int0 = ((((IF_GETHEIGHT(comp(1469, 1)) - 60) - 20) / 2) + 60);  // meslayer:mes_layer
    IF_SETPOSITION(0, (((((IF_GETHEIGHT(comp(1469, 1) /*meslayer:mes_layer*/) - 20) - 40) - int0) / 2) + 20), 1, 0, comp(1469, 3) /*meslayer:mes_text*/);
    IF_SETPOSITION(0, int0, 1, 0, comp(1469, 4));  // meslayer:mes_text2
    IF_SETONMOUSEREPEAT(callback(), comp(1469, 4));  // meslayer:mes_text2
    IF_SETONMOUSELEAVE(callback(), comp(1469, 4));  // meslayer:mes_text2
    stack(callback());
    stack(96272388);
    IF_SETONSUBCHANGE();
    IF_SETCOLOUR(128, comp(1469, 4));  // meslayer:mes_text2
    CC_DELETEALL(comp(1469, 1));  // meslayer:mes_layer
    return;
}