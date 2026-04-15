//
function script2786(int0: unknown_int): void {
    if ((int0 == 2)) {
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 120);
        AUTOSETUP_SETLOW();
        if ((script13749() == true)) {
            script17420();
        };
        varclient_6503 = 0;
        script2710();
    } else if (((int0 == 3) && (varclient_6503 == 0))) {
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 120);
        IF_SETHIDE(true, comp(324, 45));
        IF_SETHIDE(false, comp(324, 16));
        IF_SETHIDE(false, comp(324, 15));
        switch (IF_GETTOP()) {
            case 744: {
                script3384(0);
                break;
            }
            case 1477: {
                if ((IF_HASSUBOVERLAY(comp(1477, 815), 1420 as overlayinterface) == 0)) {
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