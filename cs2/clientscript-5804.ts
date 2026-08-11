//
function script5804(): void {
    var string0 = `World ${inttostring(MAX(varbitplayer_35706, varbitplayer_35720), 10)}`;
    IF_SETTEXT(string0, comp(1866, 64));  // sworld_hud:sworld_hud_world_text_label
    string0 = inttostring(varbitplayer_35706, 10);
    IF_SETTEXT(string0, comp(1866, 28));  // sworld_hud:sworld_hud_world_text_reduced
    return;
}