//
function script4004(int0: number): void {
    if ((OC_CATEGORY(int0) == 4463 as category)) {
        IF_SETHIDE(true, comp(1263, 3));  // xp_reward:titlebox
        IF_SETHIDE(false, comp(1263, 5));  // xp_reward:xp_type_choice
        IF_SETTEXT(`(+${inttostring(item_getparam(int0, 4810), 10)}%)`, comp(1263, 12));  // xp_reward:xp_type_2_modifier
    } else {
        IF_SETHIDE(false, comp(1263, 3));  // xp_reward:titlebox
        IF_SETHIDE(true, comp(1263, 5));  // xp_reward:xp_type_choice
    };
    return;
}