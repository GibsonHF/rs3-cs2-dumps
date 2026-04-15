//
function script6436(int0: component): void {
    if ((varplayer_187 != -1 as player_uid)) {
        script8800("Cancel your pending invitation.", int0, -1);
    } else {
        script8800("Invite a player to join your group.", int0, -1);
    };
    return;
}