//
function script10135(int0: component, int1: component): void {
    var int2 = 0;
    var int3 = 0;
    if (((((varbitclient_23079 == 1) && (int0 != comp(232, 137))) && (int0 != comp(232, 181))) && (int0 != comp(232, 185)))) {
        printmessage("You can't change that while your broadcast is active");
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
        return;
    };
    if (((OS_ISMAC() == 1) && (int0 == comp(232, 137)))) {
        printmessage("Webcams are not supported on Macs.");
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
        return;
    };
    if ((IF_GETHIDE(int0) == true)) {
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
        IF_SETHIDE(false, int0);
        IF_SETHIDE(true, int1);
        if ((int0 == comp(232, 123))) {
            varbitclient_23068 = 1;
        } else if ((int0 == comp(232, 137))) {
            if ((STRING_LENGTH(varclient_4291) > 1)) {
                varbitclient_23069 = 1;
                IF_SETHIDE(false, comp(232, 129));
                script10149();
            } else {
                printmessage("No webcam detected. If you connect a webcam you must log out and back in to Twitch to detect it.");
                IF_SETHIDE(false, comp(232, 138));
            };
        } else if ((int0 == comp(232, 181))) {
            varbitclient_23249 = 1;
            if ((varbitclient_23250 > 0)) {
                int3 = 1;
            };
            TTV_WEBCAM_FLIP(int3, 1);
        } else if ((int0 == comp(232, 185))) {
            varbitclient_23250 = 1;
            if ((varbitclient_23249 > 0)) {
                int2 = 1;
            };
            TTV_WEBCAM_FLIP(1, int2);
        };
    } else {
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
        IF_SETHIDE(true, int0);
        IF_SETHIDE(false, int1);
        if ((int0 == comp(232, 123))) {
            varbitclient_23068 = 0;
        } else if ((int0 == comp(232, 137))) {
            varbitclient_23069 = 0;
            IF_SETHIDE(true, comp(232, 129));
            script10150(0);
        } else if ((int0 == comp(232, 181))) {
            varbitclient_23249 = 0;
            if ((varbitclient_23250 > 0)) {
                int3 = 1;
            };
            TTV_WEBCAM_FLIP(int3, 0);
        } else if ((int0 == comp(232, 185))) {
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