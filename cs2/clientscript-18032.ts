//
function script18032(int0: component, int1: boolean): void {
    var int2 = 0;
    var string0 = "";
    var string1 = "";
    if ((int1 == true)) {
        int2 = 19;
    } else {
        int2 = 20;
    };
    if ((int1 == false)) {
        IF_SETPOSITION(20, 91, 2, 0, int0);
        SOUND_VORBIS_VOLUME(56684 as vorbis, 1, 0, 80);
        string0 = "Show Track";
        string1 = "Show the reward track.";
    } else {
        IF_SETPOSITION(20, 21, 2, 0, int0);
        SOUND_VORBIS_VOLUME(56682 as vorbis, 1, 0, 70);
        string0 = "Hide Track";
        string1 = "Hide the reward track.";
    };
    CC_DELETEALL(int0);
    script7852(int0, 0, 0, 0, 0, 0, 0, 0, 1, 1, script17989(int2), "");
    CC_SETOP(1, string0);
    CC_SETONOP(callback(script18031));
    script17954(string1, 0);
    if ((IF_FIND(int0) == 1)) {
        cc_setparam(8193, script42(script6430(int1)));
    };
    return;
}