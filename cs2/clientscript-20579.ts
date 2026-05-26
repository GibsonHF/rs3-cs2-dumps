//
function script20579(): void {
    IF_SETHIDE(1, 97321033);
    if ((varplayer_12584 == 0)) {
        return;
    };
    switch (RANDOM(6)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59067, 1, 0, 150, 15, 15));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59068, 1, 0, 150, 15, 15));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59069, 1, 0, 150, 15, 15));
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59070, 1, 0, 150, 15, 15));
            break;
        }
        case 4: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59071, 1, 0, 150, 15, 15));
            break;
        }
        case 5: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59072, 1, 0, 150, 15, 15));
            break;
        }
    };
    SOUND_VORBIS_VOLUME(7651, 1, 20, 180);
    var int0 = script20577();
    IF_CREATECHILD(4, UI_GETCATEGORY(int0), UI_GETDYNID(int0), 97320962);
    IF_TRIGGEROP(97320962, int0, 1);
    if ((CC_FINDBYCATEGORY(97320962, UI_GETCATEGORY(int0), UI_GETDYNID(int0)) == 1)) {
        CC_DELETE();
    };
    return;
}