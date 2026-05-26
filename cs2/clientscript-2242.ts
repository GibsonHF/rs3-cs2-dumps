//
function script2242(): void {
    SOUND_SYNTH(27502, 3, 0);
    IF_SETTEXT(`Turns taken score: ${inttostring(varplayer_2948, 10)} x 101 = ${inttostring((varplayer_2948 * 101), 10)}`, 60751874);
    IF_SETTEXT(`Resources spare: ${inttostring((varplayer_2962 + (varplayer_2961 + varplayer_2960)), 10)} x -10 = -${inttostring(((varplayer_2962 + (varplayer_2961 + varplayer_2960)) * 10), 10)}`, 60751878);
    if ((varplayer_2948 < 16)) {
        IF_SETTEXT("Completed within turn limit: -100", 60751879);
    } else {
        IF_SETTEXT("Not completed within turn limit: 0", 60751879);
    };
    IF_SETTEXT(`Workers employed: ${inttostring(varplayer_2955, 10)} x -10 = -${inttostring((varplayer_2955 * 10), 10)}`, 60751880);
    IF_SETTEXT(`Turns taken: ${inttostring(varplayer_2948, 10)}`, 60751873);
    if ((varbitplayer_14974 == 0)) {
        IF_SETTEXT("Oven not repaired: 50", 60751875);
    } else {
        IF_SETTEXT("Oven repaired: 0", 60751875);
    };
    if ((varbitplayer_14976 == 0)) {
        IF_SETTEXT("Conveyor not repaired: 50", 60751876);
    } else {
        IF_SETTEXT("Conveyor repaired: 0", 60751876);
    };
    if ((varbitplayer_14975 == 0)) {
        IF_SETTEXT("Painter not repaired: 50", 60751877);
    } else {
        IF_SETTEXT("Painter repaired: 0", 60751877);
    };
    var int0 = 0;
    int0 = (varplayer_2948 * 101);
    if ((varbitplayer_14975 == 0)) {
        int0 = (int0 + 50);
    };
    if ((varbitplayer_14974 == 0)) {
        int0 = (int0 + 50);
    };
    if ((varbitplayer_14976 == 0)) {
        int0 = (int0 + 50);
    };
    int0 = (int0 - ((varplayer_2962 + (varplayer_2961 + varplayer_2960)) * 10));
    if ((varplayer_2948 < 16)) {
        int0 = (int0 - 100);
    };
    int0 = (int0 - (varplayer_2955 * 10));
    if ((int0 < 0)) {
        int0 = 0;
    };
    if ((int0 > 32768)) {
        int0 = 32768;
    };
    if ((int0 == varbitplayer_14989)) {
        IF_SETTEXT(`Final score: ${inttostring(int0, 10)} (New best score)`, 60751872);
    } else {
        IF_SETTEXT(`Final score: ${inttostring(int0, 10)}`, 60751872);
    };
    return;
}