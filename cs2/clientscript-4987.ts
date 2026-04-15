//
function script4987(int0: unknown_int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = -1;
    var int4 = -1;
    var int5 = 0;
    var int6 = script4966(int0);
    if ((CLANPROFILE_FIND() == 1)) {
        int1 = script4949(int6);
        varbitplayer_6677 = int1;
    };
    if (((varbitplayer_6679 == 1) || (varbitplayer_6679 == 2))) {
        [int1, int2, int3, int4, int5] = script4958(int6);
        script4988(varbitplayer_6677);
        script4937();
    } else if (((varbitplayer_6679 == 4) || (varbitplayer_6679 == 3))) {
        varbitplayer_6677 = script4949(int6);
        script4988(varbitplayer_6677);
        script4937();
        script4905();
        script4907();
        varbitplayer_6679 = 1;
        script4899(1);
    };
    return;
}