//
function script16658(int0: seq, int1: npc, int2: vorbis, int3: boolean, string0: string, string1: string, string2: string): void {
    var string3 = strconcat(string0, string2);
    if ((script5633(3) == 1)) {
        IF_SETHIDE(false, comp(982, 5));
    };
    if ((int2 != -1 as vorbis)) {
        SOUND_SPEECH_VOLUME(int2, 1, 0, 255);
    };
    if ((int3 == true)) {
        IF_SETTRANS(255, comp(94, 5));
    } else {
        IF_SETTRANS(0, comp(94, 5));
    };
    IF_SETTEXT(string2, comp(94, 5));
    if ((int1 != -1 as npc)) {
        IF_SETNPCHEAD(int1, comp(982, 3));
        IF_SETMODELANIM(int0, comp(982, 3));
        IF_SETTEXT(string1, comp(982, 6));
    } else {
        IF_SETHIDE(true, comp(982, 6));
    };
    printmessage(string3);
    return;
}