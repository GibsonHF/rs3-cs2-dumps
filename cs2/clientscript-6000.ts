//
function script6000(): void {
    var int0 = 62063347;
    if ((script6431() == 1)) {
        IF_SETPOSITION((IF_GETX(int0) - 30), IF_GETY(int0), 0, 0, int0);
    };
    script2731(62063325, -1, 3);
    script2731(62063329, -1, 3);
    script2731(62063333, -1, 3);
    script2731(62063337, -1, 3);
    script2731(62063341, -1, 3);
    script5360(62063324, 4128);
    script5360(62063328, 4127);
    script5360(62063332, 4128);
    script5360(62063336, 4127);
    script5360(62063340, 4128);
    IF_SETTEXT(`Death Penalty Reduction +${inttostring(1, 10)}%`, 62063325);
    IF_SETTEXT(`Extra Resource Chance +${inttostring(2, 10)}%`, 62063329);
    IF_SETTEXT(`Skilling XP Boost +${inttostring(1, 10)}%`, 62063333);
    IF_SETTEXT(`Damage Reduction +${inttostring(1, 10)}%`, 62063337);
    IF_SETTEXT(`Floor XP Boost +${inttostring(10, 10)}%`, 62063341);
    IF_SETTEXT(`${inttostring((MAX(varbitplayer_24882, 1) * 1), 10)}%`, 62063326);
    IF_SETCOLOUR(2031360, 62063326);
    IF_SETTEXT(`${inttostring((varbitplayer_24883 * 2), 10)}%`, 62063330);
    if ((varbitplayer_24883 > 0)) {
        IF_SETCOLOUR(2031360, 62063330);
    } else {
        script2731(62063330, -1, 3);
    };
    IF_SETTEXT(`${inttostring((varbitplayer_24884 * 1), 10)}%`, 62063334);
    if ((varbitplayer_24884 > 0)) {
        IF_SETCOLOUR(2031360, 62063334);
    } else {
        script2731(62063334, -1, 3);
    };
    IF_SETTEXT(`${inttostring((varbitplayer_24885 * 1), 10)}%`, 62063338);
    if ((varbitplayer_24885 > 0)) {
        IF_SETCOLOUR(2031360, 62063338);
    } else {
        script2731(62063338, -1, 3);
    };
    IF_SETTEXT(`${inttostring((varbitplayer_24886 * 10), 10)}%`, 62063342);
    if ((varbitplayer_24886 > 0)) {
        IF_SETCOLOUR(2031360, 62063342);
    } else {
        script2731(62063342, -1, 3);
    };
    var int1 = MIN((varbitplayer_2361 + 1), 60);
    if ((int1 == 60)) {
        int1 = 0;
    };
    switch (MODULO(int1, 5)) {
        case 0: {
            IF_SETCOLOUR(16777215, 62063325);
            script5360(62063324, 4366);
            break;
        }
        case 1: {
            IF_SETCOLOUR(16777215, 62063329);
            script5360(62063328, 4366);
            break;
        }
        case 2: {
            IF_SETCOLOUR(16777215, 62063333);
            script5360(62063332, 4366);
            break;
        }
        case 3: {
            IF_SETCOLOUR(16777215, 62063337);
            script5360(62063336, 4366);
            break;
        }
        case 4: {
            IF_SETCOLOUR(16777215, 62063341);
            script5360(62063340, 4366);
            break;
        }
    };
    return;
}