//
function script11783(int0: int): void {
    if ((CC_FIND(comp(1667, 5), int0) == 1)) {
        SOUND_VORBIS_VOLUME(4281 as vorbis, 1, 0, 120);
        script11130(CC_GETGRAPHIC());
        CC_SETHIDE(true);
    };
    return;
}