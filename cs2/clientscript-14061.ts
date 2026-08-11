//
function script14061(int0: number): void {
    if ((int0 == 0)) {
        IF_SETGRAPHIC(13214 as graphic, comp(1639, 4));  // slayer_count:slayer_graphic
        IF_SETTEXT(script16090(), comp(1639, 11));  // slayer_count:slayer_target
        IF_SETTEXT(TOSTRING_LOCALISED(script9031(), 1), comp(1639, 10));  // slayer_count:slayer_count
        IF_SETTEXT("Slayer points:", comp(1639, 17));  // slayer_count:slayer_points_text
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_9071, 1), comp(1639, 18));  // slayer_count:slayer_points
        IF_SETTEXT(TOSTRING_LOCALISED(varplayer_10077, 1), comp(1639, 20));  // slayer_count:slayer_task_streak
        IF_SETOP(2, "Reaper", comp(1639, 6));  // slayer_count:graphic_layer
    } else {
        IF_SETGRAPHIC(23991 as graphic, comp(1639, 4));  // slayer_count:slayer_graphic
        IF_SETTEXT(script14060(), comp(1639, 11));  // slayer_count:slayer_target
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_22902, 1), comp(1639, 10));  // slayer_count:slayer_count
        IF_SETTEXT("Reaper points:", comp(1639, 17));  // slayer_count:slayer_points_text
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_22905, 1), comp(1639, 18));  // slayer_count:slayer_points
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_23260, 1), comp(1639, 20));  // slayer_count:slayer_task_streak
        IF_SETOP(2, "Slayer", comp(1639, 6));  // slayer_count:graphic_layer
    };
    IF_SETONMOUSEREPEAT(callback(script11607, -2147483645, int0), comp(1639, 10));  // slayer_count:slayer_count
    return;
}