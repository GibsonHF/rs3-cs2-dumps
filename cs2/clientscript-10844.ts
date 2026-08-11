//
function script10844(): void {
    IF_SETTEXT(inttostring(varbitplayer_3661, 10), comp(1163, 33));  // dom_climber:current_points
    if ((varbitplayer_3661 > 0)) {
        IF_SETTEXT(inttostring((varbitplayer_3661 / 3), 10), comp(1163, 37));  // dom_climber:death_points
    } else {
        IF_SETTEXT(inttostring(varbitplayer_3655, 10), comp(1163, 37));  // dom_climber:death_points
    };
    return;
}