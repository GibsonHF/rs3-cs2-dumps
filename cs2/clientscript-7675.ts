//
function script7675(): void {
    varclient_6 = false;
    script10416(38928399, 38928400, "", "", "", script42(varclient_6));
    script10416(38928447, 38928448, "", "", "", script42(varclient_6));
    if (((PLAYERMODLEVEL() == 5) || (PLAYERMODLEVEL() == 6))) {
        IF_SETTEXT("Suggest to temporarily mute this player", comp(594, 17));  // snapshot_main_v2:mutetoggle
        IF_SETTEXT("Suggest to temporarily mute this player", comp(594, 65));  // snapshot_main_v2:mutetoggle_offence
    } else {
        IF_SETTEXT("Temporarily mute this player", comp(594, 17));  // snapshot_main_v2:mutetoggle
        IF_SETTEXT("Temporarily mute this player", comp(594, 65));  // snapshot_main_v2:mutetoggle_offence
    };
    varclient_11 = true;
    IF_SETONVARCSTRTRANSMIT(callback(script218, 2578, 1), comp(594, 0));  // snapshot_main_v2:control_layer
    varclient_792 = -1;
    script224();
    script216();
    return;
}