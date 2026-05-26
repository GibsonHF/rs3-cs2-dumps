//
function script2414(): void {
    if ((varbitplayer_13734 == 120)) {
        IF_SETHIDE(0, 50135045);
        IF_SETHIDE(1, 50135044);
        if ((INV_TOTAL(93, 14831) == 0)) {
            IF_SETHIDE(1, 50135060);
        };
        if (((INV_TOTAL(93, 14824) == 0) && (INV_TOTAL(94, 14824) == 0))) {
            IF_SETHIDE(1, 50135066);
        };
        if ((INV_TOTAL(93, 14830) == 0)) {
            IF_SETHIDE(1, 50135064);
        };
        if (((INV_TOTAL(93, 14823) == 0) && (INV_TOTAL(94, 14823) == 0))) {
            IF_SETHIDE(1, 50135065);
        };
        if ((INV_TOTAL(93, 14829) == 0)) {
            IF_SETHIDE(1, 50135063);
        };
        if ((INV_TOTAL(93, 14828) == 0)) {
            IF_SETHIDE(1, 50135062);
        };
        if ((INV_TOTAL(93, 14827) == 0)) {
            IF_SETHIDE(1, 50135061);
        };
    } else {
        IF_SETHIDE(1, 50135045);
        IF_SETHIDE(0, 50135044);
    };
    IF_SETMODELANIM(-1, 50135051);
    IF_SETHIDE(0, 50135052);
    IF_SETMODEL(46967, 50135046);
    IF_SETMODELANIM(11762, 50135051);
    IF_SETHIDE(1, 50135058);
    IF_SETHIDE(0, 50135059);
    IF_SETHIDE(1, 50135047);
    IF_SETHIDE(0, 50135057);
    IF_SETMODELANIM(-1, 50135059);
    IF_SETHIDE(1, 50135068);
    IF_SETHIDE(1, 50135067);
    IF_SETHIDE(1, 50135048);
    varclient_805 = 0;
    varclient_806 = 0;
    return;
}