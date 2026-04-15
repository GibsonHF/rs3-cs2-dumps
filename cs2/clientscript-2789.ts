//
function script2789(int0: dbrow, int1: int, int2: int): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    if ((int1 > DB_GETFIELDCOUNT(int0, 127008))) {
        return;
    };
    var int3 = dbrow_getfield(int0, 127008, int1);
    var int4 = 1;
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 120);
    switch (int3) {
        case 33102: {
            varclient_3698 = int2;
            int4 = 0;
            break;
        }
        case 963: {
            CLIENTOPTION_SET(21, int2);
            script15671();
            break;
        }
        case 831: {
            CLIENTOPTION_SET(10, int2);
            break;
        }
        case 843: {
            CLIENTOPTION_SET(9, int2);
            break;
        }
        case 33092: {
            CLIENTOPTION_SET(19, int2);
            break;
        }
        case 33100: {
            CLIENTOPTION_SET(4, int2);
            break;
        }
        case 11519: {
            CLIENTOPTION_SET(7, int2);
            break;
        }
        case 11516: {
            CLIENTOPTION_SET(30, int2);
            break;
        }
        case 11518: {
            CLIENTOPTION_SET(29, int2);
            break;
        }
        case 11517: {
            CLIENTOPTION_SET(31, int2);
            break;
        }
        case 40647: {
            CLIENTOPTION_SET(32, int2);
            break;
        }
    };
    if ((int4 == 1)) {
        varclient_6503 = 0;
        AUTOSETUP_SETCUSTOM();
        script2707();
    };
    return;
}