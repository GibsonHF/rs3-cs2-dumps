//
function script13330(): void {
    varplayer_6891 = -1 as cs2enum;
    varclient_6829 = 0;
    varclient_6830 = 0;
    script10416(121307172, 121307173, "Show Completed", "", "", (1 - MIN(varbitplayer_48340, 1)));
    script10416(121307180, 121307181, "Show Locked", "", "", (1 - MIN(varbitplayer_48341, 1)));
    script10416(121307182, 121307183, "List Mode", "", "", varbitplayer_37059);
    IF_SETONVARTRANSMIT(callback(script15361, 7120, 1), 121307168);
    script9056();
    script15365();
    return;
}