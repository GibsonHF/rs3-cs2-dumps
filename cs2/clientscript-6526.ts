//
function script6526(int0: number, int1: number, int2: number, int3: number, string0: string): void {
    if ((int1 != -1)) {
        SOUND_SPEECH_VOLUME(int1, 1, 0, 255);
    };
    if ((int2 == 1)) {
        IF_SETTRANS(255, 6160388);
    } else {
        IF_SETTRANS(0, 6160388);
    };
    if ((int3 == 1)) {
        IF_SETTRANS(255, 6160389);
    } else {
        IF_SETTRANS(0, 6160389);
    };
    IF_SETGRAPHIC(int0, 6160388);
    IF_SETTEXT(string0, 6160389);
    script15883();
    return;
}