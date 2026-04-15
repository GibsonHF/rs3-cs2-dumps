//
function script10753(): void {
    var string0 = "";
    if ((varbitplayer_25926 > 0)) {
        string0 = strconcat(string0, "Checkpoint: ");
        string0 = strconcat(string0, `${inttostring(varbitplayer_25926, 10)}/${inttostring(6, 10)}<br>`);
    };
    var string1 = inttostring(varbitplayer_25932, 10);
    if ((varbitplayer_25015 == 1)) {
        string1 = "200+";
    };
    string0 = strconcat(string0, "Completed laps: ");
    string0 = strconcat(string0, string1);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 101580804);
    IF_SETONTIMER(callback(script10921), 101580804);
    return;
}