//
function script3639(): void {
    if ((script13749() == 1)) {
        script8179();
    } else {
        IF_SETHIDE(true, comp(634, 262));  // runepass:back_button_arrow
    };
    var int0 = script3609();
    if ((int0 == -1)) {
        return;
    };
    IF_SETSCROLLSIZE(0, 11115, comp(634, 10));  // runepass:scrolling
    IF_SETSIZE(0, (11115 / 2), 1, 0, comp(634, 13));  // runepass:back_parallax_low
    IF_SETSIZE(0, (11115 * 2), 1, 0, comp(634, 17));  // runepass:back_parallax_high
    script3651(int0);
    script3648(varplayer_9078);
    script3661(int0);
    if ((varbitplayer_5058 == 0)) {
        IF_SETHIDE(false, comp(634, 165));  // runepass:welcome
    } else if ((varbitplayer_47502 == 0)) {
        IF_SETHIDE(false, comp(634, 174));  // runepass:tutorial
    };
    IF_SETONTIMER(callback(script15208, int0), comp(634, 44));  // runepass:time_remaining_layer
    script9065();
    script15209(int0);
    return;
}