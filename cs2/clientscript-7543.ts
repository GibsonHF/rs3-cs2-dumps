//
function script7543(): void {
    CC_DELETEALL(comp(906, 31));  // lobbyscreen:tab_1
    CC_DELETEALL(comp(906, 32));  // lobbyscreen:tab_2
    CC_DELETEALL(comp(906, 33));  // lobbyscreen:tab_3
    CC_DELETEALL(comp(906, 34));  // lobbyscreen:tab_4
    CC_DELETEALL(comp(906, 35));  // lobbyscreen:tab_5
    CC_DELETEALL(comp(906, 36));  // lobbyscreen:tab_6
    IF_CLEARSCRIPTHOOKS(comp(906, 31));  // lobbyscreen:tab_1
    IF_CLEARSCRIPTHOOKS(comp(906, 32));  // lobbyscreen:tab_2
    IF_CLEARSCRIPTHOOKS(comp(906, 33));  // lobbyscreen:tab_3
    IF_CLEARSCRIPTHOOKS(comp(906, 34));  // lobbyscreen:tab_4
    IF_CLEARSCRIPTHOOKS(comp(906, 35));  // lobbyscreen:tab_5
    IF_CLEARSCRIPTHOOKS(comp(906, 36));  // lobbyscreen:tab_6
    IF_SETONOP(callback(script3059, 0), comp(906, 31));  // lobbyscreen:tab_1
    IF_SETONOP(callback(script3059, 1), comp(906, 32));  // lobbyscreen:tab_2
    IF_SETONOP(callback(script3059, 2), comp(906, 33));  // lobbyscreen:tab_3
    IF_SETONOP(callback(script3059, 3), comp(906, 34));  // lobbyscreen:tab_4
    IF_SETONOP(callback(script3059, 4), comp(906, 35));  // lobbyscreen:tab_5
    IF_SETONOP(callback(script3059, 5), comp(906, 36));  // lobbyscreen:tab_6
    return;
}