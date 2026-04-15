//
function script6406(): void {
    IF_SETTEXT(`Current points: ${inttostring(varbitplayer_9071, 10)}`, comp(1308, 895));
    if (((varbitplayer_25046 == 0) && (varbitplayer_9071 < 100))) {
        script6414(85721220, 0);
    };
    if (((STAT_BASE(18 as stat) < 99) || (varbitplayer_36286 < 3))) {
        script6414(85721308, 0);
    };
    if ((varbitplayer_58313 == 1)) {
        script6414(85721325, 1);
    } else if (((((STAT_BASE(18 as stat) < 99) || (varbitplayer_36286 < 3)) || (varbitplayer_9071 < 3000)) || (varbitplayer_58246 < 138))) {
        script6414(85721325, 0);
    };
    if ((((varbitplayer_36284 == 0) && (varbitplayer_9071 < 1000)) || ((varbitplayer_36284 == 1) && (varbitplayer_9071 < 100)))) {
        script6414(85721290, 0);
        if ((((varbitplayer_21751 == 0) && (varbitplayer_9071 < 600)) || ((varbitplayer_21751 == 1) && (varbitplayer_9071 < 60)))) {
            script6414(85721272, 0);
            if ((((varbitplayer_21750 == 0) && (varbitplayer_9071 < 400)) || ((varbitplayer_21750 == 1) && (varbitplayer_9071 < 40)))) {
                script6414(85721255, 0);
                script6414(85721237, 0);
                if ((((varbitplayer_21749 == 0) && (varbitplayer_9071 < 100)) || ((varbitplayer_21749 == 1) && (varbitplayer_9071 < 10)))) {
                    script6414(85721202, 0);
                    if ((varbitplayer_9071 < 75)) {
                        script6414(85721185, 0);
                        if ((varbitplayer_9071 < 35)) {
                            script6414(85721167, 0);
                            script6414(85721150, 0);
                            script6414(85721133, 0);
                        };
                        if ((varbitplayer_9071 < 20)) {
                            script6414(85721308, 0);
                        };
                    };
                } else if ((script6991() == 0)) {
                    script6414(85721202, 1);
                } else {
                    script9660(85721202);
                };
            } else {
                if ((script9656() == 0)) {
                    script6414(85721237, 1);
                } else {
                    script9660(85721237);
                };
                if ((script6991() == 0)) {
                    script6414(85721202, 1);
                } else {
                    script9660(85721202);
                };
            };
        } else {
            if (((script9657() == 0) || (STAT_BASE(1 as stat) < 70))) {
                script6414(85721272, 1);
            } else {
                script9660(85721272);
            };
            if ((script9656() == 0)) {
                script6414(85721237, 1);
            } else {
                script9660(85721237);
            };
            if ((script6991() == 0)) {
                script6414(85721202, 1);
            } else {
                script9660(85721202);
            };
        };
    } else {
        if (((script13483() == 0) || (STAT_BASE(1 as stat) < 70))) {
            script6414(85721290, 1);
        } else {
            script9660(85721290);
        };
        if (((script9657() == 0) || (STAT_BASE(1 as stat) < 70))) {
            script6414(85721272, 1);
        } else {
            script9660(85721272);
        };
        if (((script9656() == 0) || (STAT_BASE(1 as stat) < 50))) {
            script6414(85721237, 1);
        } else {
            script9660(85721237);
        };
        if (((script6991() == 0) || (STAT_BASE(1 as stat) < 30))) {
            script6414(85721202, 1);
        } else {
            script9660(85721202);
        };
    };
    IF_SETHIDE(false, comp(1308, 896));
    script7791(comp(1308, 896), comp(1308, 44));
    IF_SETOBJECT(19675 as obj, -1, comp(1308, 479));
    IF_SETOBJECT(31188 as obj, -1, comp(1308, 495));
    return;
}