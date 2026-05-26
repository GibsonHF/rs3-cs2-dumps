//
function script13614(int0: number, int1: number, int2: number): void {
    if ((int1 != -1)) {
        IF_SETHIDE(0, 121307158);
        IF_SETPOSITION(0, (int1 * (32 + 2)), 0, 0, 121307158);
        IF_SETSIZE((5 - 2), (32 + 3), 1, 0, 121307158);
    };
    if ((varplayer_6891 != int0)) {
        SOUND_VORBIS_VOLUME(36961, 1, 0, 100);
    };
    varplayer_6891 = int0;
    script13334(int0, int2);
    return;
}