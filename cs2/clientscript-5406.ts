//
function script5406(int0: number, int1: number): void {
    IF_SETHIDE(1, 76808194);
    IF_SETHIDE(1, 76808197);
    IF_SETHIDE(0, 76808199);
    if ((int0 == 1)) {
        IF_SETTEXT("Yeah! You won!", 76808200);
        switch (RANDOM(2)) {
            case 0: {
                SOUND_VORBIS_VOLUME(7897, 1, 0, 255);
                break;
            }
            case 1: {
                SOUND_VORBIS_VOLUME(7885, 1, 0, 255);
                break;
            }
        };
        if ((((varbitplayer_3655 > 0) || (varbitplayer_3656 > 0)) || (varbitplayer_3659 != 0))) {
            IF_SETTEXT(`You now have a dominion factor of: ${script46(int1, ",")}`, 76808202);
        } else {
            IF_SETTEXT("", 76808202);
        };
    } else {
        IF_SETTEXT("Unlucky, you lost!", 76808200);
        switch (RANDOM(2)) {
            case 0: {
                SOUND_VORBIS_VOLUME(7904, 1, 0, 255);
                break;
            }
            case 1: {
                SOUND_VORBIS_VOLUME(7874, 1, 0, 255);
                break;
            }
        };
        if ((((varbitplayer_3655 > 0) || (varbitplayer_3656 > 0)) || (varbitplayer_3659 != 0))) {
            IF_SETTEXT(`You leave with a dominion factor of: ${script46(int1, ",")}`, 76808202);
        } else {
            IF_SETTEXT("", 76808202);
        };
    };
    return;
}