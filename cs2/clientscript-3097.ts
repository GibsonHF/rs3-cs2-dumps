//[proc,lobby_popup_close]
function script3097(): void {
    IF_CLEAROPS(comp(820, 12));
    IF_CLEAROPS(comp(820, 13));
    IF_SETONCLICK(callback(), comp(820, 12));
    IF_SETONCLICK(callback(), 53739533);
    IF_SETONOP(callback(), 53739532);
    IF_SETONOP(callback(), 53739533);
    IF_SETHIDE(1, 53739532);
    IF_SETHIDE(1, 53739533);
    IF_SETTEXT("", 53739530);
    IF_SETHIDE(1, 53739529);
    IF_SETHIDE(1, 53739526);
    IF_SETONKEY(callback(), 59375767);
    IF_SETHIDE(1, 59375767);
    return;
}