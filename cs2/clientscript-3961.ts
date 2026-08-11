//
function script3961(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, string0: string, string1: string, string2: string, string3: string, string4: string): void {
    var int7 = comp(847, 0);  // modal_confirm:mainmodal_window
    var int8 = 55509019;
    var int9 = 55509022;
    var int10 = comp(847, 28);  // modal_confirm:mainmodal_window_content
    var int11 = comp(847, 8);  // modal_confirm:info_text
    var int12 = comp(847, 34);  // modal_confirm:info_layer
    var int13 = comp(847, 7);  // modal_confirm:info_scrollbar
    var int14 = comp(847, 6);  // modal_confirm:info_text_container
    var int15 = comp(847, 29);  // modal_confirm:dont_ask_again_layer
    var int16 = comp(847, 2);  // modal_confirm:dont_ask_again_text
    var int17 = comp(847, 26);  // modal_confirm:yes_button_text
    var int18 = comp(847, 17);  // modal_confirm:no_button_text
    var int19 = comp(847, 37);  // modal_confirm:yes_button_layer
    var int20 = comp(847, 35);  // modal_confirm:no_button_layer
    var int21 = comp(847, 1);  // modal_confirm:image_graphic
    var int22 = comp(847, 32);  // modal_confirm:image2_graphic
    var int23 = comp(847, 31);  // modal_confirm:image_layer
    var int24 = comp(847, 23);  // modal_confirm:yes_button_checked_active_layer
    var int25 = comp(847, 14);  // modal_confirm:no_button_checked_active_layer
    if ((int0 == 55574530)) {
        int7 = comp(848, 2);  // modal_confirm_overlay:mainmodal_window
        int8 = 55574554;
        int9 = 55574557;
        int10 = comp(848, 27);  // modal_confirm_overlay:mainmodal_window_content
        int11 = comp(848, 37);  // modal_confirm_overlay:info_text
        int12 = comp(848, 33);  // modal_confirm_overlay:info_layer
        int13 = comp(848, 34);  // modal_confirm_overlay:info_scrollbar
        int14 = comp(848, 7);  // modal_confirm_overlay:info_text_container
        int15 = comp(848, 28);  // modal_confirm_overlay:dont_ask_again_layer
        int16 = comp(848, 4);  // modal_confirm_overlay:dont_ask_again_text
        int17 = comp(848, 25);  // modal_confirm_overlay:yes_button_text
        int18 = comp(848, 16);  // modal_confirm_overlay:no_button_text
        int19 = comp(848, 36);  // modal_confirm_overlay:yes_button_layer
        int20 = comp(848, 35);  // modal_confirm_overlay:no_button_layer
        int21 = comp(848, 3);  // modal_confirm_overlay:image_graphic
        int23 = comp(848, 30);  // modal_confirm_overlay:image_layer
        int24 = comp(848, 22);  // modal_confirm_overlay:yes_button_checked_active_layer
        int25 = comp(848, 13);  // modal_confirm_overlay:no_button_checked_active_layer
        var int6 = 0;
    };
    if ((int1 != -1 as graphic)) {
        IF_SETGRAPHIC(int1, int21);
        IF_SETPOSITION(IF_GETX(int21), 0, 1, int5, int21);
        if ((int2 != -1 as graphic)) {
            IF_SETGRAPHIC(int2, int22);
            IF_SETPOSITION(IF_GETX(int22), 0, 1, int5, int22);
        };
        if (((int3 == 0) && (int4 == 0))) {
            [int3, int4] = IF_GETGRAPHICDIMENSIONS(int21);
        };
        IF_SETSIZE(((IF_GETWIDTH(int10) - int3) - 30), IF_GETHEIGHT(int12), 0, 0, int12);
        IF_SETSIZE(int3, int4, 0, 0, int23);
        IF_SETSIZE(int3, int4, 0, 0, int21);
        if ((int2 != -1 as graphic)) {
            IF_SETSIZE(int3, int4, 0, 0, int22);
        };
    } else {
        IF_SETSIZE((IF_GETWIDTH(int10) - 20), IF_GETHEIGHT(int12), 0, 0, int12);
    };
    var int26 = IF_GETWIDTH(int11);
    var int27 = MIN(200, (PARAHEIGHT(string1, int26, 27 as fontmetrics) * 13));
    IF_SETSIZE(IF_GETWIDTH(int14), int27, 0, 0, int14);
    IF_SETTEXT(string1, int11);
    int27 = (int27 + 10);
    if ((int27 < int4)) {
        int27 = int4;
    };
    IF_SETSIZE(IF_GETWIDTH(int12), int27, 0, 0, int12);
    IF_SETSIZE(IF_GETWIDTH(int23), int27, 0, 0, int23);
    int27 = (int27 + 20);
    if ((STRING_LENGTH(string4) > 0)) {
        IF_SETHIDE(false, int15);
        int27 = (int27 + 24);
        IF_SETTEXT(string4, int16);
    } else {
        IF_SETHIDE(true, int15);
    };
    IF_SETHIDE(true, int24);
    IF_SETHIDE(true, int25);
    script1191(int15, 0, 0);
    IF_SETTEXT(string2, int17);
    IF_SETTEXT(string3, int18);
    if ((STRING_LENGTH(string3) == 0)) {
        IF_SETHIDE(true, int20);
        IF_SETPOSITION(0, 10, 1, 2, int19);
    } else if ((STRING_LENGTH(string2) == 0)) {
        IF_SETHIDE(true, int19);
        IF_SETPOSITION(0, 10, 1, 2, int20);
    };
    int27 = (int27 + 37);
    script9554(int8, int9, int10, string0, 21218);
    IF_SETSIZE(IF_GETWIDTH(int7), (int27 + 45), 0, 0, int7);
    if ((IF_GETHEIGHT(int14) < 200)) {
        IF_SETSCROLLSIZE(0, 0, int14);
        IF_SETSCROLLPOS(0, 0, int14);
        IF_SETHIDE(true, int13);
    } else {
        IF_SETSIZE(28, 8, 1, 1, int14);
        IF_SETHIDE(false, int13);
        IF_SETSCROLLSIZE(0, ((PARAHEIGHT(string1, IF_GETWIDTH(int11), 27 as fontmetrics) * 13) + 10), int14);
        script7791(int13, int14);
    };
    if ((int6 != 0)) {
        script8841(int6, 1);
    };
    return;
}