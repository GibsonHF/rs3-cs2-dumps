//
function script17119(): void {
    IF_SETONFRIENDTRANSMIT(callback(), comp(1044, 8));  // lobbyscreen_pane_mobile_social:chat
    IF_SETONFRIENDTRANSMIT(callback(), comp(1044, 42));  // lobbyscreen_pane_mobile_social:player_list_build
    IF_SETONCLANTRANSMIT(callback(), 68419592);
    IF_SETONCLANTRANSMIT(callback(), 68419626);
    IF_SETONCHATTRANSMIT(callback(), 68419592);
    IF_SETONCLANCHANNELTRANSMIT(callback(), 68419592);
    IF_SETONCLANCHANNELTRANSMIT(callback(), 68419626);
    IF_SETONCLANSETTINGSTRANSMIT(callback(), 68419592);
    IF_SETONCLANSETTINGSTRANSMIT(callback(), 68419626);
    IF_SETONKEY(callback(), comp(1044, 10));  // lobbyscreen_pane_mobile_social:chat_input
    IF_SETONTIMER(callback(), comp(1044, 52));  // lobbyscreen_pane_mobile_social:chat_input_text
    return;
}