//
function script5403(int0: number, string0: string): void {
    IF_SETTEXT(string0, comp(1172, 4));  // dom_taunt_overlay:player_name
    varclient_1669 = 0;
    IF_SETHIDE(true, comp(1172, 2));  // dom_taunt_overlay:boss_name_layer
    IF_SETHIDE(false, comp(1172, 5));  // dom_taunt_overlay:player_name_layer
    IF_SETHIDE(true, comp(1172, 7));  // dom_taunt_overlay:win_lose_layer
    IF_SETONTIMER(callback(script5405, 0, 76808197, int0), comp(1172, 5));  // dom_taunt_overlay:player_name_layer
    return;
}