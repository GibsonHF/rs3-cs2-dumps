//
function script13079(int0: number, int1: number): void {
    if ((int0 == 1)) {
        CC_CREATE(119865349, 3, IF_GETNEXTSUBID(119865349));
        CC_SETSIZE(8, 8, 0, 0);
        CC_SETCOLOUR(8421504);
        CC_SETFILL(1);
        CC_SETPOSITION(((int1 * 10) + 10), ((varbitplayer_35053 * 23) + 13), 0, 2);
        SOUND_VORBIS_VOLUME(22035, 1, ((int1 * 10) + 10), 175);
    } else if ((int0 == 2)) {
        CC_CREATE(119865349, 3, IF_GETNEXTSUBID(119865349));
        CC_SETSIZE(8, 8, 0, 0);
        CC_SETCOLOUR(16777215);
        CC_SETFILL(1);
        CC_SETPOSITION(((int1 * 10) + 10), ((varbitplayer_35053 * 23) + 13), 0, 2);
        SOUND_VORBIS_VOLUME(22038, 1, ((int1 * 10) + 10), 175);
    };
    return;
}