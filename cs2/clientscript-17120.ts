//
function script17120(): void {
    varclient_7113 = -1;
    script7791(68419631, 68419626);
    script7791(68419596, 68419595);
    varclient_1122 = IF_GETHEIGHT(comp(1044, 11));  // lobbyscreen_pane_mobile_social:chat_build
    IF_SETONTIMER(callback(), comp(1044, 0));  // lobbyscreen_pane_mobile_social:main
    IF_SETONTIMER(callback(script15593, 1), comp(1044, 2));  // lobbyscreen_pane_mobile_social:player_list_panel
    IF_SETHIDE(true, comp(1044, 10));  // lobbyscreen_pane_mobile_social:chat_input
    IF_SETSIZE(36, 20, 1, 1, comp(1044, 11));  // lobbyscreen_pane_mobile_social:chat_build
    IF_SETSIZE(16, 0, 0, 1, comp(1044, 12));  // lobbyscreen_pane_mobile_social:chat_scroll
    script3052(68419592, 68419595, 68419596);
    IF_BUTTON_SETTOGGLED(1, comp(1044, 5));  // lobbyscreen_pane_mobile_social:friends_button
    IF_SETGRAPHIC(24760 as graphic, comp(1044, 29));  // lobbyscreen_pane_mobile_social:friends_list_button_graphic
    IF_SETGRAPHIC(24779 as graphic, comp(1044, 31));  // lobbyscreen_pane_mobile_social:ignore_list_button_graphic
    IF_SETHIDE(false, comp(1044, 24));  // lobbyscreen_pane_mobile_social:player_list_top_bar_friends
    IF_SETHIDE(true, comp(1044, 27));  // lobbyscreen_pane_mobile_social:player_list_top_bar_clan
    IF_SETHIDE(true, comp(1044, 25));  // lobbyscreen_pane_mobile_social:player_list_top_bar_friends_chat
    IF_SETHIDE(true, comp(1044, 15));  // lobbyscreen_pane_mobile_social:join_leave_channel_button
    IF_SETHIDE(true, comp(1044, 16));  // lobbyscreen_pane_mobile_social:kick_player_button_layer
    IF_SETHIDE(false, comp(1044, 49));  // lobbyscreen_pane_mobile_social:add_player_button
    return;
}