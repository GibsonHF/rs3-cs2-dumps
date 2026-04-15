//
function script16192(int0: component): void {
    var string0 = "";
    if ((varbitplayer_52066 > 0)) {
        string0 = `Promotion Keys: <col=F0BE79>${inttostring(varbitplayer_52066, 10)}</col><br>`;
    };
    if ((varbitplayer_4324 > 0)) {
        string0 = `${string0}Daily Keys: <col=F0BE79>${inttostring(varbitplayer_4324, 10)}</col>`;
    } else if ((script16840(script12477(), 0) == 1)) {
        string0 = `${string0}Daily Keys: Daily keys are no longer given.`;
    } else {
        string0 = `${string0}Daily Keys: 0`;
    };
    if ((varbitplayer_4325 > 0)) {
        string0 = `${string0}<br>Earned keys: <col=F0BE79>${inttostring(varbitplayer_4325, 10)}</col>`;
    } else {
        string0 = `${string0}<br>Earned keys: 0`;
    };
    if ((varclient_1800 > 0)) {
        string0 = `${string0}<br>Bought keys: <col=F0BE79>${inttostring(varclient_1800, 10)}</col>`;
    } else {
        string0 = `${string0}<br>Bought keys: 0`;
    };
    if ((script6431() == true)) {
        script426(string0, int0, -1, 0);
    } else {
        script8800(string0, int0, -1);
    };
    return;
}