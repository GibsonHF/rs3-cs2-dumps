//
function script10135(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    if (((((varbitclient_23079 == 1) && (int0 != 15204489)) && (int0 != 15204533)) && (int0 != 15204537))) {
        printmessage("You can't change that while your broadcast is active");
        SOUND_VORBIS_VOLUME(10046, 1, 0, 150);
        return;
    };
    if (((OS_ISMAC() == 1) && (int0 == 15204489))) {
        printmessage("Webcams are not supported on Macs.");
        SOUND_VORBIS_VOLUME(10046, 1, 0, 150);
        return;
    };
    if ((IF_GETHIDE(int0) == 1)) {
        SOUND_VORBIS_VOLUME(36961, 1, 0, 100);
        IF_SETHIDE(0, int0);
        IF_SETHIDE(1, int1);
        if ((int0 == 15204475)) {
            varbitclient_23068 = 1;
        } else if ((int0 == 15204489)) {
            if ((STRING_LENGTH(varclient_4291) > 1)) {
                varbitclient_23069 = 1;
                IF_SETHIDE(0, 15204481);
                script10149();
            } else {
                printmessage("No webcam detected. If you connect a webcam you must log out and back in to Twitch to detect it.");
                IF_SETHIDE(0, 15204490);
            };
        } else if ((int0 == 15204533)) {
            varbitclient_23249 = 1;
            if ((varbitclient_23250 > 0)) {
                int3 = 1;
            };
            TTV_WEBCAM_FLIP(int3, 1);
        } else if ((int0 == 15204537)) {
            varbitclient_23250 = 1;
            if ((varbitclient_23249 > 0)) {
                int2 = 1;
            };
            TTV_WEBCAM_FLIP(1, int2);
        };
    } else {
        SOUND_VORBIS_VOLUME(36961, 1, 0, 100);
        IF_SETHIDE(1, int0);
        IF_SETHIDE(0, int1);
        if ((int0 == 15204475)) {
            varbitclient_23068 = 0;
        } else if ((int0 == 15204489)) {
            varbitclient_23069 = 0;
            IF_SETHIDE(1, 15204481);
            script10150(0);
        } else if ((int0 == 15204533)) {
            varbitclient_23249 = 0;
            if ((varbitclient_23250 > 0)) {
                int3 = 1;
            };
            TTV_WEBCAM_FLIP(int3, 0);
        } else if ((int0 == 15204537)) {
            varbitclient_23250 = 0;
            if ((varbitclient_23249 > 0)) {
                int2 = 1;
            };
            TTV_WEBCAM_FLIP(0, int2);
        };
    };
    script7698();
    return;
}