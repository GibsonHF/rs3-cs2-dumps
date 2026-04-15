//
function script12133(int0: int, int1: unknown_int): void {
    var int2 = (int0 + 1);
    if ((((varbitplayer_30250 == 1) && (script12134(int2) == 0)) && (TESTBIT(varbitplayer_30242, int0) == 0))) {
        switch (int1) {
            case 111935511: {
                varbitclient_30259 = int2;
                break;
            }
            case 111935512: {
                varbitclient_30260 = int2;
                break;
            }
            case 111935513: {
                varbitclient_30261 = int2;
                break;
            }
            case 111935514: {
                varbitclient_30262 = int2;
                break;
            }
            case 111935515: {
                varbitclient_30263 = int2;
                break;
            }
        };
    };
    SOUND_VORBIS_RATE(40090 as vorbis, 1, 0, 120, 350);
    script12125();
    script12128();
    return;
}