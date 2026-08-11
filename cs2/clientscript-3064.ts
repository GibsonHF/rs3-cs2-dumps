//
function script3064(int0: number): void {
    var int1 = WORLDLIST_SPECIFIC_THISWORLD();
    if ((TESTBIT(int1, 24) == 1)) {
        IF_SETTEXT("Play League", comp(906, 82));  // lobbyscreen:login_button_text
        IF_SETTEXTFONT(58 as fontmetrics, comp(906, 82));  // lobbyscreen:login_button_text
        IF_SETCOLOUR(0, comp(906, 82));  // lobbyscreen:login_button_text
        IF_SETHIDE(true, comp(906, 66));  // lobbyscreen:login_button_mobile
        IF_SETHIDE(true, comp(906, 75));  // lobbyscreen:login_button_pc
        IF_SETHIDE(false, comp(906, 78));  // lobbyscreen:login_button_leagues
    } else {
        IF_SETTEXT("Play Now", comp(906, 82));  // lobbyscreen:login_button_text
        IF_SETTEXTFONT(58 as fontmetrics, comp(906, 82));  // lobbyscreen:login_button_text
        IF_SETCOLOUR(0, comp(906, 82));  // lobbyscreen:login_button_text
        IF_SETHIDE(true, comp(906, 78));  // lobbyscreen:login_button_leagues
        if ((script6431() == 1)) {
            IF_SETHIDE(false, comp(906, 66));  // lobbyscreen:login_button_mobile
            IF_SETHIDE(true, comp(906, 75));  // lobbyscreen:login_button_pc
        } else {
            IF_SETHIDE(true, comp(906, 66));  // lobbyscreen:login_button_mobile
            IF_SETHIDE(false, comp(906, 75));  // lobbyscreen:login_button_pc
        };
    };
    IF_SETHIDE(int0, comp(906, 83));  // lobbyscreen:login_button_disabled
    if ((int0 == true)) {
        IF_SETOP(1, "Play Now", comp(906, 81));  // lobbyscreen:login_button
        IF_SETONOP(callback(script3061, -2147483645), comp(906, 81));  // lobbyscreen:login_button
        IF_SETCOLOUR(16777215, comp(906, 77));  // lobbyscreen:login_button_small_1
        IF_SETCOLOUR(16777215, comp(906, 76));  // lobbyscreen:login_button_small_hover
    } else {
        IF_CLEAROPS(comp(906, 81));  // lobbyscreen:login_button
        IF_SETONOP(callback(), comp(906, 81));  // lobbyscreen:login_button
        IF_SETCOLOUR(8224125, comp(906, 77));  // lobbyscreen:login_button_small_1
        IF_SETCOLOUR(8224125, comp(906, 76));  // lobbyscreen:login_button_small_hover
    };
    script3065(int0);
    return;
}