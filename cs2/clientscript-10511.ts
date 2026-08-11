//
function script10511(int0: number, int1: number, int2: number): void {
    IF_SETTEXT(`${script15116(varplayer_10712, 3)} / ${script15116(int2, 3)}`, comp(1080, 18));  // timed_events:player_progress_right
    IF_SETTEXT(`${script15116(int0, 3)} / ${script15116(int1, 3)}`, comp(1080, 20));  // timed_events:event_progress_right
    var int3 = MIN(SCALE(int0, int1, 100), 100);
    IF_SETSIZE(MAX(1, SCALE(int3, 100, 16384)), 13, 2, 0, comp(1080, 14));  // timed_events:event_progress_bar_fill
    return;
}