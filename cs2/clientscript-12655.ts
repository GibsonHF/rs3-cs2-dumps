//
function script12655(): void {
    script12656();
    IF_SETHIDE(false, comp(1776, 30));  // elr1_map:map_contents
    IF_SETHIDE(true, comp(1776, 32));  // elr1_map:map_uncharted
    IF_SETHIDE(true, comp(1776, 76));  // elr1_map:supplies_layer
    if ((varbitplayer_34241 == 1)) {
        IF_SETHIDE(false, comp(1776, 32));  // elr1_map:map_uncharted
        IF_SETHIDE(false, comp(1776, 76));  // elr1_map:supplies_layer
    };
    IF_SETHIDE(true, comp(1776, 10));  // elr1_map:cyclosis
    IF_SETHIDE(true, comp(1776, 9));  // elr1_map:name_cyclosis
    if ((script5257(0) == 1)) {
        IF_SETHIDE(false, comp(1776, 10));  // elr1_map:cyclosis
        IF_SETHIDE(false, comp(1776, 9));  // elr1_map:name_cyclosis
    };
    if ((varplayer_6406 <= 0)) {
        IF_SETHIDE(true, comp(1776, 43));  // elr1_map:voyage_claimed_button
    };
    IF_SETTEXT(`${inttostring(script12651(), 10)} supplies`, comp(1776, 28));  // elr1_map:elr1_supplies
    var string0 = "Nearby islands with 0-1 rare resources (5 supplies)";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1776, 42));  // elr1_map:voyage_short_button
    string0 = "Distant islands with 2-3 rare resources (12 supplies)";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1776, 41));  // elr1_map:voyage_median_button
    string0 = "Remote islands with 3-5 rare resources (20 supplies)";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1776, 40));  // elr1_map:voyage_long_button
    string0 = "Return to your claimed island (3 supplies)";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1776, 43));  // elr1_map:voyage_claimed_button
    string0 = "Show named islands.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1776, 44));  // elr1_map:back_button
    return;
}