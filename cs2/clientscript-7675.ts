//
function script7675(): void {
    varclient_6 = false;
    script10416(comp(594, 15), comp(594, 16), "", "", "", script42(varclient_6));
    script10416(comp(594, 63), comp(594, 64), "", "", "", script42(varclient_6));
    if (((PLAYERMODLEVEL() == 5) || (PLAYERMODLEVEL() == 6))) {
        IF_SETTEXT("Suggest to temporarily mute this player", comp(594, 17));
        IF_SETTEXT("Suggest to temporarily mute this player", comp(594, 65));
    } else {
        IF_SETTEXT("Temporarily mute this player", comp(594, 17));
        IF_SETTEXT("Temporarily mute this player", comp(594, 65));
    };
    varclient_11 = true;
    IF_SETONVARCSTRTRANSMIT(callback(script218, 2578, 1), comp(594, 0));
    varclient_792 = -1;
    script224();
    script216();
    return;
}