//
function script13657(): void {
    script10416(124452917, 124452918, "", "", "", varbitplayer_37573);
    script10416(124452919, 124452920, "", "", "", varbitplayer_37574);
    script10416(124452921, 124452922, "", "", "", varbitplayer_37575);
    script10416(124452923, 124452924, "", "", "", varbitplayer_37576);
    IF_SETTEXT(`${script15207(varbitplayer_37578, 2)} / ${inttostring(50, 10)}`, comp(1899, 100));  // invent_auto_siphon:normal_siphon_amount_label
    IF_SETTEXT(`${script15207(varbitplayer_37579, 2)} / ${inttostring(50, 10)}`, comp(1899, 103));  // invent_auto_siphon:crystal_tool_siphon_amount_label
    IF_SETOPCURSOR(1, 46, comp(1899, 79));  // invent_auto_siphon:crystal_tool_siphon_minus_all_button_click
    IF_SETOPCURSOR(1, 46, comp(1899, 84));  // invent_auto_siphon:crystal_tool_siphon_minus_one_button_click
    IF_SETOPCURSOR(1, 46, comp(1899, 95));  // invent_auto_siphon:crystal_tool_siphon_plus_all_button_click
    IF_SETOPCURSOR(1, 46, comp(1899, 90));  // invent_auto_siphon:crystal_tool_siphon_plus_one_button_click
    IF_SETOPCURSOR(1, 46, comp(1899, 66));  // invent_auto_siphon:normal_siphon_minus_all_button_click
    IF_SETOPCURSOR(1, 46, comp(1899, 70));  // invent_auto_siphon:normal_siphon_minus_one_button_click
    IF_SETOPCURSOR(1, 46, comp(1899, 62));  // invent_auto_siphon:normal_siphon_plus_all_button_click
    IF_SETOPCURSOR(1, 46, comp(1899, 74));  // invent_auto_siphon:normal_siphon_plus_one_button_click
    IF_SETOPCURSOR(1, 46, comp(1899, 102));  // invent_auto_siphon:crystal_tool_siphon_amount_button_click
    IF_SETOPCURSOR(1, 46, comp(1899, 99));  // invent_auto_siphon:normal_siphon_amount_button_click
    return;
}