//
function script2886(): void {
    varclient_1078 = varbitplayer_5746;
    varclient_1086 = 0;
    var int0 = CLIENTCLOCK();
    IF_SETONTIMER(callback(script2892, 31195160, int0), comp(476, 24));
    SOUND_SYNTH(31902, 1, 0);
    IF_SETONRESIZE(callback(script2887), 31195136);
    script2888();
    return;
}