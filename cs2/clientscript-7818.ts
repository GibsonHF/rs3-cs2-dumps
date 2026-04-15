//
function script7818(int0: component): void {
    if (((PLAYERMODLEVEL() == 5) || (PLAYERMODLEVEL() == 6))) {
        IF_SETTEXT("Suggest to temporarily mute this player", comp(594, 17));
        IF_SETTEXT("Suggest to temporarily mute this player", comp(594, 65));
    } else {
        IF_SETTEXT("Temporarily mute this player", comp(594, 17));
        IF_SETTEXT("Temporarily mute this player", comp(594, 65));
    };
    if ((varclient_6 == true)) {
        varclient_6 = false;
    } else {
        varclient_6 = true;
    };
    if ((int0 == comp(594, 64))) {
        script10416(comp(594, 15), comp(594, 16), "", "", "", script42(varclient_6));
    } else if ((int0 == comp(594, 16))) {
        script10416(comp(594, 63), comp(594, 64), "", "", "", script42(varclient_6));
    };
    return;
}