//
function script17123(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number): void {
    if ((int0 == 1)) {
        IF_SETONOP(callback(script3048), comp(1044, 49));  // lobbyscreen_pane_mobile_social:add_player_button
        IF_SETONOP(callback(script11475, 68419608), comp(1044, 50));  // lobbyscreen_pane_mobile_social:join_player_button
        IF_SETTEXT("Friends List", comp(1044, 32));  // lobbyscreen_pane_mobile_social:friends_list_title
        IF_SETHIDE(false, comp(1044, 39));  // lobbyscreen_pane_mobile_social:column_header_status
        IF_SETSIZE(142, 0, 0, 1, comp(1044, 36));  // lobbyscreen_pane_mobile_social:column_header_name
        script3029(int1, int2, int3, int4, int5, int6, int7, int8, int9);
        IF_BUTTON_SETTOGGLED(1, comp(1044, 28));  // lobbyscreen_pane_mobile_social:friends_list_button
        IF_BUTTON_SETTOGGLED(0, comp(1044, 30));  // lobbyscreen_pane_mobile_social:ignore_list_button
        IF_SETGRAPHIC(24760 as graphic, comp(1044, 29));  // lobbyscreen_pane_mobile_social:friends_list_button_graphic
        IF_SETGRAPHIC(24779 as graphic, comp(1044, 31));  // lobbyscreen_pane_mobile_social:ignore_list_button_graphic
    } else {
        IF_SETONOP(callback(script3050), comp(1044, 49));  // lobbyscreen_pane_mobile_social:add_player_button
        CC_DELETEALL(comp(1044, 46));  // lobbyscreen_pane_mobile_social:player_list_status
        IF_SETTEXT("Ignore List", comp(1044, 32));  // lobbyscreen_pane_mobile_social:friends_list_title
        IF_SETHIDE(true, comp(1044, 39));  // lobbyscreen_pane_mobile_social:column_header_status
        IF_SETSIZE(0, 0, 1, 1, comp(1044, 36));  // lobbyscreen_pane_mobile_social:column_header_name
        script3041(int1, int2, int4, int5, int6, int7, int9);
        IF_BUTTON_SETTOGGLED(0, comp(1044, 28));  // lobbyscreen_pane_mobile_social:friends_list_button
        IF_BUTTON_SETTOGGLED(1, comp(1044, 30));  // lobbyscreen_pane_mobile_social:ignore_list_button
        IF_SETGRAPHIC(24761 as graphic, comp(1044, 29));  // lobbyscreen_pane_mobile_social:friends_list_button_graphic
        IF_SETGRAPHIC(24778 as graphic, comp(1044, 31));  // lobbyscreen_pane_mobile_social:ignore_list_button_graphic
        script7871(68419634, 0, 1, 0, 0);
    };
    varclient_7113 = -1;
    return;
}