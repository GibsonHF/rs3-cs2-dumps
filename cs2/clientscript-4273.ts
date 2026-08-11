//
function script4273(): void {
    IF_SETHIDE(true, comp(1083, 93));  // lunarfm_rewards_new:spells_list
    IF_SETHIDE(true, comp(1083, 94));  // lunarfm_rewards_new:wishes_list
    IF_SETHIDE(false, comp(1083, 95));  // lunarfm_rewards_new:task_list
    IF_SETHIDE(true, comp(1083, 90));  // lunarfm_rewards_new:gold_frame_list
    IF_SETHIDE(true, comp(1083, 91));  // lunarfm_rewards_new:gold_frame_desc
    IF_SETHIDE(false, comp(1083, 92));  // lunarfm_rewards_new:gold_frame_tasks
    IF_SETHIDE(true, comp(1083, 219));  // lunarfm_rewards_new:spells_button_selected_layer
    IF_SETHIDE(true, comp(1083, 227));  // lunarfm_rewards_new:wishes_button_selected_layer
    IF_SETHIDE(false, comp(1083, 235));  // lunarfm_rewards_new:xp_button_selected_layer
    IF_SETHIDE(true, comp(1083, 96));  // lunarfm_rewards_new:breakdown_layer
    IF_SETTEXT(inttostring((2 * 10), 10), comp(1083, 107));  // lunarfm_rewards_new:points_1
    if ((STAT_BASE(6 as stat) < 83)) {
        IF_SETTEXT(`${inttostring(((2 / 2) * 10), 10)} (halved)`, comp(1083, 108));  // lunarfm_rewards_new:points_2
    } else {
        IF_SETTEXT(inttostring((2 * 10), 10), comp(1083, 108));  // lunarfm_rewards_new:points_2
    };
    if ((STAT_BASE(6 as stat) < 80)) {
        IF_SETTEXT(`${inttostring(((12 / 2) * 10), 10)} (halved)`, comp(1083, 109));  // lunarfm_rewards_new:points_3
    } else {
        IF_SETTEXT(inttostring((12 * 10), 10), comp(1083, 109));  // lunarfm_rewards_new:points_3
    };
    if ((STAT_BASE(6 as stat) < 86)) {
        IF_SETTEXT(`${inttostring(((2 / 2) * 10), 10)} (halved)`, comp(1083, 110));  // lunarfm_rewards_new:points_4
    } else {
        IF_SETTEXT(inttostring((2 * 10), 10), comp(1083, 110));  // lunarfm_rewards_new:points_4
    };
    IF_SETTEXT(inttostring((10 * 10), 10), comp(1083, 111));  // lunarfm_rewards_new:points_5
    IF_SETTEXT("Magic and Farming", comp(1083, 112));  // lunarfm_rewards_new:xp_1
    if ((STAT_BASE(6 as stat) < 83)) {
        IF_SETTEXT("Farming (no Magic)", comp(1083, 113));  // lunarfm_rewards_new:xp_2
    } else {
        IF_SETTEXT("Magic and Farming", comp(1083, 113));  // lunarfm_rewards_new:xp_2
    };
    if ((STAT_BASE(6 as stat) < 80)) {
        IF_SETTEXT("Crafting (no Magic)", comp(1083, 114));  // lunarfm_rewards_new:xp_3
    } else {
        IF_SETTEXT("Magic and Crafting", comp(1083, 114));  // lunarfm_rewards_new:xp_3
    };
    if ((STAT_BASE(6 as stat) < 86)) {
        IF_SETTEXT("Construction (no Magic)", comp(1083, 115));  // lunarfm_rewards_new:xp_4
    } else {
        IF_SETTEXT("Magic and Construction", comp(1083, 115));  // lunarfm_rewards_new:xp_4
    };
    IF_SETTEXT("Agility", comp(1083, 116));  // lunarfm_rewards_new:xp_5
    return;
}