//
function script13890(): void {
    if ((varclient_6690 >= (CLIENTCLOCK() - 20))) {
        return;
    };
    if ((varbitplayer_39433 == 1)) {
        varbitplayer_39433 = 0;
        varbitclient_45226 = 0;
        script13943();
    };
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    if ((varclient_6684 == false)) {
        script13903();
    } else {
        script13909();
    };
    return;
}