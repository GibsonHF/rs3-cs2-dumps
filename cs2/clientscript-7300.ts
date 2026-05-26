//
function script7300(): void {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script4187();
    var string0 = "";
    if ((int0 == 0)) {
        string0 = `${inttostring(int1, 10)}m`;
    } else {
        string0 = `${inttostring(int0, 10)}h`;
    };
    if ((varbitplayer_17461 > 0)) {
        IF_SETTEXT(`Rerolls available: ${inttostring(varbitplayer_17461, 10)}`, comp(1276, 102));
    } else {
        IF_SETTEXT(`New crew in ${string0}`, comp(1276, 102));
    };
    script13993(83624041, -1, 28556, `Add 5 Rerolls (${inttostring(varbitplayer_17420, 10)})`);
    script13994(83624042, -1, 28556, `Add 5 Rerolls (${inttostring(varbitplayer_17420, 10)})`, 1);
    script1137();
    return;
}