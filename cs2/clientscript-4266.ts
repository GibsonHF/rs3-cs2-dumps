//
function script4266(): void {
    script4267();
    script4274();
    IF_SETTEXT("", comp(1083, 136));  // lunarfm_rewards_new:name
    IF_SETTEXT("Select a reward for more information.", comp(1083, 138));  // lunarfm_rewards_new:description
    IF_SETTEXT("", comp(1083, 140));  // lunarfm_rewards_new:extra_info
    IF_SETHIDE(true, comp(1083, 141));  // lunarfm_rewards_new:spell_icon_layer
    IF_SETHIDE(true, comp(1083, 95));  // lunarfm_rewards_new:task_list
    IF_SETHIDE(true, comp(1083, 92));  // lunarfm_rewards_new:gold_frame_tasks
    IF_SETHIDE(false, comp(1083, 90));  // lunarfm_rewards_new:gold_frame_list
    IF_SETHIDE(false, comp(1083, 91));  // lunarfm_rewards_new:gold_frame_desc
    IF_SETHIDE(false, comp(1083, 96));  // lunarfm_rewards_new:breakdown_layer
    if ((varbitplayer_16374 < 11)) {
        script4270();
        IF_SETTEXT("Spells", comp(1083, 136));  // lunarfm_rewards_new:name
    } else {
        script4272();
        IF_SETTEXT("Wishes", comp(1083, 136));  // lunarfm_rewards_new:name
    };
    return;
}