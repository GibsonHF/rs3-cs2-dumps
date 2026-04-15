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
    stack(-1);
    stack(82903176);
    IF_SETGRAPHIC();
    IF_SETHIDE(1, 82968579);
    IF_SETHIDE(0, 82903188);
    IF_SETHIDE(0, 82903185);
    IF_SETCOLOUR(8552313, 82903187);
    IF_SETTEXT("N/A", 82903187);
    IF_SETHIDE(1, 82903215);
    stack(-1);
    stack(82903101);
    IF_SETGRAPHIC();
    IF_SETONMOUSEREPEAT(callback(), 82903101);
    script6094();
    return;
}