//
function script220(): void {
    script217();
    if ((strcmp(varclient_2578, "") == 0)) {
        IF_SETTEXT("No Player Selected", comp(594, 24));  // snapshot_main_v2:selected_name
        script12724("You need to select a player to report!", 0, 1);
        return;
    };
    if ((strcmp(varclient_4669, varclient_2578) != 0)) {
        script13994(38928433, 38928434, 28556, "Offensive examine<br>information", 1);
        script13994(38928441, 38928442, 28556, "Offensive clan name", 1);
        script13994(38928443, 38928444, 28556, "Offensive group name", 1);
    };
    varclient_790 = 2;
    IF_SETHIDE(true, comp(594, 1));  // snapshot_main_v2:name_list_layer
    IF_SETHIDE(true, comp(594, 80));  // snapshot_main_v2:namelist_help_layer
    IF_SETHIDE(true, comp(594, 88));  // snapshot_main_v2:offence_help_layer
    IF_SETHIDE(true, comp(594, 95));  // snapshot_main_v2:ignore_help_layer
    IF_SETHIDE(false, comp(594, 28));  // snapshot_main_v2:offence_layer
    IF_SETHIDE(true, comp(594, 70));  // snapshot_main_v2:ignore_layer
    IF_SETSCROLLSIZE(IF_GETWIDTH(comp(594, 40)), 195, comp(594, 40));  // snapshot_main_v2:offence_scroll_layer
    script31(38928423, 38928424, -1, -1, -1, -1, -1, -1);
    return;
}