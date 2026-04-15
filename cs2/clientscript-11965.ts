//
function script11965(int0: int): void {
    if ((CC_FIND(comp(1704, 8), int0) == 1)) {
        SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(5993 as vorbis, 1, 0, 200, 20, 20));
        SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(4368 as vorbis, 1, 0, 200, 20, 20));
        CC_SETHIDE(true);
    };
    return;
}