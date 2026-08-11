//
function script10666(): void {
    IF_SETTEXT(`${inttostring(varbitplayer_25511, 10)}%`, comp(1542, 25));  // hw14_overlay:hw14_fear
    IF_SETTEXT(`${inttostring(varbitplayer_25511, 10)}%`, comp(1542, 26));  // hw14_overlay:hw14_fear_flash
    IF_SETSIZE(SCALE(124, 100, varbitplayer_25511), 6, 0, 0, comp(1542, 29));  // hw14_overlay:bar_fill
    return;
}