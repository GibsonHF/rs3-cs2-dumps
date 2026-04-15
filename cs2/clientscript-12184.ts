//
function script12184(int0: dbrow): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(dbrow_getfield(int0, 16464, 0), 1, 0, dbrow_getfield(int0, 16480, 0), 20, 20));
    return;
}