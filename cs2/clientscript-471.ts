//
function script471(int0: number, int1: number): void {
    if ((int1 == 0)) {
        varplayer_8005 = SETBIT(varplayer_8005, int0);
        varplayer_8005 = CLEARBIT(varplayer_8005, int0);
    } else {
        varplayer_8006 = SETBIT(varplayer_8006, int0);
        varplayer_8006 = CLEARBIT(varplayer_8006, int0);
    };
    return;
}