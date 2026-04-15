//
function script13614(int0: cs2enum, int1: int, int2: unknown_int): void {
    if ((int1 != -1)) {
        IF_SETHIDE(false, comp(1851, 22));
        IF_SETPOSITION(0, (int1 * (32 + 2)), 0, 0, comp(1851, 22));
        IF_SETSIZE((5 - 2), (32 + 3), 1, 0, comp(1851, 22));
    };
    if ((varplayer_6891 != int0)) {
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    };
    varplayer_6891 = int0;
    script13334(int0, int2);
    return;
}