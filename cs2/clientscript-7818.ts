//
function script7818(int0: number): void {
    if (((PLAYERMODLEVEL() == 5) || (PLAYERMODLEVEL() == 6))) {
        IF_SETTEXT("Suggest to temporarily mute this player", comp(594, 17));  // snapshot_main_v2:mutetoggle
        IF_SETTEXT("Suggest to temporarily mute this player", comp(594, 65));  // snapshot_main_v2:mutetoggle_offence
    } else {
        IF_SETTEXT("Temporarily mute this player", comp(594, 17));  // snapshot_main_v2:mutetoggle
        IF_SETTEXT("Temporarily mute this player", comp(594, 65));  // snapshot_main_v2:mutetoggle_offence
    };
    if ((varclient_6 == true)) {
        varclient_6 = false;
    } else {
        varclient_6 = true;
    };
    if ((int0 == 38928448)) {
        script10416(38928399, 38928400, "", "", "", script42(varclient_6));
    } else if ((int0 == 38928400)) {
        script10416(38928447, 38928448, "", "", "", script42(varclient_6));
    };
    return;
}