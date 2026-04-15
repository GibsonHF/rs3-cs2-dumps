//
function script18315(int0: dbrow, int1: unknown_int): void {
    var int2 = 394;
    if ((int1 == 1)) {
        int2 = 395;
        SOUND_VORBIS_VOLUME(21231 as vorbis, 1, 0, 70);
    };
    stack(int2);
    stack(dbrow_getfield(int0, 1085488, 0));
    IF_SETGRAPHIC();
    return;
}