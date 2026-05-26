//[proc,topstat_prayer_button_update]
function script2303(int0: number, int1: number, int2: number, int3: number): void {
    var string0 = "Turn quick prayers off";
    if ((varbitplayer_5941 == 1)) {
        IF_SETGRAPHIC(int2, int0);
        if ((varbitplayer_16789 == 1)) {
            string0 = "Turn quick curses off";
            IF_SETOP(1, "Turn curses off", int1);
        } else {
            IF_SETOP(1, "Turn prayers off", int1);
        };
    } else {
        string0 = "Turn quick prayers on";
        IF_SETGRAPHIC(int3, int0);
        if ((varbitplayer_16789 == 1)) {
            string0 = "Turn quick curses on";
            IF_SETOP(1, "Turn quick curses on", int1);
        } else {
            IF_SETOP(1, "Turn quick prayers on", int1);
        };
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 93716498);
    IF_SETONMOUSELEAVE(callback(script8805), 93716498);
    script8051(int1);
    if ((script6431() == 1)) {
        script4601();
    };
    return;
}