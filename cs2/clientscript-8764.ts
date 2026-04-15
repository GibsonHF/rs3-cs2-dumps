//
function script8764(int0: unknown_int, int1: component): void {
    IF_SETONVARTRANSMIT(callback(script10842, 8176, 1), int1);
    CAM2_SETPOSITIONMODE(1);
    CAM2_SETLOOKATMODE(1);
    if ((varclient_1971 < 1860)) {
        varclient_1971 = (1860 + ((7600 - 1860) / 2));
    };
    if (((varclient_2827 < 100) || (varclient_2827 > 250))) {
        varclient_2827 = (100 + ((250 - 100) / 2));
    };
    if (((varclient_2828 < 70) || (varclient_2828 > 200))) {
        varclient_2828 = (70 + ((200 - 70) / 2));
    };
    if (((varclient_2829 < 4) || (varclient_2829 > 24))) {
        varclient_2829 = (4 + ((24 - 4) / 2));
    };
    if (((varclient_2830 < 3) || (varclient_2830 > 23))) {
        varclient_2830 = (3 + ((23 - 3) / 2));
    };
    if (((varclient_6565 < 0) || (varclient_6565 > 350))) {
        varclient_6565 = (0 + ((350 - 0) / 2));
    };
    if (((varclient_6954 < 4) || (varclient_6954 > 16))) {
        varclient_6954 = (4 + ((16 - 4) / 2));
    };
    if (((varclient_6955 < 3) || (varclient_6955 > 15))) {
        varclient_6955 = (3 + ((15 - 3) / 2));
    };
    IF_SETONOP(callback(script8770, -2147483644), int1);
    IF_SETONMOUSEREPEAT(callback(script8773, -2147483645, -2147483647, -2147483646, -1, -1, -1), int0);
    IF_SETONSCROLLWHEEL(callback(script8774, -2147483646), int0);
    script14184(int0);
    script724();
    return;
}