//
function script410(int0: int): void {
    if ((varclient_1361 == int0)) {
        return;
    };
    IF_SETONVARCTRANSMIT(callback(script410, varclient_1361, 1361, 1), comp(1010, 5));
    if ((varclient_1363 == varbitplayer_5386)) {
        IF_SETHIDE(false, comp(1010, 26));
        IF_SETHIDE(true, comp(1010, 22));
    };
    IF_SETHIDE(true, comp(1010, 31));
    IF_SETHIDE(true, comp(1010, 35));
    IF_SETHIDE(true, comp(1010, 39));
    IF_SETHIDE(true, comp(1010, 43));
    IF_SETHIDE(true, comp(1010, 33));
    IF_SETHIDE(true, comp(1010, 37));
    IF_SETHIDE(true, comp(1010, 41));
    IF_SETHIDE(true, comp(1010, 45));
    if ((varclient_1361 == 0)) {
        IF_SETHIDE(false, comp(1010, 31));
        IF_SETHIDE(false, comp(1010, 37));
        IF_SETHIDE(false, comp(1010, 41));
        IF_SETHIDE(false, comp(1010, 45));
    } else if ((varclient_1361 == 1)) {
        if ((varbitplayer_5387 == 1)) {
            if ((RANDOM(2) == 0)) {
                SOUND_VORBIS_VOLUME(3436 as vorbis, 1, 0, 255);
            } else {
                SOUND_VORBIS_VOLUME(3438 as vorbis, 1, 0, 255);
            };
        };
        IF_SETHIDE(false, comp(1010, 31));
        IF_SETHIDE(false, comp(1010, 35));
        IF_SETHIDE(false, comp(1010, 41));
    } else if ((varclient_1361 == 2)) {
        if ((varbitplayer_5387 == 1)) {
            SOUND_VORBIS_VOLUME(3437 as vorbis, 1, 0, 255);
        };
        IF_SETHIDE(false, comp(1010, 31));
        IF_SETHIDE(false, comp(1010, 35));
        IF_SETHIDE(false, comp(1010, 39));
        IF_SETHIDE(false, comp(1010, 45));
    } else {
        if ((varbitplayer_5387 == 1)) {
            SOUND_VORBIS_VOLUME(3441 as vorbis, 1, 0, 255);
        };
        IF_SETHIDE(false, comp(1010, 31));
        IF_SETHIDE(false, comp(1010, 35));
        IF_SETHIDE(false, comp(1010, 39));
        IF_SETHIDE(false, comp(1010, 43));
    };
    return;
}