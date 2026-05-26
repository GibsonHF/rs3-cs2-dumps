//
function script6107(): void {
    IF_SETTEXT("Select an item", comp(1265, 58));
    IF_SETOBJECT(-1 as obj, -1, comp(1265, 60));
    IF_SETTEXT("N/A", comp(1265, 137));
    var int0 = PARAWIDTH(IF_GETTEXT(comp(1265, 137)), IF_GETWIDTH(comp(1265, 134)), 26 as fontmetrics);
    IF_SETSIZE(int0, 15, 0, 0, comp(1265, 135));
    IF_SETTEXT("", comp(1265, 59));
    IF_SETTEXT("", comp(1265, 63));
    IF_SETTEXT("", comp(1265, 64));
    IF_SETTEXT("Transaction:", comp(1265, 66));
    IF_SETTEXT("Price:", comp(1265, 133));
    IF_SETGRAPHIC(-1 as graphic, comp(1265, 136));
    IF_SETHIDE(true, comp(1266, 3));
    IF_SETHIDE(false, comp(1265, 148));
    IF_SETHIDE(false, comp(1265, 145));
    IF_SETCOLOUR(8552313, comp(1265, 147));
    IF_SETTEXT("N/A", comp(1265, 147));
    IF_SETHIDE(true, comp(1265, 175));
    IF_SETGRAPHIC(-1 as graphic, comp(1265, 61));
    IF_SETONMOUSEREPEAT(callback(), comp(1265, 61));
    script6094();
    return;
}