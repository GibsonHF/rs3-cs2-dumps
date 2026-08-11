//
function script1991(): void {
    if ((varbitplayer_21646 == 1)) {
        IF_SETHIDE(false, comp(1037, 14));  // town_map_vote:vote_1_highlight
        IF_SETHIDE(true, comp(1037, 23));  // town_map_vote:vote_2_highlight
    } else if ((varbitplayer_21646 == 2)) {
        IF_SETHIDE(false, comp(1037, 23));  // town_map_vote:vote_2_highlight
        IF_SETHIDE(true, comp(1037, 14));  // town_map_vote:vote_1_highlight
    };
    IF_SETTEXT(inttostring(varbitplayer_21647, 10), comp(1037, 13));  // town_map_vote:vote_1_count
    IF_SETTEXT(inttostring(varbitplayer_21648, 10), comp(1037, 22));  // town_map_vote:vote_2_count
    return;
}