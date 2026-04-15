//
function script18070(int0: int, int1: component, int2: int, int3: component): void {
    SOUND_VORBIS_VOLUME(56684 as vorbis, 1, 0, 100);
    script18071(int0, int1, int2);
    if ((CC_FINDBYCATEGORY(int3, int0, 200) == 1)) {
        script18048(int0, 0);
        CC_DELETE();
    };
    return;
}