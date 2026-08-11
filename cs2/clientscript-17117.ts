//
function script17117(): void {
    script17119();
    varclient_7113 = -1;
    IF_BUTTON_SETTOGGLED(1, comp(1044, 7));  // lobbyscreen_pane_mobile_social:clan_chat_button
    script3060(4);
    IF_SETONTIMER(callback(), comp(909, 0));  // lobbyscreen_pane_friendslist:main
    script3159(-1, 68419617, 68419629, 68419628, 68419630, 68419626, 68419631, 68419627, -1, -1, 68419585, 68419592, 68419595, 68419596, 68419594, 68419636, 68419637);
    script17118();
    script3171(68419592, 68419595, 68419596);
    IF_SETONOP(callback(script11463, 68419611), comp(1044, 50));  // lobbyscreen_pane_mobile_social:join_player_button
    script7871(68419634, 0, 1, 0, 0);
    IF_SETTEXT("Name", comp(1044, 38));  // lobbyscreen_pane_mobile_social:column_header_name_label
    IF_SETHIDE(false, comp(1044, 27));  // lobbyscreen_pane_mobile_social:player_list_top_bar_clan
    if ((unk10993(0) == 1)) {
        IF_SETTEXT(ACTIVECLANCHANNEL_GETCLANNAME(), comp(1044, 23));  // lobbyscreen_pane_mobile_social:clan_name
    };
    IF_SETHIDE(true, comp(1044, 24));  // lobbyscreen_pane_mobile_social:player_list_top_bar_friends
    IF_SETHIDE(true, comp(1044, 25));  // lobbyscreen_pane_mobile_social:player_list_top_bar_friends_chat
    IF_SETHIDE(true, comp(1044, 15));  // lobbyscreen_pane_mobile_social:join_leave_channel_button
    IF_SETHIDE(true, comp(1044, 16));  // lobbyscreen_pane_mobile_social:kick_player_button_layer
    IF_SETHIDE(true, comp(1044, 49));  // lobbyscreen_pane_mobile_social:add_player_button
    return;
}