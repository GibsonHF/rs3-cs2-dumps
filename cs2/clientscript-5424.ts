//
function script5424(): void {
    IF_SETHIDE(false, comp(1159, 28));  // dom_battle_overlay:easter_egg_notification_layer
    IF_SETONTIMER(callback(script5425), comp(1159, 30));  // dom_battle_overlay:global_layer
    varclient_1685 = -60;
    IF_SETPOSITION(varclient_1685, 0, 0, 1, comp(1159, 28));  // dom_battle_overlay:easter_egg_notification_layer
    return;
}