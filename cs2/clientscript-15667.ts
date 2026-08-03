//
function script15667(int0: number): void {
    SOUND_VORBIS_VOLUME(47738 as vorbis, 1, 0, 180);
    IF_SETONCLICK(callback(script2944), comp(744, 139));
    IF_SETONTIMER(callback(), 48758923);
    IF_SETONTIMER(callback(), 48759131);
    if ((LOGIN_INPROGRESS() == 1)) {
        LOGIN_CANCEL();
    };
    LOGIN_RESETREPLY();
    script2954(0);
    script4142(-1);
    script2940(int0);
    return;
}