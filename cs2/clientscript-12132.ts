//
function script12132(int0: int): void {
    if ((TESTBIT(varbitplayer_30242, int0) == 1)) {
        script12125();
        script12128();
        return;
    };
    var int1 = (int0 + 1);
    if ((varbitclient_30259 == 0)) {
        varbitclient_30259 = int1;
    } else if ((varbitclient_30260 == 0)) {
        varbitclient_30260 = int1;
    } else if ((varbitclient_30261 == 0)) {
        varbitclient_30261 = int1;
    } else if ((varbitclient_30262 == 0)) {
        varbitclient_30262 = int1;
    } else if ((varbitclient_30263 == 0)) {
        varbitclient_30263 = int1;
    };
    SOUND_VORBIS_RATE(40090 as vorbis, 1, 0, 120, 350);
    script12125();
    script12128();
    return;
}