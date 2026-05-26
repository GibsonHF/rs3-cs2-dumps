//
function script13473(): void {
    IF_SETTEXT(`${inttostring(MIN(varbitplayer_36045, varbitplayer_36046), 10)} / ${inttostring(varbitplayer_36046, 10)}`, 123011076);
    IF_SETTEXT(`${inttostring(MIN(varbitplayer_36025, varbitplayer_36024), 10)} / ${inttostring(varbitplayer_36024, 10)}`, 123011074);
    IF_SETTEXT(`${inttostring(MIN(varbitplayer_36023, varbitplayer_36022), 10)} / ${inttostring(varbitplayer_36022, 10)}`, 123011083);
    if ((varbitplayer_36022 > 0)) {
        IF_SETSIZE(SCALE(varbitplayer_36023, varbitplayer_36022, 90), 14, 0, 0, 123011084);
    } else {
        IF_SETSIZE(0, 14, 0, 0, 123011084);
    };
    IF_SETTEXT(`${inttostring(varbitplayer_36044, 10)} / 3`, 123011104);
    if ((varbitplayer_36033 == 1)) {
        IF_SETTRANS(0, 123011109);
    } else {
        IF_SETTRANS(200, 123011109);
    };
    if ((varbitplayer_36032 == 1)) {
        IF_SETTRANS(0, 123011113);
    } else {
        IF_SETTRANS(200, 123011113);
    };
    if ((varbitplayer_36031 == 1)) {
        IF_SETTRANS(0, 123011108);
    } else {
        IF_SETTRANS(200, 123011108);
    };
    if ((varbitplayer_36030 == 1)) {
        IF_SETTRANS(0, 123011112);
    } else {
        IF_SETTRANS(200, 123011112);
    };
    if ((varbitplayer_36027 == 1)) {
        IF_SETTRANS(0, 123011106);
    } else {
        IF_SETTRANS(200, 123011106);
    };
    if ((varbitplayer_36026 == 1)) {
        IF_SETTRANS(0, 123011110);
    } else {
        IF_SETTRANS(200, 123011110);
    };
    if ((varbitplayer_36029 == 1)) {
        IF_SETTRANS(0, 123011107);
    } else {
        IF_SETTRANS(200, 123011107);
    };
    if ((varbitplayer_36028 == 1)) {
        IF_SETTRANS(0, 123011111);
    } else {
        IF_SETTRANS(200, 123011111);
    };
    return;
}