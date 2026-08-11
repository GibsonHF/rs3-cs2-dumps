//
function script1220(): void {
    var int0 = ((varplayer_9468 * 60) / 100);
    var int1 = (int0 / 60);
    var int2 = MODULO(int0, 60);
    IF_SETTEXT(script5729(-1, int1, int2, 0, 0), comp(180, 5));  // general_use_countdown_timer:time_remaining
    return;
}