//
function script2788(int0: cs2enum, int1: int): void {
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    var string0 = "";
    var int2 = 1;
    var int3 = ENUM_GETOUTPUTCOUNT(int0);
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 120);
    if ((int1 < int3)) {
        switch (int0) {
            case 15020: {
                CLIENTOPTION_SET(5, int1);
                int2 = 0;
                break;
            }
            case 1579: {
                CLIENTOPTION_SET(16, int1);
                int2 = 0;
                break;
            }
            case 866: {
                CLIENTOPTION_SET(8, int1);
                break;
            }
            case 14565: {
                CLIENTOPTION_SET(13, enum_getvalue(0, 0, 14566 as cs2enum, int1));
                break;
            }
            case 14564: {
                CLIENTOPTION_SET(1, int1);
                break;
            }
            case 10853: {
                CLIENTOPTION_SET(2, int1);
                break;
            }
            case 10851: {
                CLIENTOPTION_SET(20, int1);
                break;
            }
            case 11147: {
                CLIENTOPTION_SET(0, int1);
                break;
            }
            case 604: {
                CLIENTOPTION_SET(15, int1);
                break;
            }
            case 14563: {
                CLIENTOPTION_SET(12, int1);
                break;
            }
            case 10654: {
                CLIENTOPTION_SET(37, int1);
                break;
            }
            case 11569: {
                CLIENTOPTION_SET(36, int1);
                break;
            }
            case 9365: {
                CLIENTOPTION_SET(42, int1);
                break;
            }
        };
        if ((int2 == 1)) {
            varclient_6503 = 0;
            AUTOSETUP_SETCUSTOM();
            script2707();
        };
    };
    return;
}