//
function script12137(int0: int): void {
    var int1 = (int0 + 1);
    if ((varbitplayer_30250 == 2)) {
        switch (int0) {
            case 0: {
                if ((varbitclient_30259 == 0)) {
                    int1 = 0;
                };
                break;
            }
            case 1: {
                if ((varbitclient_30260 == 0)) {
                    int1 = 0;
                };
                break;
            }
            case 2: {
                if ((varbitclient_30261 == 0)) {
                    int1 = 0;
                };
                break;
            }
            case 3: {
                if ((varbitclient_30262 == 0)) {
                    int1 = 0;
                };
                break;
            }
            case 4: {
                if ((varbitclient_30263 == 0)) {
                    int1 = 0;
                };
                break;
            }
        };
        if ((int1 == 0)) {
            script12125();
            return;
        };
        if ((varbitclient_30264 == 0)) {
            varbitclient_30264 = int1;
        } else if ((varbitclient_30265 == 0)) {
            varbitclient_30265 = int1;
        } else if ((varbitclient_30266 == 0)) {
            varbitclient_30266 = int1;
        } else if ((varbitclient_30267 == 0)) {
            varbitclient_30267 = int1;
        } else if ((varbitclient_30268 == 0)) {
            varbitclient_30268 = int1;
        };
        script12150();
    };
    script12138(int0, 0);
    SOUND_VORBIS_RATE(40090 as vorbis, 1, 0, 120, 350);
    script12125();
    script12128();
    return;
}