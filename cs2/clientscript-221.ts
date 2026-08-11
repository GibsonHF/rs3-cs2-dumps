//
function script221(): void {
    if ((strcmp(varclient_2578, "") == 0)) {
        script15197();
        return;
    };
    varclient_790 = 3;
    IF_SETHIDE(true, comp(594, 1));  // snapshot_main_v2:name_list_layer
    IF_SETHIDE(true, comp(594, 80));  // snapshot_main_v2:namelist_help_layer
    IF_SETHIDE(true, comp(594, 88));  // snapshot_main_v2:offence_help_layer
    IF_SETHIDE(true, comp(594, 95));  // snapshot_main_v2:ignore_help_layer
    IF_SETHIDE(true, comp(594, 28));  // snapshot_main_v2:offence_layer
    IF_SETHIDE(false, comp(594, 70));  // snapshot_main_v2:ignore_layer
    IF_SETTEXT(`Ignore ${varclient_2578}?`, comp(594, 76));  // snapshot_main_v2:ignore_player_name_txt
    return;
}