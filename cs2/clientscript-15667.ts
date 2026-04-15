//
function script15667(int0: int): void {
    SOUND_VORBIS_VOLUME(47738 as vorbis, 1, 0, 180);
    IF_SETONCLICK(callback(script2944), comp(744, 134));
    IF_SETONTIMER(callback(), 48758918);
    IF_SETONTIMER(callback(), 48759119);
    if ((LOGIN_INPROGRESS() == 1)) {
        LOGIN_CANCEL();
    };
    LOGIN_RESETREPLY();
    script2954(0);
    script4142(-1);
    script2940(int0);
    return;
}