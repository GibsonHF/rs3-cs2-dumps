//[proc,topstat_prayer_button_update]
function script2303(int0: unknown_int, int1: component, int2: unknown_int, int3: unknown_int): void {
    var string0 = "Turn quick prayers off";
    if ((varbitplayer_5941 == 1)) {
        stack(int2);
        stack(int0);
        IF_SETGRAPHIC();
        if ((varbitplayer_16789 == 1)) {
            string0 = "Turn quick curses off";
            IF_SETOP(1, "Turn curses off", int1);
        } else {
            IF_SETOP(1, "Turn prayers off", int1);
        };
    } else {
        string0 = "Turn quick prayers on";
        stack(int3);
        stack(int0);
        IF_SETGRAPHIC();
        if ((varbitplayer_16789 == 1)) {
            string0 = "Turn quick curses on";
            IF_SETOP(1, "Turn quick curses on", int1);
        } else {
            IF_SETOP(1, "Turn quick prayers on", int1);
        };
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 93716496);
    IF_SETONMOUSELEAVE(callback(script8805), 93716496);
    script8051(int1);
    if ((script6431() == 1)) {
        script4601();
    };
    return;
}