//
function script1306(int0: number, int1: number): void {
    if ((int0 == 1)) {
        varclient_3693 = 1;
        varclient_41 = -1;
        script8869();
        if ((varbitplayer_38842 == 1)) {
            script13893(1);
        } else if ((varbitplayer_27169 == 1)) {
            script9944();
        };
        CLIENTOPTION_SET(6, 0);
    } else {
        varclient_3693 = 0;
        varclient_41 = 0;
        script2464();
        script2466();
        CLIENTOPTION_SET(6, script42(varclient_987));
    };
    IF_SETHIDE(int0, 96797553);
    IF_SETHIDE(int0, 96797487);
    IF_SETHIDE(int0, 96797549);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    if ((IF_FIND(96796711) == 1)) {
        CC_SETNOCLICKTHROUGH(int0);
    };
    if (((int0 == 1) && (int1 == 1))) {
        IF_SETHIDE(0, 96796719);
        if ((varclient_4614 == 1)) {
            IF_SETHIDE(1, 96796720);
            IF_SETHIDE(1, 96796721);
        } else if ((script6431() == 1)) {
            IF_SETHIDE(1, 96796720);
            IF_SETHIDE(0, 96796721);
            IF_SETTEXT("Tap here to skip cutscene", 96796721);
            [int2, int2, int3, int4] = script2956();
            IF_SETPOSITION(int3, int4, 2, 2, 96796719);
        } else {
            IF_SETHIDE(0, 96796720);
            IF_SETHIDE(0, 96796721);
            IF_SETTEXT("Skip Cutscene", 96796721);
        };
        script8841(33, 1);
    } else {
        IF_SETHIDE(1, 96796719);
        script8841(33, 0);
    };
    script8702(-1, 9);
    return;
}