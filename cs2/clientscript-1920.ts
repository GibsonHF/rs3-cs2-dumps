//
function script1920(): void {
    IF_SETONVARCSTRTRANSMIT(callback(script1921, 2452, 1), comp(812, 5));  // sc_lobby_clan_overlay:clan_leader_text
    IF_SETONVARCSTRTRANSMIT(callback(script1921, 2453, 1), comp(812, 6));  // sc_lobby_clan_overlay:ally_1_text
    IF_SETONVARCSTRTRANSMIT(callback(script1921, 2454, 1), comp(812, 7));  // sc_lobby_clan_overlay:ally_2_text
    IF_SETONVARCTRANSMIT(callback(script1921, 551, 1), comp(812, 5));  // sc_lobby_clan_overlay:clan_leader_text
    IF_SETONVARCTRANSMIT(callback(script1921, 552, 1), comp(812, 6));  // sc_lobby_clan_overlay:ally_1_text
    IF_SETONVARCTRANSMIT(callback(script1921, 553, 1), comp(812, 7));  // sc_lobby_clan_overlay:ally_2_text
    varclient_2452 = "You have no clan leader.";
    varclient_2453 = "You have no allied clans.";
    varclient_2454 = "";
    varclient_551 = 0;
    varclient_552 = 0;
    varclient_553 = 0;
    return;
}