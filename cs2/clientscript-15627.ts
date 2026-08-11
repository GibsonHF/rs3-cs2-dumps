//
function script15627(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, string0: string): void {
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = ENUM_GETOUTPUTCOUNT(1466 as cs2enum);
    var int17 = 20;
    if ((script13749() == 0)) {
        IF_SETPOSITION(0, 32, 1, 0, int2);
        IF_SETSIZE(16, 40, 1, 1, int2);
        IF_SETPOSITION(0, 52, 1, 0, int8);
        IF_SETSIZE(0, 45, 1, 1, int9);
        IF_SETPOSITION(0, 45, 0, 0, int9);
        script8421(int0, int1, int2, int3, string0, int4, int5, 1, -1, -1);
        [int13, int14] = script8405(int8);
        int14 = (int14 - IF_GETY(IF_GETPARENTLAYER(int0)));
        IF_SETSIZE(0, 60, 1, 0, int6);
        IF_SETPOSITION(0, -5, 0, 0, int6);
        IF_SETSIZE(16, 52, 1, 0, int11);
        IF_SETPOSITION(0, (int14 - 52), 1, 0, int11);
        while ((int15 < int16)) {
            IF_SETSIZE(128, 0, 0, 1, enum_getvalue(0, 9, 1466 as cs2enum, int15));
            IF_SETPOSITION((128 * int15), 0, 0, 0, enum_getvalue(0, 9, 1466 as cs2enum, int15));
            int15 = (int15 + 1);
        };
        IF_SETSIZE(int17, int17, 1, 1, comp(906, 43));  // lobbyscreen:content_container
        IF_SETSIZE(0, 0, 1, 1, comp(910, 9));  // lobbyscreen_pane_worldselect:mobile_extra_offset
        IF_SETSIZE(0, 0, 1, 1, comp(907, 1));  // lobbyscreen_pane_playerinfo:mobile_extra_offset
        IF_SETSIZE(0, 0, 1, 1, comp(906, 49));  // lobbyscreen:options_panel
        script15612();
        IF_SETHIDE(true, comp(906, 154));  // lobbyscreen:mobile_sidemenu
        IF_SETHIDE(true, comp(906, 152));  // lobbyscreen:mobile_sidemenu_blackout
        if ((varbitplayer_58378 == 1)) {
            IF_SETHIDE(true, comp(906, 66));  // lobbyscreen:login_button_mobile
            IF_SETHIDE(true, comp(906, 75));  // lobbyscreen:login_button_pc
            IF_SETHIDE(false, comp(906, 78));  // lobbyscreen:login_button_leagues
        } else {
            IF_SETHIDE(true, comp(906, 66));  // lobbyscreen:login_button_mobile
            IF_SETHIDE(false, comp(906, 75));  // lobbyscreen:login_button_pc
            IF_SETHIDE(true, comp(906, 78));  // lobbyscreen:login_button_leagues
        };
        IF_SETSIZE(288, 39, 0, 0, comp(906, 65));  // lobbyscreen:login_button_graphic
        return;
    };
    var int18 = 72;
    var int19 = 60;
    var int20 = 240;
    var int21 = 7;
    var int22 = 6;
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int3);
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    [int23, int24, int25, int26] = WINDOW_GETINSETS();
    int25 = MAX(int25, 5);
    var int27 = (int19 + int24);
    var int28 = 0;
    var int29 = 0;
    var int30 = (int19 + int25);
    var int31 = IF_GETPARENTLAYER(int0);
    if ((int31 != comp(-1, 65535))) {
        IF_SETSIZE(0, 0, 1, 1, int31);
        IF_SETPOSITION(0, 0, 1, 1, int31);
    };
    IF_SETSIZE(0, 0, 1, 1, int1);
    IF_SETPOSITION(0, 0, 1, 1, int1);
    stack(int1);
    stack(5);
    stack(int28);
    int28 = (int28 + 1);
    CC_CREATE();
    CC_SETSIZE(100, (int27 - 4), 1, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(12738 as graphic);
    CC_SETTILING(true);
    stack(int1);
    stack(5);
    stack(int28);
    int28 = (int28 + 1);
    CC_CREATE();
    CC_SETSIZE(100, (int27 - 4), 0, 0);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETGRAPHIC(12739 as graphic);
    CC_SETTILING(true);
    stack(int1);
    stack(5);
    stack(int28);
    int28 = (int28 + 1);
    CC_CREATE();
    CC_SETSIZE(0, 4, 1, 0);
    CC_SETPOSITION(0, (int27 - 4), 0, 0);
    CC_SETGRAPHIC(12740 as graphic);
    CC_SETTILING(true);
    stack(int1);
    stack(5);
    stack(int28);
    int28 = (int28 + 1);
    CC_CREATE();
    CC_SETSIZE(54, 70, 0, 0);
    CC_SETPOSITION(-22, (int24 - 4), 0, 0);
    CC_SETGRAPHIC(12741 as graphic);
    stack(int1);
    stack(5);
    stack(int28);
    int28 = (int28 + 1);
    CC_CREATE();
    CC_SETSIZE(96, 37, 0, 0);
    CC_SETPOSITION(-22, (int24 + 27), 2, 0);
    CC_SETGRAPHIC(12742 as graphic);
    stack(int1);
    stack(5);
    stack(int28);
    int28 = (int28 + 1);
    CC_CREATE();
    CC_SETSIZE(63, 63, 0, 0);
    CC_SETPOSITION((int23 - 3), (int24 - 2), 0, 0);
    CC_SETGRAPHIC(25623 as graphic);
    CC_SETONCLICK(callback(script15620));
    stack(int1);
    stack(5);
    stack(int28);
    int28 = (int28 + 1);
    CC_CREATE();
    CC_SETSIZE(35, 34, 0, 0);
    CC_SETPOSITION((int23 + 11), (int24 + 12), 0, 0);
    CC_SETGRAPHIC(12731 as graphic);
    IF_SETSIZE(((int23 + int19) + int30), int19, 1, 0, int11);
    IF_SETPOSITION(int30, int24, 2, 0, int11);
    IF_SETPOSITION(0, 0, 1, 0, int8);
    IF_SETSIZE(0, 0, 1, 1, int0);
    IF_SETPOSITION(0, 0, 0, 2, int0);
    stack(int0);
    stack(5);
    stack(int29);
    int29 = (int29 + 1);
    CC_CREATE();
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(23862 as graphic);
    CC_SETTILING(true);
    stack(int0);
    stack(5);
    stack(int29);
    int29 = (int29 + 1);
    CC_CREATE();
    CC_SETSIZE(0, int27, 1, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(18035 as graphic);
    CC_SETTILING(true);
    stack(int0);
    stack(5);
    stack(int29);
    int29 = (int29 + 1);
    CC_CREATE();
    CC_SETSIZE(int21, (int19 + int24), 0, 1);
    CC_SETPOSITION(int30, 0, 2, 2);
    CC_SETGRAPHIC(12747 as graphic);
    CC_SETTILING(true);
    IF_SETSIZE(int18, ((int19 + int24) + int26), 0, 1, int7);
    IF_SETPOSITION((int25 - 6), (int19 + int24), 2, 0, int7);
    IF_SETSIZE((int20 + int23), 0, 0, 1, int12);
    IF_SETSIZE(0, 0, 1, 1, comp(906, 152));  // lobbyscreen:mobile_sidemenu_blackout
    IF_SETSIZE(int20, (int24 + int26), 0, 1, comp(815, 4));  // lobbyscreen_mobile_side_menu:contents
    script15619((int20 + int23));
    IF_SETONCLICK(callback(script6508), comp(906, 152));  // lobbyscreen:mobile_sidemenu_blackout
    IF_SETSIZE(0, 0, 1, 1, int9);
    IF_SETPOSITION(0, 0, 0, 0, int9);
    script15612();
    IF_SETSIZE(0, 0, 1, 1, comp(906, 43));  // lobbyscreen:content_container
    IF_SETSIZE(((int30 + int23) + (int17 * 2)), (int19 + int26), 1, 1, int2);
    IF_SETPOSITION((int23 + int17), (int19 + int24), 0, 0, int2);
    IF_SETSIZE(400, 0, 0, 1, comp(910, 1));  // lobbyscreen_pane_worldselect:title_wrapper
    IF_SETPOSITION(60, 4, 0, 0, comp(910, 6));  // lobbyscreen_pane_worldselect:title_offset
    IF_SETHIDE(false, comp(906, 154));  // lobbyscreen:mobile_sidemenu
    IF_SETHIDE(true, comp(906, 112));  // lobbyscreen:top_bar_bg
    IF_SETHIDE(true, comp(906, 42));  // lobbyscreen:background
    IF_SETHIDE(true, comp(906, 60));  // lobbyscreen:login_bg
    IF_SETHIDE(true, int3);
    var int32 = WORLDLIST_SPECIFIC_THISWORLD();
    if ((TESTBIT(int32, 24) == 1)) {
        IF_SETHIDE(true, comp(906, 66));  // lobbyscreen:login_button_mobile
        IF_SETHIDE(true, comp(906, 75));  // lobbyscreen:login_button_pc
        IF_SETHIDE(false, comp(906, 78));  // lobbyscreen:login_button_leagues
        IF_SETTEXT("Play League", comp(906, 82));  // lobbyscreen:login_button_text
        IF_SETTEXTFONT(58 as fontmetrics, comp(906, 82));  // lobbyscreen:login_button_text
        IF_SETCOLOUR(0, comp(906, 82));  // lobbyscreen:login_button_text
    } else {
        IF_SETHIDE(false, comp(906, 66));  // lobbyscreen:login_button_mobile
        IF_SETHIDE(true, comp(906, 75));  // lobbyscreen:login_button_pc
        IF_SETHIDE(true, comp(906, 78));  // lobbyscreen:login_button_leagues
        IF_SETTEXT("Play Now", comp(906, 82));  // lobbyscreen:login_button_text
        IF_SETTEXTFONT(58 as fontmetrics, comp(906, 82));  // lobbyscreen:login_button_text
        IF_SETCOLOUR(0, comp(906, 82));  // lobbyscreen:login_button_text
    };
    IF_SETSIZE(300, 0, 0, 1, comp(906, 65));  // lobbyscreen:login_button_graphic
    return;
}