//
function script20653(): void {
    var int0 = (varplayer_3870 * varplayer_3869);
    var int1 = (INV_TOTAL(93, 29494) + varbitplayer_23016);
    IF_SETTEXT(script17372(script17400(), 9, 0), 55902247);
    IF_SETTEXT(inttostring(int1, 10), 55902232);
    IF_SETTEXT(inttostring(varbitplayer_23015, 10), 55902254);
    IF_SETTEXT(inttostring(varplayer_3870, 10), 55902244);
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), 55902250);
    IF_SETONVARTRANSMIT(callback(script15377, 3870, 3869, 2), 55902220);
    return;
}