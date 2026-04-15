//
function script12154(int0: component, int1: component): void {
    var int2 = IF_GETGRAPHIC(int0);
    stack(IF_GETGRAPHIC(int1));
    stack(int0);
    IF_SETGRAPHIC();
    stack(int2);
    stack(int1);
    IF_SETGRAPHIC();
    var int3 = 0;
    var int4 = 0;
    if ((IF_FIND(int0) == 1)) {
        int3 = cc_getparam(5534);
    };
    if ((IF_FIND(int1) == 1)) {
        int4 = cc_getparam(5534);
    };
    var int5 = 0;
    var int6 = 0;
    switch (int3) {
        case 0: {
            int5 = varbitclient_30264;
            break;
        }
        case 1: {
            int5 = varbitclient_30265;
            break;
        }
        case 2: {
            int5 = varbitclient_30266;
            break;
        }
        case 3: {
            int5 = varbitclient_30267;
            break;
        }
        case 4: {
            int5 = varbitclient_30268;
            break;
        }
    };
    switch (int4) {
        case 0: {
            int6 = varbitclient_30264;
            varbitclient_30264 = int5;
            break;
        }
        case 1: {
            int6 = varbitclient_30265;
            varbitclient_30265 = int5;
            break;
        }
        case 2: {
            int6 = varbitclient_30266;
            varbitclient_30266 = int5;
            break;
        }
        case 3: {
            int6 = varbitclient_30267;
            varbitclient_30267 = int5;
            break;
        }
        case 4: {
            int6 = varbitclient_30268;
            varbitclient_30268 = int5;
            break;
        }
    };
    switch (int3) {
        case 0: {
            varbitclient_30264 = int6;
            break;
        }
        case 1: {
            varbitclient_30265 = int6;
            break;
        }
        case 2: {
            varbitclient_30266 = int6;
            break;
        }
        case 3: {
            varbitclient_30267 = int6;
            break;
        }
        case 4: {
            varbitclient_30268 = int6;
            break;
        }
    };
    script12152();
    SOUND_VORBIS_RATE(40090 as vorbis, 1, 0, 120, 350);
    script12125();
    script12150();
    return;
}