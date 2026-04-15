//
function script5406(int0: unknown_int, int1: int): void {
    IF_SETHIDE(true, comp(1172, 2));
    IF_SETHIDE(true, comp(1172, 5));
    IF_SETHIDE(false, comp(1172, 7));
    if ((int0 == 1)) {
        IF_SETTEXT("Yeah! You won!", comp(1172, 8));
        switch (RANDOM(2)) {
            case 0: {
                SOUND_VORBIS_VOLUME(7897 as vorbis, 1, 0, 255);
                break;
            }
            case 1: {
                SOUND_VORBIS_VOLUME(7885 as vorbis, 1, 0, 255);
                break;
            }
        };
        if ((((varbitplayer_3655 > 0) || (varbitplayer_3656 > 0)) || (varbitplayer_3659 != 0))) {
            IF_SETTEXT(`You now have a dominion factor of: ${script46(int1, ",")}`, comp(1172, 10));
        } else {
            IF_SETTEXT("", comp(1172, 10));
        };
    } else {
        IF_SETTEXT("Unlucky, you lost!", comp(1172, 8));
        switch (RANDOM(2)) {
            case 0: {
                SOUND_VORBIS_VOLUME(7904 as vorbis, 1, 0, 255);
                break;
            }
            case 1: {
                SOUND_VORBIS_VOLUME(7874 as vorbis, 1, 0, 255);
                break;
            }
        };
        if ((((varbitplayer_3655 > 0) || (varbitplayer_3656 > 0)) || (varbitplayer_3659 != 0))) {
            IF_SETTEXT(`You leave with a dominion factor of: ${script46(int1, ",")}`, comp(1172, 10));
        } else {
            IF_SETTEXT("", comp(1172, 10));
        };
    };
    return;
}