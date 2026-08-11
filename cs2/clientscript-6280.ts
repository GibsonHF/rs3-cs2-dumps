//
function script6280(int0: number): void {
    IF_SETHIDE(true, comp(1297, 239));  // cruc_rewards:jingles_layer
    IF_SETHIDE(true, comp(1297, 238));  // cruc_rewards:titles_layer
    IF_SETHIDE(true, comp(1297, 237));  // cruc_rewards:extra_layer
    IF_SETHIDE(true, comp(1297, 241));  // cruc_rewards:titles_scroll_layer
    IF_SETHIDE(true, comp(1297, 240));  // cruc_rewards:jingles_scroll_layer
    IF_SETHIDE(true, comp(1297, 270));  // cruc_rewards:jingles_selected
    IF_SETHIDE(true, comp(1297, 263));  // cruc_rewards:titles_selected
    IF_SETHIDE(true, comp(1297, 256));  // cruc_rewards:extra_selected
    if ((int0 == 1)) {
        IF_SETTEXT("Taunt", comp(1297, 124));  // cruc_rewards:reward_title
        IF_SETHIDE(false, comp(1297, 239));  // cruc_rewards:jingles_layer
        IF_SETHIDE(false, comp(1297, 240));  // cruc_rewards:jingles_scroll_layer
        IF_SETHIDE(false, comp(1297, 270));  // cruc_rewards:jingles_selected
    } else if ((int0 == 2)) {
        IF_SETTEXT("Title", comp(1297, 124));  // cruc_rewards:reward_title
        IF_SETHIDE(false, comp(1297, 238));  // cruc_rewards:titles_layer
        IF_SETHIDE(false, comp(1297, 241));  // cruc_rewards:titles_scroll_layer
        IF_SETHIDE(false, comp(1297, 263));  // cruc_rewards:titles_selected
    } else {
        IF_SETTEXT("Reward", comp(1297, 124));  // cruc_rewards:reward_title
        IF_SETHIDE(false, comp(1297, 237));  // cruc_rewards:extra_layer
        IF_SETHIDE(false, comp(1297, 256));  // cruc_rewards:extra_selected
    };
    return;
}