//
function script15071(int0: number): void {
    if ((int0 == varplayer_9078)) {
        if ((script8229(9, 0) > -1)) {
            IF_SETOP(2, "Untrack", comp(634, 66));  // runepass:task_a_info
            IF_SETGRAPHIC(29401 as graphic, comp(634, 67));  // runepass:task_a_track_button
        } else {
            IF_SETOP(2, "Track", comp(634, 66));  // runepass:task_a_info
            IF_SETGRAPHIC(29246 as graphic, comp(634, 67));  // runepass:task_a_track_button
        };
        if ((script8229(9, 1) > -1)) {
            IF_SETOP(2, "Untrack", comp(634, 73));  // runepass:task_b_info
            IF_SETGRAPHIC(29401 as graphic, comp(634, 74));  // runepass:task_b_track_button
        } else {
            IF_SETOP(2, "Track", comp(634, 73));  // runepass:task_b_info
            IF_SETGRAPHIC(29246 as graphic, comp(634, 74));  // runepass:task_b_track_button
        };
    } else {
        IF_SETOP(2, "", comp(634, 66));  // runepass:task_a_info
        IF_SETOP(2, "", comp(634, 73));  // runepass:task_b_info
    };
    return;
}