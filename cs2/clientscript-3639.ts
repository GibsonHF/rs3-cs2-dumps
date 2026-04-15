//
function script3639(): void {
    if ((script13749() == true)) {
        script8179();
    } else {
        IF_SETHIDE(true, comp(634, 262));
    };
    var int0 = script3609();
    if ((int0 == -1 as dbrow)) {
        return;
    };
    IF_SETSCROLLSIZE(0, 11115, comp(634, 10));
    IF_SETSIZE(0, (11115 / 2), 1, 0, comp(634, 13));
    IF_SETSIZE(0, (11115 * 2), 1, 0, comp(634, 17));
    script3651(int0);
    script3648(varplayer_9078);
    script3661(int0);
    if ((varbitplayer_5058 == 0)) {
        IF_SETHIDE(false, comp(634, 165));
    } else if ((varbitplayer_47502 == 0)) {
        IF_SETHIDE(false, comp(634, 174));
    };
    IF_SETONTIMER(callback(script15208, int0), comp(634, 44));
    script9065();
    script15209(int0);
    return;
}