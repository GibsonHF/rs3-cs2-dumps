//[proc,login_dologin]
function script2945(): void {
    SOUND_VORBIS_VOLUME(49697 as vorbis, 1, 0, 255);
    if ((script1011() == 1)) {
        return;
    };
    varclient_3708 = 0;
    varclient_4194 = 0;
    if ((script4597() == 1)) {
        return;
    };
    if (((SSO_AVAILABLE() == 0) && ((STRING_LENGTH(varclient_2576) == 0) || (STRING_LENGTH(varclient_2577) == 0)))) {
        script2940(8);
        return;
    };
    varclient_200 = 0;
    varclient_201 = 0;
    IF_SETONCLICK(callback(), comp(744, 134));
    script15660();
    script15662("Signing in...", -1, 0);
    varclient_1100 = -3;
    if (((varclient_3681 == 1) && (STRING_LENGTH(varclient_2576) != 0))) {
        varclient_3683 = varclient_2576;
    };
    if ((script6509() == 1)) {
        LOBBY_ENTERLOBBY_SSO(varclient_4192, varclient_4193);
    } else {
        LOBBY_ENTERLOBBY(varclient_2576, varclient_2577, varclient_4192, varclient_4193);
    };
    varclient_4192 = "";
    IF_SETONTIMER(callback(script2946, 0), comp(744, 168));
    return;
}