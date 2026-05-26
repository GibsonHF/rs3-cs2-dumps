//
function script13473(): void {
    IF_SETTEXT(`${inttostring(MIN(varbitplayer_36045, varbitplayer_36046), 10)} / ${inttostring(varbitplayer_36046, 10)}`, comp(1877, 4));
    IF_SETTEXT(`${inttostring(MIN(varbitplayer_36025, varbitplayer_36024), 10)} / ${inttostring(varbitplayer_36024, 10)}`, comp(1877, 2));
    IF_SETTEXT(`${inttostring(MIN(varbitplayer_36023, varbitplayer_36022), 10)} / ${inttostring(varbitplayer_36022, 10)}`, comp(1877, 11));
    if ((varbitplayer_36022 > 0)) {
        IF_SETSIZE(SCALE(varbitplayer_36023, varbitplayer_36022, 90), 14, 0, 0, comp(1877, 12));
    } else {
        IF_SETSIZE(0, 14, 0, 0, comp(1877, 12));
    };
    IF_SETTEXT(`${inttostring(varbitplayer_36044, 10)} / 3`, comp(1877, 32));
    if ((varbitplayer_36033 == 1)) {
        IF_SETTRANS(0, comp(1877, 37));
    } else {
        IF_SETTRANS(200, comp(1877, 37));
    };
    if ((varbitplayer_36032 == 1)) {
        IF_SETTRANS(0, comp(1877, 41));
    } else {
        IF_SETTRANS(200, comp(1877, 41));
    };
    if ((varbitplayer_36031 == 1)) {
        IF_SETTRANS(0, comp(1877, 36));
    } else {
        IF_SETTRANS(200, comp(1877, 36));
    };
    if ((varbitplayer_36030 == 1)) {
        IF_SETTRANS(0, comp(1877, 40));
    } else {
        IF_SETTRANS(200, comp(1877, 40));
    };
    if ((varbitplayer_36027 == 1)) {
        IF_SETTRANS(0, comp(1877, 34));
    } else {
        IF_SETTRANS(200, comp(1877, 34));
    };
    if ((varbitplayer_36026 == 1)) {
        IF_SETTRANS(0, comp(1877, 38));
    } else {
        IF_SETTRANS(200, comp(1877, 38));
    };
    if ((varbitplayer_36029 == 1)) {
        IF_SETTRANS(0, comp(1877, 35));
    } else {
        IF_SETTRANS(200, comp(1877, 35));
    };
    if ((varbitplayer_36028 == 1)) {
        IF_SETTRANS(0, comp(1877, 39));
    } else {
        IF_SETTRANS(200, comp(1877, 39));
    };
    return;
}