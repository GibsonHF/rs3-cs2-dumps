//
function script3639(): void {
    if ((script13749() == 1)) {
        script8179();
    } else {
        IF_SETHIDE(1, 41550086);
    };
    var int0 = script3609();
    if ((int0 == -1)) {
        return;
    };
    IF_SETSCROLLSIZE(0, 11115, 41549834);
    IF_SETSIZE(0, (11115 / 2), 1, 0, 41549837);
    IF_SETSIZE(0, (11115 * 2), 1, 0, 41549841);
    script3651(int0);
    script3648(varplayer_9078);
    script3661(int0);
    if ((varbitplayer_5058 == 0)) {
        IF_SETHIDE(0, 41549989);
    } else if ((varbitplayer_47502 == 0)) {
        IF_SETHIDE(0, 41549998);
    };
    IF_SETONTIMER(callback(script15208, int0), 41549868);
    script9065();
    script15209(int0);
    return;
}