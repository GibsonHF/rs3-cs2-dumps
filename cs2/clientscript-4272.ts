//
function script4272(): void {
    IF_SETHIDE(true, comp(1083, 93));  // lunarfm_rewards_new:spells_list
    IF_SETHIDE(false, comp(1083, 94));  // lunarfm_rewards_new:wishes_list
    IF_SETHIDE(true, comp(1083, 219));  // lunarfm_rewards_new:spells_button_selected_layer
    IF_SETHIDE(false, comp(1083, 227));  // lunarfm_rewards_new:wishes_button_selected_layer
    IF_SETHIDE(true, comp(1083, 235));  // lunarfm_rewards_new:xp_button_selected_layer
    IF_SETTEXT("Wishes", comp(1083, 136));  // lunarfm_rewards_new:name
    script13741(1);
    IF_SETTEXT("Select a reward for more information.", comp(1083, 138));  // lunarfm_rewards_new:description
    IF_SETTEXT("", comp(1083, 140));  // lunarfm_rewards_new:extra_info
    IF_SETHIDE(true, comp(1083, 141));  // lunarfm_rewards_new:spell_icon_layer
    script2699();
    IF_SETHIDE(true, comp(1083, 95));  // lunarfm_rewards_new:task_list
    IF_SETHIDE(true, comp(1083, 92));  // lunarfm_rewards_new:gold_frame_tasks
    IF_SETHIDE(false, comp(1083, 90));  // lunarfm_rewards_new:gold_frame_list
    IF_SETHIDE(false, comp(1083, 91));  // lunarfm_rewards_new:gold_frame_desc
    IF_SETHIDE(false, comp(1083, 96));  // lunarfm_rewards_new:breakdown_layer
    return;
}