//
function script10055(): void {
    if ((script13749() == 0)) {
        script7791(59572242, 59572235);
        script7791(59572259, 59572254);
        script7791(59572267, 59572266);
        varclient_1122 = IF_GETHEIGHT(comp(909, 42));  // lobbyscreen_pane_friendslist:chat_build
        IF_SETONTIMER(callback(), comp(909, 0));  // lobbyscreen_pane_friendslist:main
        IF_SETONTIMER(callback(script15593, 0), comp(909, 2));  // lobbyscreen_pane_friendslist:friends
        IF_SETONTIMER(callback(script15594, 0), comp(909, 22));  // lobbyscreen_pane_friendslist:ignore
    } else {
        script17120();
    };
    varclient_2505 = "";
    return;
}