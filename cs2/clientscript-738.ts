//
function script738(): void {
    var string0 = inttostring((varclient_105 / 10), 10);
    var string1 = inttostring(MODULO(varclient_105, 10), 10);
    IF_SETTEXT(string0, comp(269, 49));  // scab_rune_game:counter_01
    IF_SETTEXT(string1, comp(269, 50));  // scab_rune_game:counter_02
    return;
}