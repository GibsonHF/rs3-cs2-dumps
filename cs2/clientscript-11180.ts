//
function script11180(): void {
    if ((varbitclient_38847 == 0)) {
        IF_SETGRAPHIC(18674 as graphic, comp(1376, 7));  // mobile_settings_button:minimap_button
        IF_SETHIDE(false, comp(1376, 6));  // mobile_settings_button:bg_main
        IF_SETHIDE(false, comp(1376, 5));  // mobile_settings_button:corner_flair
        IF_SETSIZE(0, 0, 1, 1, comp(1376, 2));  // mobile_settings_button:blocking_layer
    } else {
        IF_SETGRAPHIC(18675 as graphic, comp(1376, 7));  // mobile_settings_button:minimap_button
        IF_SETHIDE(true, comp(1376, 6));  // mobile_settings_button:bg_main
        IF_SETHIDE(true, comp(1376, 5));  // mobile_settings_button:corner_flair
        IF_SETSIZE(50, 0, 0, 1, comp(1376, 2));  // mobile_settings_button:blocking_layer
    };
    return;
}