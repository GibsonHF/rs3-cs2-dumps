//
function script6308(int0: number): void {
    var int1 = ((IF_GETWIDTH(comp(1587, 0)) - 800) - 16);  // whop:mainmodal_window
    IF_SETPOSITION(0, 30, 0, 0, comp(1587, 18));  // whop:title_world_container
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 20));  // whop:button_sort_world
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 28));  // whop:com_28
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 36));  // whop:com_36
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 44));  // whop:com_44
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 52));  // whop:com_52
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 60));  // whop:com_60
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 68));  // whop:refresh_build
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 22));  // whop:build_world
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 30));  // whop:click_players
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 38));  // whop:click_activity
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 46));  // whop:click_location
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 54));  // whop:click_type
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 62));  // whop:click_loot
    IF_SETSIZE((240 + int1), 0, 0, 1, comp(1587, 45));  // whop:build_location
    IF_SETPOSITION((655 + int1), 0, 0, 0, comp(1587, 53));  // whop:build_type
    IF_SETPOSITION((736 + int1), 0, 0, 0, comp(1587, 61));  // whop:build_loot
    IF_SETSIZE(20, 74, 0, 1, int0);
    if ((script6431() == 1)) {
        IF_SETSIZE(0, 450, 1, 0, comp(1587, 0));  // whop:mainmodal_window
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(1587, 0));  // whop:mainmodal_window
    };
    return;
}