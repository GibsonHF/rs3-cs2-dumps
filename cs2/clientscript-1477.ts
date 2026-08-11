//
function script1477(): void {
    var string0 = "";
    if ((varbitplayer_464 == 0)) {
        string0 = "Quick task:";
    } else {
        string0 = "Large task:";
    };
    script9554(50200577, 50200597, 50200578, string0, 21259);
    IF_SETTEXT(`${inttostring(varbitplayer_459, 10)} / ${inttostring(((varbitplayer_451 + 1) * 5), 10)}`, comp(766, 5));  // wc_update09_sawmill_overlay:short_cut_text
    IF_SETTEXT(`${inttostring(varbitplayer_460, 10)} / ${inttostring(((varbitplayer_452 + 1) * 5), 10)}`, comp(766, 8));  // wc_update09_sawmill_overlay:long_cut_text
    IF_SETTEXT(`${inttostring(varbitplayer_461, 10)} / ${inttostring(((varbitplayer_453 + 1) * 5), 10)}`, comp(766, 11));  // wc_update09_sawmill_overlay:diagonal_cut_text
    IF_SETTEXT(`${inttostring(varbitplayer_462, 10)} / ${inttostring(((varbitplayer_454 + 1) * 5), 10)}`, comp(766, 14));  // wc_update09_sawmill_overlay:tooth_cut_text
    IF_SETTEXT(`${inttostring(varbitplayer_463, 10)} / ${inttostring(((varbitplayer_455 + 1) * 5), 10)}`, comp(766, 17));  // wc_update09_sawmill_overlay:groove_cut_text
    IF_SETTEXT(`${inttostring(varbitplayer_465, 10)} / ${inttostring(((varbitplayer_456 + 1) * 5), 10)}`, comp(766, 20));  // wc_update09_sawmill_overlay:curved_cut_text
    return;
}