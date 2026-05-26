//
function script7665(int0: number): void {
    var int1 = 0;
    if ((int0 == 1)) {
        int1 = ((PARAHEIGHT(varclient_2758, IF_GETWIDTH(92078092), 26) * 12) + 12);
        if ((int1 < IF_GETHEIGHT(92078081))) {
            IF_SETHIDE(1, 92078093);
        } else {
            IF_SETHIDE(0, 92078093);
        };
        IF_SETSCROLLSIZE(IF_GETSCROLLWIDTH(92078081), int1, 92078081);
        script31(92078093, 92078081, 7900, 7897, 7898, 7899, 7902, 7901);
        script958(92078092, 92078095, varclient_2758, int0);
    } else if ((int0 == 2)) {
        int1 = ((PARAHEIGHT(varclient_2759, IF_GETWIDTH(92078106), 26) * 12) + 12);
        if ((int1 < IF_GETHEIGHT(92078105))) {
            IF_SETHIDE(1, 92078108);
        } else {
            IF_SETHIDE(0, 92078108);
        };
        IF_SETSCROLLSIZE(IF_GETSCROLLWIDTH(92078105), int1, 92078105);
        script31(92078108, 92078105, 7900, 7897, 7898, 7899, 7902, 7901);
        script958(92078106, 92078107, varclient_2759, int0);
    };
    return;
}