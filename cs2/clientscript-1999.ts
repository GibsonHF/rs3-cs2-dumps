//
function script1999(int0: component, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int): void {
    var int7 = varplayer_1749;
    var int8 = varplayer_1750;
    var int9 = varplayer_1751;
    var int10 = varplayer_1752;
    if (((int1 == 0) && ((((int8 != 0) || (int9 != 0)) || (int10 != 0)) || (varplayer_1749 != 0)))) {
        var int1 = 1;
    };
    if ((int1 == 1)) {
        if ((varclient_1745 == true)) {
            if ((VIDEO_ADVERT_HAS_FINISHED() == 0)) {
            } else {
            };
            if ((VIDEO_ADVERT_HAS_FINISHED() == 1)) {
                script1299();
                IF_SETONTIMER(callback(), int0);
                DETAIL_SOUNDVOL(int2);
                stack(int4);
                DETAIL_BGSOUNDVOL();
                stack(int5);
                DETAIL_SPEECHVOL();
                stack(int6);
                DETAIL_LOGINVOL();
                varclient_1745 = 0;
                return;
            };
        } else {
            if ((((PLAYERMEMBER() == false) && (int9 > 0)) && (int9 < int10))) {
                if ((VIDEO_ADVERT_PLAY(5) == 1)) {
                } else {
                };
                varclient_1745 = true;
                script5874();
                return;
            };
            if ((DATE_RUNEDAY() <= (int7 + 30))) {
                if ((VIDEO_ADVERT_PLAY(1) == 1)) {
                } else {
                };
                varclient_1745 = true;
                script5874();
            } else if ((DATE_RUNEDAY() <= (int7 + 182))) {
                if ((VIDEO_ADVERT_PLAY(2) == 1)) {
                } else {
                };
                varclient_1745 = true;
                script5874();
            } else if ((DATE_RUNEDAY() <= (int7 + 365))) {
                if ((VIDEO_ADVERT_PLAY(3) == 1)) {
                } else {
                };
                varclient_1745 = true;
                script5874();
            } else {
                if ((VIDEO_ADVERT_PLAY(4) == 1)) {
                } else {
                };
                varclient_1745 = true;
                script5874();
            };
        };
    };
    return;
}