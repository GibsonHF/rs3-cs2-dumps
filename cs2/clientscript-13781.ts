//
function script13781(): void {
    IF_SETTEXT(`Current co-op points: ${inttostring(varbitplayer_520, 10)}`, comp(1308, 895));  // ss_rework:current_points_title
    IF_SETHIDE(true, comp(1308, 44));  // ss_rework:buy_window
    IF_SETHIDE(true, comp(1308, 264));  // ss_rework:learn_window
    IF_SETHIDE(true, comp(1308, 543));  // ss_rework:assignment_window
    IF_SETHIDE(false, comp(1308, 683));  // ss_rework:coop_window
    IF_SETHIDE(true, comp(1308, 35));  // ss_rework:buy_button_selected_layer
    IF_SETHIDE(true, comp(1308, 26));  // ss_rework:learn_button_selected_layer
    IF_SETHIDE(true, comp(1308, 17));  // ss_rework:assignment_button_selected_layer
    IF_SETHIDE(false, comp(1308, 8));  // ss_rework:coop_button_selected_layer
    IF_SETHIDE(false, comp(1308, 896));  // ss_rework:scrollbar
    script7791(85721984, 85721771);
    return;
}