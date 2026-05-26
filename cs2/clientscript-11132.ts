//
function script11132(int0: number): void {
    if ((CC_FIND(104857617, int0) == 1)) {
        SOUND_VORBIS_VOLUME(4281, 1, 0, 120);
        script11130(CC_GETGRAPHIC());
        CC_SETHIDE(1);
        script11136("You remove the distraction.");
    };
    return;
}