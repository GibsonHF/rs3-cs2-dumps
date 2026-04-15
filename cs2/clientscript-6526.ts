//
function script6526(int0: graphic, int1: vorbis, int2: boolean, int3: boolean, string0: string): void {
    if ((int1 != -1 as vorbis)) {
        SOUND_SPEECH_VOLUME(int1, 1, 0, 255);
    };
    if ((int2 == true)) {
        IF_SETTRANS(255, comp(94, 4));
    } else {
        IF_SETTRANS(0, comp(94, 4));
    };
    if ((int3 == true)) {
        IF_SETTRANS(255, comp(94, 5));
    } else {
        IF_SETTRANS(0, comp(94, 5));
    };
    stack(int0);
    stack(6160388);
    IF_SETGRAPHIC();
    IF_SETTEXT(string0, 6160389);
    script15883();
    return;
}