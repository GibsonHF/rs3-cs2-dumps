//
function script18069(int0: number, int1: number): void {
    var int2 = script6431();
    var int3 = 35;
    var int4 = 10;
    var int5 = 15;
    if ((int2 == 1)) {
        int3 = 40;
        int4 = 10;
        int5 = 24;
    };
    script17927();
    if ((script8229(10, int0) > -1)) {
        if ((int2 == 1)) {
            script7862(100, int0, (IF_GETWIDTH(int1) - int3), int4, 0, 0, int5, int5, 0, 0, 7964, "", 1, 1, 1, 1);
        } else {
            script7918(100, int0, (IF_GETWIDTH(int1) - int3), int4, 0, 0, int5, int5, 0, 0, 29401);
        };
        CC_SETOP(2, "Untrack Mission");
        script17954("Untrack Mission", 0);
    } else {
        if ((int2 == 1)) {
            script7862(100, int0, (IF_GETWIDTH(int1) - int3), int4, 0, 0, int5, int5, 0, 0, 7964, "", 1, 1, 1, 0);
        } else {
            script7918(100, int0, (IF_GETWIDTH(int1) - int3), int4, 0, 0, int5, int5, 0, 0, 29246);
        };
        CC_SETOP(2, "Track Mission");
        script17954("Track Mission", 0);
    };
    CC_SETONVARTRANSMIT(callback(script18068, int0, int1, 6901, 6902, 1269, 8738, 8739, 5));
    return;
}