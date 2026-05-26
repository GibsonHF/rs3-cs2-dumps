//
function script10552(int0: number): void {
    var int0 = MIN(100, int0);
    int0 = MAX(0, int0);
    var string0 = "";
    if ((int0 == 0)) {
        string0 = "??? Vis";
    } else if ((varbitplayer_49327 == 1)) {
        string0 = `${inttostring(int0, 10)} (+${inttostring(int0, 10)}) Vis`;
    } else {
        string0 = `${inttostring(int0, 10)} Vis`;
    };
    script4212(100401189, string0, 26, 16777215, 0);
    return;
}