//
function script468(): void {
    if ((unk10986(0) == 1)) {
        script10416(11665424, 11665425, "Show broadcasts to guests", "Hide broadcasts to guests", "Show broadcasts to guests", (1 - varbitclansettings_41364));
        if ((varbitclansettings_41363 == 0)) {
            IF_SETHIDE(true, comp(178, 8));  // clan_broadcasts:broadcast_vis_radio_1_deselected
            IF_SETHIDE(false, comp(178, 9));  // clan_broadcasts:broadcast_vis_radio_1_selected
            IF_SETHIDE(false, comp(178, 11));  // clan_broadcasts:broadcast_vis_radio_2_deselected
            IF_SETHIDE(true, comp(178, 12));  // clan_broadcasts:broadcast_vis_radio_2_selected
            IF_SETHIDE(false, comp(178, 14));  // clan_broadcasts:broadcast_vis_radio_3_deselected
            IF_SETHIDE(true, comp(178, 15));  // clan_broadcasts:broadcast_vis_radio_3_selected
        } else if ((varbitclansettings_41363 == 1)) {
            IF_SETHIDE(false, comp(178, 8));  // clan_broadcasts:broadcast_vis_radio_1_deselected
            IF_SETHIDE(true, comp(178, 9));  // clan_broadcasts:broadcast_vis_radio_1_selected
            IF_SETHIDE(true, comp(178, 11));  // clan_broadcasts:broadcast_vis_radio_2_deselected
            IF_SETHIDE(false, comp(178, 12));  // clan_broadcasts:broadcast_vis_radio_2_selected
            IF_SETHIDE(false, comp(178, 14));  // clan_broadcasts:broadcast_vis_radio_3_deselected
            IF_SETHIDE(true, comp(178, 15));  // clan_broadcasts:broadcast_vis_radio_3_selected
        } else {
            IF_SETHIDE(false, comp(178, 8));  // clan_broadcasts:broadcast_vis_radio_1_deselected
            IF_SETHIDE(true, comp(178, 9));  // clan_broadcasts:broadcast_vis_radio_1_selected
            IF_SETHIDE(false, comp(178, 11));  // clan_broadcasts:broadcast_vis_radio_2_deselected
            IF_SETHIDE(true, comp(178, 12));  // clan_broadcasts:broadcast_vis_radio_2_selected
            IF_SETHIDE(true, comp(178, 14));  // clan_broadcasts:broadcast_vis_radio_3_deselected
            IF_SETHIDE(false, comp(178, 15));  // clan_broadcasts:broadcast_vis_radio_3_selected
        };
    } else {
        printmessage("You're not in a clan so can't access this.");
        return;
    };
    return;
}