//
function script6308(int0: number): void {
    var int1 = ((IF_GETWIDTH(comp(1587, 0)) - 800) - 16);  // whop:mainmodal_window
    IF_SETPOSITION(0, 30, 0, 0, comp(1587, 18));  // whop:title_seperator
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 20));  // whop:title_favourite_seperator
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 28));  // whop:title_world_seperator
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 36));  // whop:title_players_seperator
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 44));  // whop:title_activity_seperator
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 52));  // whop:title_location_seperator
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 60));  // whop:title_type_seperator
    IF_SETSIZE(2, 32, 0, 1, comp(1587, 68));  // whop:title_loot_seperator
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 22));  // whop:title_world_container
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 30));  // whop:title_players_container
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 38));  // whop:title_activity_container
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 46));  // whop:title_location_container
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 54));  // whop:title_type_container
    IF_SETSIZE(0, 30, 1, 0, comp(1587, 62));  // whop:title_loot_container
    IF_SETSIZE((240 + int1), 0, 0, 1, comp(1587, 45));  // whop:title_location
    IF_SETPOSITION((655 + int1), 0, 0, 0, comp(1587, 53));  // whop:title_type
    IF_SETPOSITION((736 + int1), 0, 0, 0, comp(1587, 61));  // whop:title_loot
    IF_SETSIZE(20, 74, 0, 1, int0);
    if ((script6431() == 1)) {
        IF_SETSIZE(0, 450, 1, 0, comp(1587, 0));  // whop:mainmodal_window
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(1587, 0));  // whop:mainmodal_window
    };
    return;
}