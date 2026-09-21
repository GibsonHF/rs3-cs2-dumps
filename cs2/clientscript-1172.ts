//[clientscript,loginscreen_load]
function script1172(): void {
    script15717();
    if ((script13749() == 1)) {
        varbitclient_43686 = 1;
        varbitplayer_22875 = 2;
        varbitclient_22876 = 2;
    } else {
        varbitclient_43686 = 1;
        varbitplayer_22875 = 0;
        varbitclient_22876 = 0;
    };
    script15247();
    script2593();
    if (((varclient_6799 == true) && (IF_CRMVIEW_INIT() == false))) {
        CAM2_REMOVEEFFECT(1);
        varclient_6799 = 0;
    };
    script14175();
    SETUP_MESSAGEBOX(0, 0, 4, 3, 135, 30, 3791, 3792, 6127, 16753152, 26);
    if (((varclient_3698 < 0) || (varclient_3698 > 1))) {
        varclient_3698 = 1;
    };
    if ((script13749() == 1)) {
        IF_SETONRESIZE(callback(script15677), comp(744, 26));  // loginscreen:login_screen
        script15678();
        IF_SETHIDE(false, comp(744, 1));  // loginscreen:close_button
        IF_SETONCLICK(callback(), comp(744, 136));  // loginscreen:login_button_small
    };
    IF_SETONRESIZE(callback(script3229), comp(744, 0));  // loginscreen:base
    script3230();
    varclient_6886 = 0;
    if ((varclient_1099 == -1)) {
        varclient_1099 = 0;
    };
    script9083();
    varclient_2577 = "";
    script15699();
    varclient_4192 = "";
    script15700();
    varclient_4193 = 0;
    varclient_6908 = -1;
    varclient_1100 = -1;
    if ((varclient_6406 == -1)) {
        varclient_6406 = 0;
    };
    if ((varclient_3681 == -1)) {
        varclient_3681 = 0;
    };
    script15706();
    VIDEO_ADVERT_FORCE_REMOVE();
    script15668(48758972);
    script51();
    script316();
    script53();
    varclient_547 = 0;
    varclient_1093 = 0;
    script1129();
    script4142(-1);
    if ((varclient_1701 == -1)) {
        varclient_1701 = 1;
    };
    script6720();
    script15694(48759028);
    if ((script6431() == 1)) {
        IF_SETHIDE(true, comp(744, 30));  // loginscreen:runescape_logo
        IF_SETHIDE(false, comp(744, 60));  // loginscreen:mobile_rs_logo
        IF_SETHIDE(false, comp(744, 40));  // loginscreen:mobile_background
        IF_SETHIDE(true, comp(744, 54));  // loginscreen:desktop_background
        IF_SETHIDE(false, comp(744, 205));  // loginscreen:mobile_settings
        IF_SETHIDE(true, comp(744, 221));  // loginscreen:desktop_settings
        IF_SETHIDE(false, comp(744, 31));  // loginscreen:mobile_settings_button_layer
        IF_SETHIDE(true, comp(744, 35));  // loginscreen:desktop_settings_button_layer
        IF_SETHIDE(false, comp(744, 347));  // loginscreen:language_dropdown
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(744, 29));  // loginscreen:left_hand_panel
        IF_SETSIZE(0, 0, 1, 1, comp(744, 39));  // loginscreen:right_hand_panel
        IF_SETPOSITION(0, 0, 0, 0, comp(744, 39));  // loginscreen:right_hand_panel
        IF_SETHIDE(true, comp(744, 60));  // loginscreen:mobile_rs_logo
        IF_SETHIDE(true, comp(744, 40));  // loginscreen:mobile_background
        IF_SETHIDE(false, comp(744, 54));  // loginscreen:desktop_background
        IF_SETPOSITION(10, 10, 2, 0, comp(744, 187));  // loginscreen:maindebug
        IF_SETSIZE(364, 392, 0, 0, comp(744, 52));  // loginscreen:right_hand_panel_center
        IF_SETPOSITION(0, 0, 1, 1, comp(744, 52));  // loginscreen:right_hand_panel_center
        IF_SETSIZE(0, 0, 1, 1, comp(744, 169));  // loginscreen:login_progress_popup
        IF_SETPOSITION(0, 0, 1, 1, comp(744, 169));  // loginscreen:login_progress_popup
        IF_SETPOSITION(0, 32, 1, 0, comp(744, 176));  // loginscreen:login_progress_wrapper
        IF_SETSIZE(40, 130, 1, 1, comp(744, 176));  // loginscreen:login_progress_wrapper
        IF_SETPOSITION(0, 20, 1, 2, comp(744, 181));  // loginscreen:login_progress_popup_cancel
        IF_SETPOSITION(0, 0, 0, 0, comp(744, 89));  // loginscreen:login
        IF_SETSIZE(0, 0, 1, 1, comp(744, 89));  // loginscreen:login
        IF_SETPOSITION(0, 20, 1, 2, comp(744, 142));  // loginscreen:create_free_acc_layer
        IF_SETSIZE(300, 36, 0, 0, comp(744, 142));  // loginscreen:create_free_acc_layer
        IF_SETPOSITION(0, 0, 1, 2, comp(744, 182));  // loginscreen:tnc_layer
        IF_SETSIZE(0, 70, 1, 0, comp(744, 182));  // loginscreen:tnc_layer
        IF_SETHIDE(false, comp(744, 183));  // loginscreen:tnc_background
        IF_SETHIDE(false, comp(744, 221));  // loginscreen:desktop_settings
        IF_SETHIDE(true, comp(744, 205));  // loginscreen:mobile_settings
        IF_SETHIDE(true, comp(744, 31));  // loginscreen:mobile_settings_button_layer
        IF_SETHIDE(false, comp(744, 35));  // loginscreen:desktop_settings_button_layer
        IF_SETHIDE(true, comp(744, 347));  // loginscreen:language_dropdown
    };
    varclient_6712 = 1;
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    [int0, int1, int2] = DATE_RUNEDAY_TODATE(DATE_RUNEDAY());
    if ((int1 == 11)) {
        CONSOLE_ENABLESNOW();
    } else if (((int1 == 0) && (int0 <= 10))) {
        CONSOLE_ENABLESNOW();
    };
    return;
}