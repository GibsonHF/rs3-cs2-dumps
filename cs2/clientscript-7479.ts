//
function script7479(int0: int, int1: struct, int2: int, int3: unknown_int): int {
    var string0 = "<col=00ff00>";
    if ((varplayer_679 < int2)) {
        string0 = "<col=ff0000>";
    };
    return script7482(`${string0}${inttostring((int2 / 10), 10)}%</col>`, 14907 as graphic, -1 as obj, `Requires ${inttostring((int2 / 10), 10)}% Adrenaline.`, script7484(int0, int3));
}