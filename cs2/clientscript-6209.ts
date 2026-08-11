//
function script6209(): void {
    var int0 = IF_GETWIDTH(comp(1110, 74));  // clan_chat:clan_list_parent_layer
    if ((int0 < 210)) {
        IF_SETHIDE(true, comp(1110, 124));  // clan_chat:clan_buttons_layer
    } else {
        IF_SETHIDE(false, comp(1110, 124));  // clan_chat:clan_buttons_layer
    };
    if ((int0 < 153)) {
        script7816(72744960, 0);
    } else if ((script7769() == -1)) {
        script7816(72744960, 0);
    } else {
        script7816(72744960, 1);
    };
    return;
}