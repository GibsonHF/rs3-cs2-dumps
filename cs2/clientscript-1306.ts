//
function script1306(int0: boolean, int1: unknown_int): void {
    if ((int0 == true)) {
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
    IF_SETHIDE(int0, comp(1477, 881));
    IF_SETHIDE(int0, comp(1477, 815));
    IF_SETHIDE(int0, comp(1477, 877));
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    if ((IF_FIND(comp(1477, 39)) == 1)) {
        CC_SETNOCLICKTHROUGH(int0);
    };
    if (((int0 == true) && (int1 == 1))) {
        IF_SETHIDE(false, comp(1477, 47));
        if ((varclient_4614 == 1)) {
            IF_SETHIDE(true, comp(1477, 48));
            IF_SETHIDE(true, comp(1477, 49));
        } else if ((script6431() == true)) {
            IF_SETHIDE(true, comp(1477, 48));
            IF_SETHIDE(false, comp(1477, 49));
            IF_SETTEXT("Tap here to skip cutscene", comp(1477, 49));
            [int2, int2, int3, int4] = script2956();
            IF_SETPOSITION(int3, int4, 2, 2, comp(1477, 47));
        } else {
            IF_SETHIDE(false, comp(1477, 48));
            IF_SETHIDE(false, comp(1477, 49));
            IF_SETTEXT("Skip Cutscene", comp(1477, 49));
        };
        script8841(33, 1);
    } else {
        IF_SETHIDE(true, comp(1477, 47));
        script8841(33, 0);
    };
    script8702(-1, 9);
    return;
}