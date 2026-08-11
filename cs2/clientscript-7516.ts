//
function script7516(): void {
    IF_SETTEXT("0", comp(1391, 12));  // rand_dnd_overlay:rand_dnd_score
    IF_SETTEXT("-", comp(1391, 11));  // rand_dnd_overlay:rand_dnd_rank
    var string0 = "";
    var string1 = "";
    if ((strcmp(varclient_2704, "") == 0)) {
        string0 = "Resource";
    } else {
        string0 = varclient_2704;
    };
    string1 = `${string0} - Collect ${LOWERCASE(string0)} you find within the sinkhole.`;
    IF_SETTEXT(string0, comp(1391, 18));  // rand_dnd_overlay:skiller_text
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), comp(1391, 26));  // rand_dnd_overlay:objective_1
    IF_SETONMOUSELEAVE(callback(script8805), comp(1391, 26));  // rand_dnd_overlay:objective_1
    IF_SETOBJECT(27318 as obj, -1, comp(1391, 27));  // rand_dnd_overlay:objective_2
    IF_SETOBJECT(27317 as obj, -1, comp(1391, 28));  // rand_dnd_overlay:objective_3
    IF_SETHIDE(true, comp(1391, 15));  // rand_dnd_overlay:objective_1_tick
    IF_SETHIDE(true, comp(1391, 16));  // rand_dnd_overlay:objective_2_tick
    IF_SETHIDE(true, comp(1391, 17));  // rand_dnd_overlay:objective_3_tick
    return;
}