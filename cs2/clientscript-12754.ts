//
function script12754(int0: number, string0: string): void {
    var int1 = comp(1787, 38);  // cruc_dm_overlay:history1_text
    var int2 = comp(1787, 37);  // cruc_dm_overlay:history1_icon
    varclient_5871 = (varclient_5871 + 1);
    if ((varclient_5871 == 3)) {
        varclient_5871 = 0;
    };
    switch (varclient_5871) {
        case 0: {
            int1 = comp(1787, 38);  // cruc_dm_overlay:history1_text
            int2 = comp(1787, 37);  // cruc_dm_overlay:history1_icon
            break;
        }
        case 1: {
            int1 = comp(1787, 40);  // cruc_dm_overlay:history2_text
            int2 = comp(1787, 39);  // cruc_dm_overlay:history2_icon
            break;
        }
        case 2: {
            int1 = comp(1787, 42);  // cruc_dm_overlay:history3_text
            int2 = comp(1787, 41);  // cruc_dm_overlay:history3_icon
            break;
        }
    };
    if ((int1 != comp(-1, 65535))) {
        IF_SETTRANS(0, int1);
        IF_SETTRANS(0, int2);
        IF_SETTEXT(string0, int1);
        IF_SETOBJECT(int0, 1, int2);
        IF_SETONTIMER(callback(script12755, int1, int2, (CLIENTCLOCK() + 500)), int1);
    };
    return;
}