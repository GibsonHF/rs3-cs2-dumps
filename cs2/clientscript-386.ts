//
function script386(): void {
    if ((varbitplayer_39010 == 1)) {
        IF_SETHIDE(true, comp(1820, 124));  // quest_endgame_replay:interactions_disabled
    } else {
        IF_SETHIDE(false, comp(1820, 124));  // quest_endgame_replay:interactions_disabled
    };
    return;
}