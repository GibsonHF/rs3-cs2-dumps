//
function script5563(): void {
    var int0 = (varplayer_3870 * varplayer_3869);
    var int1 = (INV_TOTAL(93 as inv, 29494 as obj) + varbitplayer_23016);
    var int2 = script17401();
    IF_SETTEXT(script17372(script17400(), 9, 1), comp(230, 3));
    IF_SETTEXT(inttostring(int1, 10), comp(230, 5));
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3869, 1), comp(230, 0));
    IF_SETTEXT(inttostring(varplayer_3870, 10), comp(230, 26));
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), comp(230, 16));
    if ((int0 > int2)) {
        IF_SETCOLOUR(16711680, comp(230, 16));
    } else {
        IF_SETCOLOUR(16777215, comp(230, 16));
    };
    return;
}