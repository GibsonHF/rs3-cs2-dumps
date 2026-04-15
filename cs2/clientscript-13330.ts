//
function script13330(): void {
    varplayer_6891 = -1 as cs2enum;
    varclient_6829 = 0;
    varclient_6830 = 0;
    script10416(comp(1851, 36), comp(1851, 37), "Show Completed", "", "", (1 - MIN(varbitplayer_48340, 1)));
    script10416(comp(1851, 44), comp(1851, 45), "Show Locked", "", "", (1 - MIN(varbitplayer_48341, 1)));
    script10416(comp(1851, 46), comp(1851, 47), "List Mode", "", "", varbitplayer_37059);
    IF_SETONVARTRANSMIT(callback(script15361, 7120, 1), comp(1851, 32));
    script9056();
    script15365();
    return;
}