//[clientscript,topstat_prayer_custom]
function script2299(int0: unknown_int, int1: component, int2: unknown_int, int3: unknown_int): void {
    if ((varclient_181 == true)) {
        if ((varbitplayer_16789 == 1)) {
            IF_CLEAROPS(int1);
            IF_SETOP(2, "Finish quick curse selection", int1);
        } else {
            IF_CLEAROPS(int1);
            IF_SETOP(2, "Finish quick prayer selection", int1);
        };
        if ((varbitplayer_5941 == 1)) {
            if ((varbitplayer_16789 == 1)) {
                IF_SETOP(1, "Turn curses off", int1);
            } else {
                IF_SETOP(1, "Turn prayers off", int1);
            };
        } else if ((varbitplayer_16789 == 1)) {
            IF_SETOP(1, "Turn quick curses on", int1);
        } else {
            IF_SETOP(1, "Turn quick prayers on", int1);
        };
    } else {
        script8051(int1);
        if ((varbitplayer_16789 == 1)) {
            IF_SETOP(2, "Select quick curses", int1);
        } else {
            IF_SETOP(2, "Select quick prayers", int1);
        };
    };
    script2303(int0, int1, int2, int3);
    return;
}