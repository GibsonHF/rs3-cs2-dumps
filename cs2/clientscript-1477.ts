//
function script1477(): void {
    var string0 = "";
    if ((varbitplayer_464 == 0)) {
        string0 = "Quick task:";
    } else {
        string0 = "Large task:";
    };
    script9554(comp(766, 1), comp(766, 21), comp(766, 2), string0, 21259 as struct);
    IF_SETTEXT(`${inttostring(varbitplayer_459, 10)} / ${inttostring(((varbitplayer_451 + 1) * 5), 10)}`, comp(766, 5));
    IF_SETTEXT(`${inttostring(varbitplayer_460, 10)} / ${inttostring(((varbitplayer_452 + 1) * 5), 10)}`, comp(766, 8));
    IF_SETTEXT(`${inttostring(varbitplayer_461, 10)} / ${inttostring(((varbitplayer_453 + 1) * 5), 10)}`, comp(766, 11));
    IF_SETTEXT(`${inttostring(varbitplayer_462, 10)} / ${inttostring(((varbitplayer_454 + 1) * 5), 10)}`, comp(766, 14));
    IF_SETTEXT(`${inttostring(varbitplayer_463, 10)} / ${inttostring(((varbitplayer_455 + 1) * 5), 10)}`, comp(766, 17));
    IF_SETTEXT(`${inttostring(varbitplayer_465, 10)} / ${inttostring(((varbitplayer_456 + 1) * 5), 10)}`, comp(766, 20));
    return;
}