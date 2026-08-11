//[proc,graphics_options_init]
function script2595(int0: number): void {
    var int1 = script13749();
    IF_SETCOLOUR(script10495(0), comp(1513, 7));  // graphics_options_v2_client:manual_setup_title_text
    IF_SETCOLOUR(script10495(0), comp(1513, 13));  // graphics_options_v2_client:auto_setup_title_text
    IF_SETCOLOUR(script10495(0), comp(1513, 4));  // graphics_options_v2_client:screen_sizing_title_text
    IF_SETCOLOUR(script10495(0), comp(1513, 38));  // graphics_options_v2_client:advanced_title_text
    IF_SETCOLOUR(script10495(3), comp(1513, 39));  // graphics_options_v2_client:advanced_desc_text
    IF_SETCOLOUR(script10495(3), comp(1513, 5));  // graphics_options_v2_client:screen_sizing_desc_text
    IF_SETCOLOUR(script10495(3), comp(1513, 16));  // graphics_options_v2_client:auto_setup_desc_text
    IF_SETCOLOUR(script10495(3), comp(1513, 9));  // graphics_options_v2_client:messages
    switch (int0) {
        case 0:
        case 4: {
            if ((int1 == 0)) {
                IF_OPENSUBCLIENT(comp(882, 0), 1513);  // loginscreen_graphics_options:options_client_if
            } else {
                IF_OPENSUBCLIENT(comp(882, 0), 324);  // loginscreen_graphics_options:options_client_if
                script10410(21233667, -1, 2830, 0, 0, 280, 160, 0, 0, "");
                script9525(21233668, 1, -1);
                IF_SETCOLOUR(script10495(0), comp(324, 5));  // graphics_options_v2_client_mobile:auto_setup_title_text
            };
            if ((int0 == 4)) {
                IF_SETONCLICK(callback(script7926), comp(882, 12));  // loginscreen_graphics_options:mainmodal_window_close_button
            } else {
                IF_SETONRESIZE(callback(script2919, 1, int0), comp(744, 196));  // loginscreen:popup_content_layer
            };
            script8421(57802761, 57802763, 57802762, 57802764, "Graphics Options", 21218, -1, 1, -1, -1);
            if ((int0 == 4)) {
                IF_SETHIDE(false, comp(1420, 183));  // acc_create:graphics_options
            };
            break;
        }
        case 1: {
            if ((int1 == 0)) {
                IF_OPENSUBCLIENT(comp(742, 0), 1513);  // graphics_options:options
            } else {
                IF_OPENSUBCLIENT(comp(742, 0), 324);  // graphics_options:options
                script10410(21233667, -1, 2830, 0, 0, 280, 160, 0, 0, "");
                script9525(21233668, 1, -1);
                IF_SETCOLOUR(script10495(0), comp(324, 5));  // graphics_options_v2_client_mobile:auto_setup_title_text
            };
            break;
        }
        case 2: {
            if ((int1 == 0)) {
                IF_OPENSUBCLIENT(comp(911, 5), 1513);  // lobbyscreen_pane_options:options_client_if
                IF_SETHIDE(true, comp(911, 2));  // lobbyscreen_pane_options:title
                IF_SETPOSITION(0, 0, 1, 0, comp(911, 3));  // lobbyscreen_pane_options:audio_layer
                IF_SETSIZE(0, IF_GETHEIGHT(comp(911, 3) /*lobbyscreen_pane_options:audio_layer*/), 1, 1, comp(911, 5) /*lobbyscreen_pane_options:options_client_if*/);
                IF_SETSIZE(0, 0, 1, 1, comp(1513, 10));  // graphics_options_v2_client:main
            } else {
                IF_OPENSUBCLIENT(comp(911, 5), 324);  // lobbyscreen_pane_options:options_client_if
                IF_SETHIDE(false, comp(911, 2));  // lobbyscreen_pane_options:title
                IF_SETSIZE(0, (IF_GETY(comp(911, 3) /*lobbyscreen_pane_options:audio_layer*/) + IF_GETHEIGHT(comp(911, 3) /*lobbyscreen_pane_options:audio_layer*/)), 1, 1, comp(911, 5) /*lobbyscreen_pane_options:options_client_if*/);
            };
            script4041();
            break;
        }
    };
    script15590(int0);
    return;
}