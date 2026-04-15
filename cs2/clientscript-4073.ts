//
function script4073(): void {
    SOUND_VORBIS_VOLUME(49697 as vorbis, 1, 0, 185);
    if ((script4597() == 1)) {
        return;
    };
    if ((SSO_AVAILABLE() == 1)) {
        script380(3997 as dbrow);
        LOBBY_ENTERLOBBY_SSO(varclient_4192, varclient_4193);
        varclient_3708 = 1;
        IF_SETHIDE(true, comp(744, 88));
        script15662("Signing in...", -1, 0);
        varclient_1100 = -3;
        IF_SETONTIMER(callback(script2946, 0), comp(744, 168));
    };
    return;
}