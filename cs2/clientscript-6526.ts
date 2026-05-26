//
function script6526(int0: number, int1: number, int2: number, int3: number, string0: string): void {
    if ((int1 != -1 as vorbis)) {
        SOUND_SPEECH_VOLUME(int1, 1, 0, 255);
    };
    if ((int2 == 1)) {
        IF_SETTRANS(255, comp(94, 4));
    } else {
        IF_SETTRANS(0, comp(94, 4));
    };
    if ((int3 == 1)) {
        IF_SETTRANS(255, comp(94, 5));
    } else {
        IF_SETTRANS(0, comp(94, 5));
    };
    IF_SETGRAPHIC(int0, comp(94, 4));
    IF_SETTEXT(string0, comp(94, 5));
    script15883();
    return;
}