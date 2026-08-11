//
function script9381(int0: number, int1: number): void {
    IF_SETPOSITION((4 + (int1 * 120)), 0, 0, 0, comp(702, 92));  // 6awe2_pvp_board:panel_tab_selected
    SOUND_VORBIS_VOLUME(36972 as vorbis, 1, 0, 120);
    switch (int1) {
        case 0:
        case 1: {
            IF_SETHIDE(false, comp(702, 83));  // 6awe2_pvp_board:panel_loading_overlay
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(702, 79));  // 6awe2_pvp_board:name_list_layer
            IF_SETHIDE(false, comp(702, 65));  // 6awe2_pvp_board:my_score_layer
            IF_SETHIDE(true, comp(702, 54));  // 6awe2_pvp_board:pvp_info_layer
            break;
        }
        case 3: {
            IF_SETHIDE(true, comp(702, 79));  // 6awe2_pvp_board:name_list_layer
            IF_SETHIDE(true, comp(702, 65));  // 6awe2_pvp_board:my_score_layer
            IF_SETHIDE(false, comp(702, 54));  // 6awe2_pvp_board:pvp_info_layer
            if ((varbitplayer_21122 == 0)) {
                IF_SETTEXT("Enable PvP", comp(702, 10));  // 6awe2_pvp_board:pvp_toggle_text
            } else {
                IF_SETTEXT("Disable PvP", comp(702, 10));  // 6awe2_pvp_board:pvp_toggle_text
            };
            break;
        }
    };
    return;
}