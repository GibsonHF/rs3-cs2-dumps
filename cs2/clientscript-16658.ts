//
function script16658(int0: number, int1: number, int2: number, int3: number, string0: string, string1: string, string2: string): void {
    var string3 = strconcat(string0, string2);
    if ((script5633(3) == 1)) {
        IF_SETHIDE(0, 64356357);
    };
    if ((int2 != -1)) {
        SOUND_SPEECH_VOLUME(int2, 1, 0, 255);
    };
    if ((int3 == 1)) {
        IF_SETTRANS(255, 6160389);
    } else {
        IF_SETTRANS(0, 6160389);
    };
    IF_SETTEXT(string2, 6160389);
    if ((int1 != -1)) {
        IF_SETNPCHEAD(int1, 64356355);
        IF_SETMODELANIM(int0, 64356355);
        IF_SETTEXT(string1, 64356358);
    } else {
        IF_SETHIDE(1, 64356358);
    };
    printmessage(string3);
    return;
}