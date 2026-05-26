//
function script2786(int0: number): void {
    if ((int0 == 2)) {
        SOUND_VORBIS_VOLUME(36961, 1, 0, 120);
        AUTOSETUP_SETLOW();
        if ((script13749() == 1)) {
            script17420();
        };
        varclient_6503 = 0;
        script2710();
    } else if (((int0 == 3) && (varclient_6503 == 0))) {
        SOUND_VORBIS_VOLUME(36961, 1, 0, 120);
        IF_SETHIDE(1, 21233709);
        IF_SETHIDE(0, 21233680);
        IF_SETHIDE(0, 21233679);
        switch (IF_GETTOP()) {
            case 744: {
                script3384(0);
                break;
            }
            case 1477: {
                if ((IF_HASSUBOVERLAY(96797487, 1420) == 0)) {
                    script3384(1);
                } else {
                    script3384(4);
                };
                break;
            }
            case 906: {
                script3384(2);
                break;
            }
        };
    };
    return;
}