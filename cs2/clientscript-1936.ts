//
function script1936(int0: number): void {
    if ((int0 >= 0)) {
        IF_SETONTIMER(callback(script1935, (int0 - 1)), comp(267, 59));  // qps:info_panel_close
        return;
    };
    if ((IF_GETWIDTH(comp(267, 43)) > 1)) {  // qps:info_panel
        IF_SETSIZE(1, 0, 0, 1, comp(267, 43));  // qps:info_panel
    };
    IF_SETONTIMER(callback(), comp(267, 59));  // qps:info_panel_close
    IF_SETHIDE(true, comp(267, 43));  // qps:info_panel
    CC_DELETEALL(comp(267, 57));  // qps:info_panel_build
    CC_DELETEALL(comp(267, 58));  // qps:info_panel_click
    if ((varbitplayer_42072 == 1)) {
        IF_SETSIZE((84 + (180 * 6)), 0, 0, 1, comp(267, 55));  // qps:tab2_track_layer_build
        IF_SETSIZE((84 + (180 * 6)), 0, 0, 1, comp(267, 56));  // qps:tab2_track_layer_click
        IF_SETSCROLLSIZE((84 + (180 * 6)), 0, comp(267, 53));  // qps:tab2_track_layer
        script1706(17498164, 17498165, IF_GETSCROLLX(comp(267, 53)));  // qps:tab2_track_layer
    };
    return;
}