//
function script17997(int0: number): void {
    if ((script17880(7906) == 0)) {
        return;
    };
    IF_SETHIDE(false, comp(1227, 46));  // bp3_track_tab:claim_all_layer
    IF_SETONVARTRANSMIT(callback(script17998, int0, 11341, 11342, 11343, 11344, 11345, 11340, 11347, 7), comp(1227, 62));  // bp3_track_tab:claim_all_window
    script17982(100);
    script17946(80412743, 1, 0, 0, 0, 0, 0, 0, 1, 1, 7930);
    script17946(80412751, 1, 0, 0, 0, 0, 0, 0, 1, 1, 7929);
    CC_DELETEALL(comp(1227, 64));  // bp3_track_tab:claim_all_button
    script7852(80412736, 1, 0, 0, 0, 0, 0, 0, 1, 1, script17989(26), "<col=E0D471>Claim All</col>");
    CC_SETTEXTFONT(57 as fontmetrics);
    CC_SETOP(1, "Claim All");
    CC_DELETEALL(comp(1227, 66));  // bp3_track_tab:claim_all_back_button
    var string0 = "Back";
    if ((MAP_LANG() == 0)) {
        string0 = "Back to Track";
    };
    script7852(80412738, 1, 0, 0, 0, 0, 0, 0, 1, 1, script17989(24), `<col=E0D471>${string0}</col>`);
    CC_SETOP(1, string0);
    CC_SETONOP(callback(script17996));
    CC_SETTEXTFONT(57 as fontmetrics);
    CC_DELETEALL(comp(1227, 65));  // bp3_track_tab:claim_all_upgrade_button
    var int1 = script17989(27);
    if ((varplayer_11339 == script17854())) {
        int1 = 8376;
    };
    if ((script17865(int0) == 0)) {
        script7852(80412737, 1, 0, 0, 0, 0, 0, 0, 1, 1, int1, "");
        CC_SETOP(1, "Purchase Premier Hero Pass");
        script2995(80412737, 2, 0, 0, 0, 2, 0, 80, 1, 0, 2195, "Purchase Premier Hero Pass");
        CC_SETTEXTFONT(57 as fontmetrics);
        CC_SETCOLOUR(14734449);
        CC_SETTEXTALIGN(1, 0, 0);
        CC_SETTEXTSHADOW(true);
    };
    return;
}