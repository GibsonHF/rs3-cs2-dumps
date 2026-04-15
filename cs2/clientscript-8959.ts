//
function script8959(): void {
    var int0 = 0;
    varplayer_3643 = SETBIT(varplayer_3643, 0);
    varplayer_3643 = SETBIT(varplayer_3643, 1);
    int0 = 2;
    while ((int0 < 14)) {
        varplayer_3643 = SETBIT(varplayer_3643, int0);
        int0 = (int0 + 1);
    };
    varplayer_3643 = CLEARBIT(varplayer_3643, 13);
    return;
}