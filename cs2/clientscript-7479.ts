//
function script7479(int0: number, int1: number, int2: number, int3: number): number {
    var string0 = "<col=00ff00>";
    if ((varplayer_679 < int2)) {
        string0 = "<col=ff0000>";
    };
    return script7482(`${string0}${inttostring((int2 / 10), 10)}%</col>`, 14907, -1, `Requires ${inttostring((int2 / 10), 10)}% Adrenaline.`, script7484(int0, int3));
}