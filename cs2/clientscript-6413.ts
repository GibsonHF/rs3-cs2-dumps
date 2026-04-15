//
function script6413(): void {
    IF_SETTEXT(`Current co-op points: ${inttostring(varbitplayer_520, 10)}`, comp(1308, 895));
    if ((varbitplayer_518 == 1)) {
        script6414(85721804, 1);
    } else if ((varbitplayer_520 < 25)) {
        script6414(85721804, 0);
    };
    if ((script10881(35695 as struct) == 1)) {
        script6414(85721853, 1);
    } else if ((varbitplayer_520 < 50)) {
        script6414(85721853, 0);
    };
    if ((varbitplayer_519 == 1)) {
        script6414(85721885, 1);
    } else if ((varbitplayer_520 < 75)) {
        script6414(85721885, 0);
    };
    if ((TESTBIT(varplayer_1778, MODULO(34, 42)) == 1)) {
        script6414(85721901, 1);
    } else if ((varbitplayer_520 < 100)) {
        script6414(85721901, 0);
    };
    if ((varbitplayer_520 < 5)) {
        script6414(85721772, 0);
        if ((varbitplayer_520 < 10)) {
            script6414(85721788, 0);
        } else if ((script9659() == 0)) {
            script6414(85721788, 1);
        };
    } else {
        if ((script9658() == 0)) {
            script6414(85721772, 1);
        };
        if ((script9659() == 0)) {
            script6414(85721788, 1);
        };
    };
    if ((varbitplayer_21388 == 1)) {
        script6414(85721837, 1);
    } else if ((varbitplayer_520 < 35)) {
        script6414(85721837, 0);
    };
    if ((varbitplayer_21389 == 1)) {
        script6414(85721869, 1);
    } else if ((varbitplayer_520 < 60)) {
        script6414(85721869, 0);
    };
    if ((script10881(35701 as struct) == 1)) {
        script6414(85721965, 1);
    } else if ((varbitplayer_520 < 200)) {
        script6414(85721965, 0);
    };
    if (((varbitplayer_21390 == 1) || (TESTBIT(varplayer_1778, MODULO(34, 42)) == 0))) {
        script6414(85721949, 1);
    } else if ((varbitplayer_520 < 125)) {
        script6414(85721949, 0);
    } else {
        script9660(85721949);
    };
    if (((varbitplayer_21391 == 1) || (TESTBIT(varplayer_1778, MODULO(34, 42)) == 0))) {
        script6414(85721917, 1);
    } else if ((varbitplayer_520 < 125)) {
        script6414(85721917, 0);
    } else {
        script9660(85721917);
    };
    if (((varbitplayer_21392 == 1) || (TESTBIT(varplayer_1778, MODULO(34, 42)) == 0))) {
        script6414(85721933, 1);
    } else if ((varbitplayer_520 < 125)) {
        script6414(85721933, 0);
    } else {
        script9660(85721933);
    };
    if ((varbitplayer_21393 == 1)) {
        script6414(85721820, 1);
    } else if ((varbitplayer_520 < 30)) {
        script6414(85721820, 0);
    };
    return;
}