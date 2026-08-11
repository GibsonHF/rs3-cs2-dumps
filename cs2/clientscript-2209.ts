//
function script2209(): void {
    IF_SETTEXT(`Correct ${inttostring(varplayer_2941, 10)}/5`, comp(932, 3));  // easter10_nuts:correct_count
    varclient_1137 = 0;
    IF_SETONTIMER(callback(), comp(932, 1));  // easter10_nuts:content
    IF_SETPOSITION(0, 120, 0, 0, comp(932, 10));  // easter10_nuts:goodstuff1
    IF_SETPOSITION(0, 120, 0, 0, comp(932, 11));  // easter10_nuts:goodstuff2
    IF_SETPOSITION(0, 120, 0, 0, comp(932, 12));  // easter10_nuts:goodstuff3
    IF_SETPOSITION(0, 120, 0, 0, comp(932, 13));  // easter10_nuts:goodstuff4
    IF_SETPOSITION(0, 120, 0, 0, comp(932, 6));  // easter10_nuts:badnut1
    IF_SETPOSITION(0, 120, 0, 0, comp(932, 7));  // easter10_nuts:badnut2
    IF_SETPOSITION(0, 120, 0, 0, comp(932, 8));  // easter10_nuts:badnut3
    IF_SETPOSITION(0, 120, 0, 0, comp(932, 9));  // easter10_nuts:badnut4
    IF_SETHIDE(true, comp(932, 10));  // easter10_nuts:goodstuff1
    IF_SETHIDE(true, comp(932, 11));  // easter10_nuts:goodstuff2
    IF_SETHIDE(true, comp(932, 12));  // easter10_nuts:goodstuff3
    IF_SETHIDE(true, comp(932, 13));  // easter10_nuts:goodstuff4
    IF_SETHIDE(true, comp(932, 6));  // easter10_nuts:badnut1
    IF_SETHIDE(true, comp(932, 7));  // easter10_nuts:badnut2
    IF_SETHIDE(true, comp(932, 8));  // easter10_nuts:badnut3
    IF_SETHIDE(true, comp(932, 9));  // easter10_nuts:badnut4
    return;
}