//
function script949(int0: number): void {
    IF_SETHIDE(script12585(int0), comp(933, 177));  // rand_dungeon_rewards_v2:skip_button
    IF_SETHIDE(int0, comp(933, 178));  // rand_dungeon_rewards_v2:leave_button
    IF_SETHIDE(int0, comp(933, 181));  // rand_dungeon_rewards_v2:ready_button
    if ((varclient_1198 == 1)) {
        IF_SETHIDE(int0, comp(933, 115));  // rand_dungeon_rewards_v2:readybutton_player1
        IF_SETHIDE(int0, comp(933, 116));  // rand_dungeon_rewards_v2:readyborder_player1
    };
    if ((varclient_1199 == 1)) {
        IF_SETHIDE(int0, comp(933, 127));  // rand_dungeon_rewards_v2:readybutton_player2
        IF_SETHIDE(int0, comp(933, 128));  // rand_dungeon_rewards_v2:readyborder_player2
    };
    if ((varclient_1200 == 1)) {
        IF_SETHIDE(int0, comp(933, 139));  // rand_dungeon_rewards_v2:readybutton_player3
        IF_SETHIDE(int0, comp(933, 140));  // rand_dungeon_rewards_v2:readyborder_player3
    };
    if ((varclient_1201 == 1)) {
        IF_SETHIDE(int0, comp(933, 151));  // rand_dungeon_rewards_v2:readybutton_player4
        IF_SETHIDE(int0, comp(933, 152));  // rand_dungeon_rewards_v2:readyborder_player4
    };
    if ((varclient_1202 == 1)) {
        IF_SETHIDE(int0, comp(933, 163));  // rand_dungeon_rewards_v2:readybutton_player5
        IF_SETHIDE(int0, comp(933, 164));  // rand_dungeon_rewards_v2:readyborder_player5
    };
    return;
}