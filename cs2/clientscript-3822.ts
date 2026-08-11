//
function script3822(): void {
    var int0 = (330 - SEQLENGTH(32033 as seq));
    IF_SETMODELANIM(32033 as seq, comp(641, 44));  // xmas2019_advent:chest
    IF_SETONTIMER(callback(script3823, int0), comp(641, 39));  // xmas2019_advent:claim_panel
    return;
}