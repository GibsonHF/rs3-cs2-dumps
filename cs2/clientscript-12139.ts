//
function script12139(int0: int, int1: unknown_int): void {
    var int2 = 0;
    switch (int0) {
        case 0: {
            if ((varbitclient_30259 == 0)) {
                return;
            };
            break;
        }
        case 1: {
            if ((varbitclient_30260 == 0)) {
                return;
            };
            break;
        }
        case 2: {
            if ((varbitclient_30261 == 0)) {
                return;
            };
            break;
        }
        case 3: {
            if ((varbitclient_30262 == 0)) {
                return;
            };
            break;
        }
        case 4: {
            if ((varbitclient_30263 == 0)) {
                return;
            };
            break;
        }
    };
    SOUND_VORBIS_RATE(40090 as vorbis, 1, 0, 120, 350);
    switch (int1) {
        case 111935511: {
            script12140(int0, 0);
            break;
        }
        case 111935512: {
            script12140(int0, 1);
            break;
        }
        case 111935513: {
            script12140(int0, 2);
            break;
        }
        case 111935514: {
            script12140(int0, 3);
            break;
        }
        case 111935515: {
            script12140(int0, 4);
            break;
        }
        case 111935502: {
            if ((varbitclient_30264 == 0)) {
                varbitclient_30264 = (int0 + 1);
                script12138(int0, 0);
                int2 = 1;
            };
            break;
        }
        case 111935503: {
            if ((varbitclient_30265 == 0)) {
                varbitclient_30265 = (int0 + 1);
                script12138(int0, 0);
                int2 = 1;
            };
            break;
        }
        case 111935504: {
            if ((varbitclient_30266 == 0)) {
                varbitclient_30266 = (int0 + 1);
                script12138(int0, 0);
                int2 = 1;
            };
            break;
        }
        case 111935505: {
            if ((varbitclient_30267 == 0)) {
                varbitclient_30267 = (int0 + 1);
                script12138(int0, 0);
                int2 = 1;
            };
            break;
        }
        case 111935506: {
            if ((varbitclient_30268 == 0)) {
                varbitclient_30268 = (int0 + 1);
                script12138(int0, 0);
                int2 = 1;
            };
            break;
        }
        default: {
            if ((varbitplayer_30250 == 1)) {
                script12138(int0, 0);
            };
            break;
        }
    };
    if ((int2 == 1)) {
        script12150();
    };
    script12125();
    script12128();
    return;
}