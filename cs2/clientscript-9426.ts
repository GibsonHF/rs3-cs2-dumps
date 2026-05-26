//
function script9426(int0: number): void {
    if ((int0 > 0)) {
        IF_SETHIDE(1, 46596119);
    };
    varclient_3857 = int0;
    SOUND_VORBIS_VOLUME(36956, 1, 0, 200);
    IF_SETHIDE(1, 46596127);
    IF_SETHIDE(1, 46596101);
    IF_SETHIDE(1, 46596098);
    IF_SETHIDE(1, 46596128);
    IF_SETHIDE(1, 46596102);
    IF_SETHIDE(1, 46596099);
    IF_SETHIDE(1, 46596129);
    IF_SETHIDE(1, 46596103);
    IF_SETHIDE(1, 46596100);
    IF_SETHIDE(1, 46596134);
    IF_SETHIDE(1, 46596156);
    IF_SETHIDE(1, 46596170);
    switch (int0) {
        case 1: {
            if ((varbitplayer_21031 == 1)) {
                IF_SETHIDE(0, 46596127);
            } else if ((varbitplayer_21031 == 2)) {
                IF_SETHIDE(0, 46596101);
            } else if ((varbitplayer_21031 == 3)) {
                IF_SETHIDE(0, 46596098);
            };
            script9423(1);
            break;
        }
        case 2: {
            if ((varbitplayer_21031 == 1)) {
                IF_SETHIDE(0, 46596128);
            } else if ((varbitplayer_21031 == 2)) {
                IF_SETHIDE(0, 46596102);
            } else if ((varbitplayer_21031 == 3)) {
                IF_SETHIDE(0, 46596099);
            };
            script9423(2);
            break;
        }
        case 3: {
            if ((varbitplayer_21031 == 1)) {
                IF_SETHIDE(0, 46596129);
            } else if ((varbitplayer_21031 == 2)) {
                IF_SETHIDE(0, 46596103);
            } else if ((varbitplayer_21031 == 3)) {
                IF_SETHIDE(0, 46596100);
            };
            script9423(3);
            break;
        }
        case 4: {
            if ((varbitplayer_21031 == 1)) {
                IF_SETHIDE(0, 46596134);
            } else if ((varbitplayer_21031 == 2)) {
                IF_SETHIDE(0, 46596156);
            } else if ((varbitplayer_21031 == 3)) {
                IF_SETHIDE(0, 46596170);
            };
            script9423(4);
            break;
        }
    };
    return;
}