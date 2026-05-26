//
function script20653(): void {
    var int0 = (varplayer_3870 * varplayer_3869);
    var int1 = (INV_TOTAL(93 as inv, 29494 as obj) + varbitplayer_23016);
    IF_SETTEXT(script17372(script17400(), 9, 0), comp(853, 39));
    IF_SETTEXT(inttostring(int1, 10), comp(853, 24));
    IF_SETTEXT(inttostring(varbitplayer_23015, 10), comp(853, 46));
    IF_SETTEXT(inttostring(varplayer_3870, 10), comp(853, 36));
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), comp(853, 42));
    IF_SETONVARTRANSMIT(callback(script15377, 3870, 3869, 2), comp(853, 12));
    return;
}