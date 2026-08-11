//
function script5835(int0: number): void {
    if ((IF_GETHIDE(comp(1043, 27)) == false)) {  // 6awe3_rewards:confirm_layer
        return;
    };
    IF_SETHIDE(true, comp(1043, 22));  // 6awe3_rewards:skills_content
    IF_SETHIDE(true, comp(1043, 43));  // 6awe3_rewards:skills_tab_selected_layer
    IF_SETHIDE(true, comp(1043, 25));  // 6awe3_rewards:other_content
    IF_SETHIDE(true, comp(1043, 50));  // 6awe3_rewards:other_tab_selected_layer
    IF_SETHIDE(false, comp(1043, 19));  // 6awe3_rewards:background
    if ((int0 == 0)) {
        IF_SETHIDE(false, comp(1043, 22));  // 6awe3_rewards:skills_content
        IF_SETHIDE(false, comp(1043, 43));  // 6awe3_rewards:skills_tab_selected_layer
        IF_SETHIDE(true, comp(1043, 19));  // 6awe3_rewards:background
    } else if (((int0 == 1) || (int0 == 2))) {
        IF_SETHIDE(false, comp(1043, 25));  // 6awe3_rewards:other_content
        IF_SETHIDE(false, comp(1043, 50));  // 6awe3_rewards:other_tab_selected_layer
    };
    return;
}