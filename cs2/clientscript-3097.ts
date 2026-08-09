//[proc,lobby_popup_close]
function script3097(): void {
    IF_CLEAROPS(comp(820, 12));
    IF_CLEAROPS(comp(820, 13));
    IF_SETONCLICK(callback(), comp(820, 12));
    IF_SETONCLICK(callback(), comp(820, 13));
    IF_SETONOP(callback(), comp(820, 12));
    IF_SETONOP(callback(), comp(820, 13));
    IF_SETHIDE(true, comp(820, 12));
    IF_SETHIDE(true, comp(820, 13));
    IF_SETTEXT("", comp(820, 10));
    IF_SETHIDE(true, comp(820, 9));
    IF_SETHIDE(true, comp(820, 6));
    IF_SETONKEY(callback(), comp(906, 151));
    IF_SETHIDE(true, comp(906, 151));
    return;
}