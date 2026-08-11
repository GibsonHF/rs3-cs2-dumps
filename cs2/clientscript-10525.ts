//
function script10525(): void {
    if ((varbitplayer_39009 == 2)) {
        IF_SETHIDE(true, comp(1820, 58));  // quest_endgame_replay:canon_checkbox
        IF_SETHIDE(true, comp(1820, 74));  // quest_endgame_replay:canon_text
    };
    IF_SETHIDE(true, comp(1820, 122));  // quest_endgame_replay:interactions_selected
    IF_SETHIDE(false, comp(1820, 106));  // quest_endgame_replay:options_selected
    IF_SETHIDE(true, comp(1820, 114));  // quest_endgame_replay:choices_selected
    IF_SETHIDE(true, comp(1820, 56));  // quest_endgame_replay:choices
    IF_SETHIDE(true, comp(1820, 63));  // quest_endgame_replay:interaction
    IF_SETHIDE(false, comp(1820, 57));  // quest_endgame_replay:options
    return;
}