//
function script18774(int0: number): void {
    var int1 = -1;
    IF_SETTRANS(int0, comp(764, 3));  // combatv2_channel_bar:title_text
    IF_SETTRANS(int0, comp(764, 5));  // combatv2_channel_bar:duration_text
    IF_SETTRANS(int0, comp(764, 14));  // combatv2_channel_bar:bar_graphic
    IF_SETTRANS(int0, comp(764, 17));  // combatv2_channel_bar:bar_left_end_graphic
    IF_SETTRANS(int0, comp(764, 20));  // combatv2_channel_bar:bar_right_end_graphic
    IF_SETTRANS(int0, comp(764, 18));  // combatv2_channel_bar:bar_right_end_indicator_graphic
    int1 = -1;
    int1 = (int1 + 1);
    while ((int1 < IF_GETNEXTSUBID(comp(764, 13)))) {  // combatv2_channel_bar:bar_mask_marker_layer
        if ((CC_FIND(comp(764, 13), int1) == 1)) {  // combatv2_channel_bar:bar_mask_marker_layer
            CC_SETTRANS(int0);
        };
    };
    int1 = -1;
    int1 = (int1 + 1);
    while ((int1 < IF_GETNEXTSUBID(comp(764, 1)))) {  // combatv2_channel_bar:background_layer
        if ((CC_FIND(comp(764, 1), int1) == 1)) {  // combatv2_channel_bar:background_layer
            CC_SETTRANS(MIN((int0 + 224), 255));
        };
    };
    IF_SETTRANS(int0, comp(764, 21));  // combatv2_channel_bar:bar_background_left_top_graphic
    IF_SETTRANS(int0, comp(764, 22));  // combatv2_channel_bar:bar_background_left_bottom_graphic
    IF_SETTRANS(int0, comp(764, 23));  // combatv2_channel_bar:bar_background_left_graphic
    IF_SETTRANS(int0, comp(764, 24));  // combatv2_channel_bar:bar_background_top_graphic
    IF_SETTRANS(int0, comp(764, 25));  // combatv2_channel_bar:bar_background_graphic
    IF_SETTRANS(int0, comp(764, 26));  // combatv2_channel_bar:bar_background_bottom_graphic
    IF_SETTRANS(int0, comp(764, 27));  // combatv2_channel_bar:bar_background_right_top_graphic
    IF_SETTRANS(int0, comp(764, 28));  // combatv2_channel_bar:bar_background_right_graphic
    IF_SETTRANS(int0, comp(764, 29));  // combatv2_channel_bar:bar_background_right_bottom_graphic
    IF_SETTRANS(int0, comp(764, 30));  // combatv2_channel_bar:bar_frame_left_top_graphic
    IF_SETTRANS(int0, comp(764, 31));  // combatv2_channel_bar:bar_frame_left_bottom_graphic
    IF_SETTRANS(int0, comp(764, 32));  // combatv2_channel_bar:bar_frame_left_graphic
    IF_SETTRANS(int0, comp(764, 33));  // combatv2_channel_bar:bar_frame_top_graphic
    IF_SETTRANS(int0, comp(764, 34));  // combatv2_channel_bar:bar_frame_bottom_graphic
    IF_SETTRANS(int0, comp(764, 35));  // combatv2_channel_bar:bar_frame_right_top_graphic
    IF_SETTRANS(int0, comp(764, 36));  // combatv2_channel_bar:bar_frame_right_graphic
    IF_SETTRANS(int0, comp(764, 37));  // combatv2_channel_bar:bar_frame_right_bottom_graphic
    return;
}