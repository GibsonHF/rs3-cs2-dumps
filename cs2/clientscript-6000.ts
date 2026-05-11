//
function script6000(): void {
    var int0 = comp(947, 755);
    if ((script6431() == true)) {
        IF_SETPOSITION((IF_GETX(int0) - 30), IF_GETY(int0), 0, 0, int0);
    };
    script2731(comp(947, 733), -1, 3);
    script2731(comp(947, 737), -1, 3);
    script2731(comp(947, 741), -1, 3);
    script2731(comp(947, 745), -1, 3);
    script2731(comp(947, 749), -1, 3);
    script5360(comp(947, 732), 4128 as dbrow);
    script5360(comp(947, 736), 4127 as dbrow);
    script5360(comp(947, 740), 4128 as dbrow);
    script5360(comp(947, 744), 4127 as dbrow);
    script5360(comp(947, 748), 4128 as dbrow);
    IF_SETTEXT(`Death Penalty Reduction +${inttostring(1, 10)}%`, comp(947, 733));
    IF_SETTEXT(`Extra Resource Chance +${inttostring(2, 10)}%`, comp(947, 737));
    IF_SETTEXT(`Skilling XP Boost +${inttostring(1, 10)}%`, comp(947, 741));
    IF_SETTEXT(`Damage Reduction +${inttostring(1, 10)}%`, comp(947, 745));
    IF_SETTEXT(`Floor XP Boost +${inttostring(10, 10)}%`, comp(947, 749));
    IF_SETTEXT(`${inttostring((MAX(varbitplayer_24882, 1) * 1), 10)}%`, comp(947, 734));
    IF_SETCOLOUR(2031360, comp(947, 734));
    IF_SETTEXT(`${inttostring((varbitplayer_24883 * 2), 10)}%`, comp(947, 738));
    if ((varbitplayer_24883 > 0)) {
        IF_SETCOLOUR(2031360, comp(947, 738));
    } else {
        script2731(comp(947, 738), -1, 3);
    };
    IF_SETTEXT(`${inttostring((varbitplayer_24884 * 1), 10)}%`, comp(947, 742));
    if ((varbitplayer_24884 > 0)) {
        IF_SETCOLOUR(2031360, comp(947, 742));
    } else {
        script2731(comp(947, 742), -1, 3);
    };
    IF_SETTEXT(`${inttostring((varbitplayer_24885 * 1), 10)}%`, comp(947, 746));
    if ((varbitplayer_24885 > 0)) {
        IF_SETCOLOUR(2031360, comp(947, 746));
    } else {
        script2731(comp(947, 746), -1, 3);
    };
    IF_SETTEXT(`${inttostring((varbitplayer_24886 * 10), 10)}%`, comp(947, 750));
    if ((varbitplayer_24886 > 0)) {
        IF_SETCOLOUR(2031360, comp(947, 750));
    } else {
        script2731(comp(947, 750), -1, 3);
    };
    var int1 = MIN((varbitplayer_2361 + 1), 60);
    if ((int1 == 60)) {
        int1 = 0;
    };
    switch (MODULO(int1, 5)) {
        case 0: {
            IF_SETCOLOUR(16777215, comp(947, 733));
            script5360(comp(947, 732), 4366 as dbrow);
            break;
        }
        case 1: {
            IF_SETCOLOUR(16777215, comp(947, 737));
            script5360(comp(947, 736), 4366 as dbrow);
            break;
        }
        case 2: {
            IF_SETCOLOUR(16777215, comp(947, 741));
            script5360(comp(947, 740), 4366 as dbrow);
            break;
        }
        case 3: {
            IF_SETCOLOUR(16777215, comp(947, 745));
            script5360(comp(947, 744), 4366 as dbrow);
            break;
        }
        case 4: {
            IF_SETCOLOUR(16777215, comp(947, 749));
            script5360(comp(947, 748), 4366 as dbrow);
            break;
        }
    };
    return;
}