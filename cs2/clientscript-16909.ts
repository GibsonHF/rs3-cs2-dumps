//
function script16909(int0: number, int1: number): void {
    if ((int1 >= 375)) {
        script16908(0);
        IF_SETONTIMER(callback(), comp(907, 2));  // lobbyscreen_pane_playerinfo:promo_layer
        IF_SETONTIMER(callback(script16910, 0, int0, script16913(int0)), comp(907, 4));  // lobbyscreen_pane_playerinfo:latest_update_layer
        return;
    };
    IF_SETONTIMER(callback(script16909, int0, (int1 + 1)), comp(907, 2));  // lobbyscreen_pane_playerinfo:promo_layer
    return;
}