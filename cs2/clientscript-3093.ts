//[proc,lobby_popup]
function script3093(int0: number, int1: number, int2: number, string0: string, string1: string, string2: string, string3: string): void {
    if ((IF_GETHIDE(comp(906, 151)) == false)) {  // lobbyscreen:popup
        return;
    };
    script3097();
    var int3 = 50;
    var int4 = 140;
    var int5 = 600;
    var int6 = 450;
    var int7 = 150;
    var int8 = 20;
    var int9 = 50;
    var int10 = 20;
    var int11 = 72;
    var int12 = 10;
    var int13 = 40;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 18;
    if ((STRING_LENGTH(string2) > 0)) {
        int14 = MAX(int7, (30 + PARAWIDTH(string2, 1000, 56 as fontmetrics)));
    } else {
        IF_SETHIDE(true, comp(820, 12));  // lobbyscreen_popup:left_button
    };
    if ((STRING_LENGTH(string3) > 0)) {
        int15 = MAX(int7, (30 + PARAWIDTH(string3, 1000, 56 as fontmetrics)));
    } else {
        IF_SETHIDE(true, comp(820, 13));  // lobbyscreen_popup:right_button
    };
    var int18 = int6;
    var int19 = (int13 + int8);
    if ((int14 > 0)) {
        if ((int15 > 0)) {
            if ((((int14 + int15) + int8) > (int5 - int9))) {
                int14 = (((int5 - int9) - int8) / 2);
                int15 = int14;
                int18 = int5;
            } else {
                int18 = MAX(int18, (((int14 + int15) + int8) + int9));
            };
            IF_SETPOSITION(0, 0, 0, 2, comp(820, 12));  // lobbyscreen_popup:left_button
            IF_SETPOSITION(0, 0, 2, 2, comp(820, 13));  // lobbyscreen_popup:right_button
            IF_SETHIDE(false, comp(820, 12));  // lobbyscreen_popup:left_button
            IF_SETHIDE(false, comp(820, 13));  // lobbyscreen_popup:right_button
        } else if ((int14 > 0)) {
            IF_SETPOSITION(0, 0, 1, 2, comp(820, 12));  // lobbyscreen_popup:left_button
            IF_SETHIDE(false, comp(820, 12));  // lobbyscreen_popup:left_button
            IF_SETHIDE(true, comp(820, 13));  // lobbyscreen_popup:right_button
        } else if ((int15 > 0)) {
            IF_SETPOSITION(0, 0, 1, 2, comp(820, 13));  // lobbyscreen_popup:right_button
            IF_SETHIDE(true, comp(820, 12));  // lobbyscreen_popup:left_button
            IF_SETHIDE(false, comp(820, 13));  // lobbyscreen_popup:right_button
        } else {
            IF_SETHIDE(true, comp(820, 13));  // lobbyscreen_popup:right_button
            IF_SETHIDE(true, comp(820, 12));  // lobbyscreen_popup:left_button
            int19 = 0;
        };
    } else if ((int14 > 0)) {
        IF_SETPOSITION(0, 0, 1, 2, comp(820, 12));  // lobbyscreen_popup:left_button
        IF_SETHIDE(false, comp(820, 12));  // lobbyscreen_popup:left_button
        IF_SETHIDE(true, comp(820, 13));  // lobbyscreen_popup:right_button
    } else if ((int15 > 0)) {
        IF_SETPOSITION(0, 0, 1, 2, comp(820, 13));  // lobbyscreen_popup:right_button
        IF_SETHIDE(true, comp(820, 12));  // lobbyscreen_popup:left_button
        IF_SETHIDE(false, comp(820, 13));  // lobbyscreen_popup:right_button
    } else {
        IF_SETHIDE(true, comp(820, 13));  // lobbyscreen_popup:right_button
        IF_SETHIDE(true, comp(820, 12));  // lobbyscreen_popup:left_button
        int19 = 0;
    };
    script8047(53739532, string2, dbrow_getfield(int1, 520208, 0));
    script8047(53739533, string3, dbrow_getfield(int1, 520224, 0));
    script3095(53739532, 53739533, int0);
    IF_SETSIZE(int14, 0, 0, 1, comp(820, 12));  // lobbyscreen_popup:left_button
    IF_SETSIZE(int15, 0, 0, 1, comp(820, 13));  // lobbyscreen_popup:right_button
    if ((int2 != -1 as graphic)) {
        int19 = (int19 + (int11 + int12));
        if ((int2 == 18963 as graphic)) {
            IF_SET2DANGLE(0, comp(820, 8));  // lobbyscreen_popup:spinner_inner
            IF_SETHIDE(false, comp(820, 6));  // lobbyscreen_popup:spinner
            IF_SETHIDE(true, comp(820, 9));  // lobbyscreen_popup:static_graphic
        } else {
            IF_SETGRAPHIC(int2, comp(820, 9));  // lobbyscreen_popup:static_graphic
            IF_SETHIDE(true, comp(820, 6));  // lobbyscreen_popup:spinner
            IF_SETHIDE(false, comp(820, 9));  // lobbyscreen_popup:static_graphic
        };
        IF_SETPOSITION(0, (int11 + int12), 1, 0, comp(820, 10));  // lobbyscreen_popup:text
    } else {
        IF_SETPOSITION(0, 0, 1, 0, comp(820, 10));  // lobbyscreen_popup:text
        IF_SETHIDE(true, comp(820, 6));  // lobbyscreen_popup:spinner
        IF_SETHIDE(true, comp(820, 9));  // lobbyscreen_popup:static_graphic
    };
    var int20 = PARAHEIGHT(string1, int18, 30 as fontmetrics);
    int19 = (int19 + (int20 * int17));
    IF_SETSIZE(int10, (int20 * int17), 1, 0, comp(820, 10));  // lobbyscreen_popup:text
    int18 = MAX(int18, PARAWIDTH(string0, int5, IF_GETFONTMETRICS(comp(820, 28))));  // lobbyscreen_popup:title
    int19 = (int19 + int4);
    int18 = (int18 + int3);
    IF_SETSIZE(int18, int19, 0, 0, comp(820, 2));  // lobbyscreen_popup:window
    IF_SETSIZE(124, 76, 1, 0, comp(820, 25));  // lobbyscreen_popup:title_bar_tile
    IF_SETTEXT(string0, comp(820, 28));  // lobbyscreen_popup:title
    IF_SETTEXT(string1, comp(820, 10));  // lobbyscreen_popup:text
    IF_SETONKEY(callback(script3100, -2147483640), comp(906, 151));  // lobbyscreen:popup
    IF_SETHIDE(false, comp(906, 151));  // lobbyscreen:popup
    return;
}