//
function script1987(): void {
    IF_SETTEXT("Select next map: 10s", comp(1037, 25));  // town_map_vote:time_remaining_text
    IF_SETCOLOUR(15458750, comp(1037, 25));  // town_map_vote:time_remaining_text
    IF_SETONTIMER(callback(script1988, (CLIENTCLOCK() + 500)), comp(1037, 25));  // town_map_vote:time_remaining_text
    return;
}