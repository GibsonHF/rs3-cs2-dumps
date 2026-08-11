//[proc,login_resize]
function script3230(): void {
    var int0 = IF_GETWIDTH(comp(744, 0));  // loginscreen:base
    var int1 = IF_GETHEIGHT(comp(744, 0));  // loginscreen:base
    var int2 = SCALE(int0, 16, 9);
    var int3 = int0;
    if ((int2 < int1)) {
        int2 = int1;
        int3 = SCALE(int1, 9, 16);
    };
    IF_SETSIZE(int3, int2, 0, 0, comp(744, 3));  // loginscreen:backgrounds
    IF_SETPOSITION(0, 0, 1, 1, comp(744, 3));  // loginscreen:backgrounds
    IF_SETPOSITION(0, 0, 0, 0, comp(744, 5));  // loginscreen:nxt_background_graphic_0
    IF_SETPOSITION(IF_GETWIDTH(comp(744, 5) /*loginscreen:nxt_background_graphic_0*/), 0, 0, 0, comp(744, 6) /*loginscreen:nxt_background_graphic_1*/);
    IF_SETPOSITION((IF_GETWIDTH(comp(744, 5) /*loginscreen:nxt_background_graphic_0*/) + IF_GETWIDTH(comp(744, 6) /*loginscreen:nxt_background_graphic_1*/)), 0, 0, 0, comp(744, 7) /*loginscreen:nxt_background_graphic_2*/);
    var int4 = IF_GETHEIGHT(comp(744, 5));  // loginscreen:nxt_background_graphic_0
    IF_SETPOSITION(0, int4, 0, 0, comp(744, 8));  // loginscreen:nxt_background_graphic_3
    IF_SETPOSITION(IF_GETWIDTH(comp(744, 8) /*loginscreen:nxt_background_graphic_3*/), int4, 0, 0, comp(744, 9) /*loginscreen:nxt_background_graphic_4*/);
    IF_SETPOSITION((IF_GETWIDTH(comp(744, 8) /*loginscreen:nxt_background_graphic_3*/) + IF_GETWIDTH(comp(744, 9) /*loginscreen:nxt_background_graphic_4*/)), int4, 0, 0, comp(744, 10) /*loginscreen:nxt_background_graphic_5*/);
    int4 = (IF_GETY(comp(744, 8)) + IF_GETHEIGHT(comp(744, 8)));  // loginscreen:nxt_background_graphic_3
    IF_SETPOSITION(0, int4, 0, 0, comp(744, 11));  // loginscreen:nxt_background_graphic_6
    IF_SETPOSITION(IF_GETWIDTH(comp(744, 11) /*loginscreen:nxt_background_graphic_6*/), int4, 0, 0, comp(744, 12) /*loginscreen:nxt_background_graphic_7*/);
    IF_SETPOSITION((IF_GETWIDTH(comp(744, 11) /*loginscreen:nxt_background_graphic_6*/) + IF_GETWIDTH(comp(744, 12) /*loginscreen:nxt_background_graphic_7*/)), int4, 0, 0, comp(744, 13) /*loginscreen:nxt_background_graphic_8*/);
    if ((script6431() == 0)) {
        IF_SETSIZE(300, 36, 0, 0, comp(744, 185));  // loginscreen:other
        IF_SETSIZE(23, 40, 1, 1, comp(744, 83));  // loginscreen:single_sign_on
        IF_SETPOSITION(6, 40, 2, 0, comp(744, 83));  // loginscreen:single_sign_on
        IF_SETPOSITION(0, 0, 0, 0, comp(744, 84));  // loginscreen:sso_welcome_text
        IF_SETPOSITION(0, 50, 0, 0, comp(744, 85));  // loginscreen:sso_name
        IF_SETPOSITION(0, 155, 1, 0, comp(744, 86));  // loginscreen:sso_play_button
        IF_SETSIZE(232, 36, 0, 0, comp(744, 89));  // loginscreen:login
        IF_SETPOSITION(0, 296, 1, 0, comp(744, 89));  // loginscreen:login
        IF_SETSIZE(23, 36, 1, 1, comp(744, 62));  // loginscreen:oauth2_layer
        IF_SETPOSITION(6, 30, 2, 0, comp(744, 62));  // loginscreen:oauth2_layer
        IF_SETSIZE(0, 20, 1, 1, comp(744, 147));  // loginscreen:auth_input_group_graphics
        IF_SETPOSITION(0, 0, 1, 1, comp(744, 147));  // loginscreen:auth_input_group_graphics
        IF_SETSIZE(300, 36, 0, 0, comp(744, 171));  // loginscreen:com_171
        IF_SETPOSITION(0, 10, 1, 2, comp(744, 171));  // loginscreen:com_171
        IF_SETSIZE(0, 20, 1, 1, comp(744, 172));  // loginscreen:login_progress_popup_username_text
        IF_SETPOSITION(0, 0, 1, 1, comp(744, 172));  // loginscreen:login_progress_popup_username_text
    } else {
        IF_SETSIZE(100, 36, 1, 0, comp(744, 185));  // loginscreen:other
        IF_SETSIZE(23, 130, 1, 1, comp(744, 83));  // loginscreen:single_sign_on
        IF_SETPOSITION(6, 130, 2, 0, comp(744, 83));  // loginscreen:single_sign_on
        IF_SETPOSITION(0, 50, 0, 0, comp(744, 84));  // loginscreen:sso_welcome_text
        IF_SETPOSITION(0, 75, 0, 0, comp(744, 85));  // loginscreen:sso_name
        IF_SETPOSITION(0, 135, 1, 0, comp(744, 86));  // loginscreen:sso_play_button
        IF_SETSIZE(232, 36, 0, 0, comp(744, 89));  // loginscreen:login
        IF_SETPOSITION(0, 204, 1, 0, comp(744, 89));  // loginscreen:login
        IF_SETSIZE(23, 130, 1, 1, comp(744, 147));  // loginscreen:auth_input_group_graphics
        IF_SETPOSITION(6, 130, 1, 0, comp(744, 147));  // loginscreen:auth_input_group_graphics
        IF_SETSIZE(80, 36, 1, 0, comp(744, 171));  // loginscreen:com_171
        IF_SETPOSITION(40, 10, 0, 2, comp(744, 171));  // loginscreen:com_171
        IF_SETSIZE(23, 130, 1, 1, comp(744, 172));  // loginscreen:login_progress_popup_username_text
        IF_SETPOSITION(6, 130, 1, 0, comp(744, 172));  // loginscreen:login_progress_popup_username_text
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    [int5, int6, int7, int8] = script2956();
    IF_SETSIZE((int5 + 264), 0, 0, 1, comp(744, 211));  // loginscreen:mobile_settings_spacing
    IF_SETPOSITION((int5 + 40), 15, 0, 2, comp(744, 358));  // loginscreen:infobox_layer
    return;
}