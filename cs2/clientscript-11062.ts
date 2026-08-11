//
function script11062(): void {
    IF_SETTEXT(`Training points: ${inttostring(varbitplayer_27151, 10)}`, comp(1592, 13));  // boss_practice:points_text
    IF_SETONTIMER(callback(script11063), comp(1592, 7));  // boss_practice:progress_bar_container
    return;
}