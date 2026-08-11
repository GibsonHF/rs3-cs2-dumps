//
function script13831(int0: number): void {
    var int1 = script6431();
    if ((int1 == 1)) {
        IF_SETNOCLICKTHROUGH(1, comp(1477, 808));  // toplevel_v2:escape_menu_content
        IF_SETSIZE(0, 0, 1, 1, comp(274, 0));  // escape_menu_mobile:root
        IF_SETOP(1, "", comp(1477, 809));  // toplevel_v2:escape_menu_close_button
        if ((IF_FIND(comp(274, 0)) == 1)) {  // escape_menu_mobile:root
            stack(9537);
            unk11040("");
            CC_CALLONRESIZE();
        };
        if ((script248() == 1)) {
            IF_SETHIDE(true, comp(274, 15));  // escape_menu_mobile:bonds_layer
            IF_SETHIDE(true, comp(274, 25));  // escape_menu_mobile:runecoins_layer
        };
    } else {
        IF_SETNOCLICKTHROUGH(0, comp(1477, 808));  // toplevel_v2:escape_menu_content
        IF_SETOP(1, "", comp(1477, 809));  // toplevel_v2:escape_menu_close_button
        IF_SETSIZE(470, 234, 0, 0, comp(1433, 0));  // escape_menu:root
        IF_SETTEXTFONT(26 as fontmetrics, comp(1433, 4));  // escape_menu:parent_buttons_title
        IF_SETTEXTFONT(26 as fontmetrics, comp(1433, 23));  // escape_menu:quick_switch_text
        IF_SETTEXTFONT(26 as fontmetrics, comp(1433, 48));  // escape_menu:csat_text
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 1;
    var int5 = 1;
    if ((varbitplayer_38842 == 1)) {
        int5 = 0;
        int3 = 1;
    } else if ((varbitplayer_22875 == 1)) {
        IF_SETSIZE(0, 68, 1, 0, comp(1433, 3));  // escape_menu:parents_layer
        IF_SETSIZE(0, 40, 1, 0, comp(1433, 5));  // escape_menu:parents_scrolling
    } else {
        IF_SETSIZE(0, 63, 1, 0, comp(1433, 3));  // escape_menu:parents_layer
        IF_SETSIZE(0, 35, 1, 0, comp(1433, 5));  // escape_menu:parents_scrolling
    };
    var int6 = 1;
    var int7 = 0;
    if ((script15532(0) == 1)) {
        int2 = 1;
        int3 = 1;
        int5 = 1;
        int7 = 1;
        int4 = 0;
        int6 = 0;
    };
    var int8 = 0;
    var int9 = 5;
    var int10 = -1;
    if ((int1 == 0)) {
        int8 = script13832(93913091, int2, int8, int9);
        int8 = script13832(93913097, int4, int8, int9);
        if ((varbitplayer_22875 == 1)) {
            int8 = (int8 - 5);
        };
        int8 = script13832(93913102, 0, int8, int9);
        int8 = script13832(93913107, int3, int8, int9);
        int8 = script13832(93913119, int5, int8, int9);
        int8 = script13832(93913128, 0, int8, int9);
        int9 = 240;
        int8 = 0;
        int8 = script13832(93913135, 0, int8, int9);
        int8 = script13832(93913149, 0, int8, int9);
    };
    int8 = (int8 + 40);
    if ((int2 == 0)) {
        script13836(93913094, 93913095);
        IF_SETSIZE(220, 63, 0, 0, comp(1433, 3));  // escape_menu:parents_layer
    };
    if ((int3 == 0)) {
        if (((((varbitclient_19036 + varbitclient_19628) + varbitclient_31443) + varbitclient_31921) == 0)) {
            IF_SETHIDE(true, comp(1433, 23));  // escape_menu:quick_switch_text
            IF_SETHIDE(true, comp(1433, 24));  // escape_menu:static_dropdown_load
        } else {
            script2708(93913113, 93913114, 7711, -1, "Select a preset to load", 0, script6428(varbitplayer_1899, 1));
        };
    };
    script14043();
    script7136();
    script2935();
    if ((int0 == 1)) {
        IF_CLOSE();
    };
    return;
}