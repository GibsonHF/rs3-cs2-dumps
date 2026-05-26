//
function script410(int0: number): void {
    if ((varclient_1361 == int0)) {
        return;
    };
    IF_SETONVARCTRANSMIT(callback(script410, varclient_1361, 1361, 1), 66191365);
    if ((varclient_1363 == varbitplayer_5386)) {
        IF_SETHIDE(0, 66191386);
        IF_SETHIDE(1, 66191382);
    };
    IF_SETHIDE(1, 66191391);
    IF_SETHIDE(1, 66191395);
    IF_SETHIDE(1, 66191399);
    IF_SETHIDE(1, 66191403);
    IF_SETHIDE(1, 66191393);
    IF_SETHIDE(1, 66191397);
    IF_SETHIDE(1, 66191401);
    IF_SETHIDE(1, 66191405);
    if ((varclient_1361 == 0)) {
        IF_SETHIDE(0, 66191391);
        IF_SETHIDE(0, 66191397);
        IF_SETHIDE(0, 66191401);
        IF_SETHIDE(0, 66191405);
    } else if ((varclient_1361 == 1)) {
        if ((varbitplayer_5387 == 1)) {
            if ((RANDOM(2) == 0)) {
                SOUND_VORBIS_VOLUME(3436, 1, 0, 255);
            } else {
                SOUND_VORBIS_VOLUME(3438, 1, 0, 255);
            };
        };
        IF_SETHIDE(0, 66191391);
        IF_SETHIDE(0, 66191395);
        IF_SETHIDE(0, 66191401);
    } else if ((varclient_1361 == 2)) {
        if ((varbitplayer_5387 == 1)) {
            SOUND_VORBIS_VOLUME(3437, 1, 0, 255);
        };
        IF_SETHIDE(0, 66191391);
        IF_SETHIDE(0, 66191395);
        IF_SETHIDE(0, 66191399);
        IF_SETHIDE(0, 66191405);
    } else {
        if ((varbitplayer_5387 == 1)) {
            SOUND_VORBIS_VOLUME(3441, 1, 0, 255);
        };
        IF_SETHIDE(0, 66191391);
        IF_SETHIDE(0, 66191395);
        IF_SETHIDE(0, 66191399);
        IF_SETHIDE(0, 66191403);
    };
    return;
}