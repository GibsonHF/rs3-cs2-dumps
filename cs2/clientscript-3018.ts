//[proc,lobbyscreen_input_clear]
function script3018(): void {
    script1594();
    IF_SETONKEY(callback(), comp(808, 10));
    IF_SETONOP(callback(), comp(808, 6));
    IF_SETONCLICK(callback(), comp(808, 5));
    IF_SETHIDE(true, comp(808, 5));
    varclient_2478 = "";
    varclient_1650 = 0;
    return;
}