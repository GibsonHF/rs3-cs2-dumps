//
function script12837(): void {
    script17119();
    varclient_7113 = -1;
    IF_BUTTON_SETTOGGLED(1, comp(1044, 6));  // lobbyscreen_pane_mobile_social:friends_chat_button
    script3060(3);
    script4554(-1, 68419617, 68419629, 68419628, 68419630, 68419626, 68419631, 68419627, -1, -1, 68419585, 68419592, 68419595, 68419596, 68419594, 68419636, 68419637, 68419599, 68419600);
    script17118();
    script4565(68419592, 68419595, 68419596);
    IF_SETONOP(callback(script11559, 68419609), comp(1044, 50));  // lobbyscreen_pane_mobile_social:join_player_button
    script7871(68419634, 0, 1, 0, 0);
    IF_SETTEXT("Name", comp(1044, 38));  // lobbyscreen_pane_mobile_social:column_header_name_label
    IF_SETONOP(callback(script4557), comp(1044, 15));  // lobbyscreen_pane_mobile_social:join_leave_channel_button
    IF_SETHIDE(false, comp(1044, 15));  // lobbyscreen_pane_mobile_social:join_leave_channel_button
    IF_SETHIDE(false, comp(1044, 25));  // lobbyscreen_pane_mobile_social:player_list_top_bar_friends_chat
    IF_SETHIDE(true, comp(1044, 24));  // lobbyscreen_pane_mobile_social:player_list_top_bar_friends
    IF_SETHIDE(true, comp(1044, 27));  // lobbyscreen_pane_mobile_social:player_list_top_bar_clan
    IF_SETHIDE(true, comp(1044, 49));  // lobbyscreen_pane_mobile_social:add_player_button
    return;
}