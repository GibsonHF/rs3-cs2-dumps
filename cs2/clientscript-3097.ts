//[proc,lobby_popup_close]
function script3097(): void {
    IF_CLEAROPS(comp(820, 12));  // lobbyscreen_popup:left_button
    IF_CLEAROPS(comp(820, 13));  // lobbyscreen_popup:right_button
    IF_SETONCLICK(callback(), comp(820, 12));  // lobbyscreen_popup:left_button
    IF_SETONCLICK(callback(), comp(820, 13));  // lobbyscreen_popup:right_button
    IF_SETONOP(callback(), comp(820, 12));  // lobbyscreen_popup:left_button
    IF_SETONOP(callback(), comp(820, 13));  // lobbyscreen_popup:right_button
    IF_SETHIDE(true, comp(820, 12));  // lobbyscreen_popup:left_button
    IF_SETHIDE(true, comp(820, 13));  // lobbyscreen_popup:right_button
    IF_SETTEXT("", comp(820, 10));  // lobbyscreen_popup:text
    IF_SETHIDE(true, comp(820, 9));  // lobbyscreen_popup:static_graphic
    IF_SETHIDE(true, comp(820, 6));  // lobbyscreen_popup:spinner
    IF_SETONKEY(callback(), comp(906, 151));  // lobbyscreen:popup
    IF_SETHIDE(true, comp(906, 151));  // lobbyscreen:popup
    return;
}