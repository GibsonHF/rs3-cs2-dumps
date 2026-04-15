//
function script9426(int0: int): void {
    if ((int0 > 0)) {
        IF_SETHIDE(true, comp(711, 23));
    };
    varclient_3857 = int0;
    SOUND_VORBIS_VOLUME(36956 as vorbis, 1, 0, 200);
    IF_SETHIDE(true, comp(711, 31));
    IF_SETHIDE(true, comp(711, 5));
    IF_SETHIDE(true, comp(711, 2));
    IF_SETHIDE(true, comp(711, 32));
    IF_SETHIDE(true, comp(711, 6));
    IF_SETHIDE(true, comp(711, 3));
    IF_SETHIDE(true, comp(711, 33));
    IF_SETHIDE(true, comp(711, 7));
    IF_SETHIDE(true, comp(711, 4));
    IF_SETHIDE(true, comp(711, 38));
    IF_SETHIDE(true, comp(711, 60));
    IF_SETHIDE(true, comp(711, 74));
    switch (int0) {
        case 1: {
            if ((varbitplayer_21031 == 1)) {
                IF_SETHIDE(false, comp(711, 31));
            } else if ((varbitplayer_21031 == 2)) {
                IF_SETHIDE(false, comp(711, 5));
            } else if ((varbitplayer_21031 == 3)) {
                IF_SETHIDE(false, comp(711, 2));
            };
            script9423(1);
            break;
        }
        case 2: {
            if ((varbitplayer_21031 == 1)) {
                IF_SETHIDE(false, comp(711, 32));
            } else if ((varbitplayer_21031 == 2)) {
                IF_SETHIDE(false, comp(711, 6));
            } else if ((varbitplayer_21031 == 3)) {
                IF_SETHIDE(false, comp(711, 3));
            };
            script9423(2);
            break;
        }
        case 3: {
            if ((varbitplayer_21031 == 1)) {
                IF_SETHIDE(false, comp(711, 33));
            } else if ((varbitplayer_21031 == 2)) {
                IF_SETHIDE(false, comp(711, 7));
            } else if ((varbitplayer_21031 == 3)) {
                IF_SETHIDE(false, comp(711, 4));
            };
            script9423(3);
            break;
        }
        case 4: {
            if ((varbitplayer_21031 == 1)) {
                IF_SETHIDE(false, comp(711, 38));
            } else if ((varbitplayer_21031 == 2)) {
                IF_SETHIDE(false, comp(711, 60));
            } else if ((varbitplayer_21031 == 3)) {
                IF_SETHIDE(false, comp(711, 74));
            };
            script9423(4);
            break;
        }
    };
    return;
}