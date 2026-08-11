//
function script7666(int0: number, int1: number): void {
    if ((script13749() == 1)) {
        return;
    };
    var string0 = "";
    var int2 = 0;
    var int3 = 0;
    if ((int0 == 1)) {
        if (((STRING_LENGTH(REMOVETAGS(varclient_2758)) + 1) > 500)) {
            return;
        };
        [int2, int3] = IF_GETCHARPOSATINDEX(STRING_LENGTH(varclient_2758), int1);
        if ((int3 > IF_GETHEIGHT(int1))) {
            return;
        };
        string0 = SUBSTRING(varclient_2758, varclient_2749, STRING_LENGTH(varclient_2758));
        varclient_2758 = SUBSTRING(varclient_2758, 0, varclient_2749);
        varclient_2758 = strconcat(varclient_2758, "<br>");
        varclient_2758 = strconcat(varclient_2758, string0);
        varclient_2749 = (varclient_2749 + 4);
        IF_SETTEXT(varclient_2758, int1);
        script7671(92078092, 92078095, varclient_2758);
        IF_SETTEXT(inttostring((500 - STRING_LENGTH(REMOVETAGS(varclient_2758))), 10), comp(1405, 14));  // bugreport_interface:chars_left
        return;
    };
    if ((int0 == 2)) {
        if (((STRING_LENGTH(REMOVETAGS(varclient_2759)) + 1) > 500)) {
            return;
        };
        [int2, int3] = IF_GETCHARPOSATINDEX(STRING_LENGTH(varclient_2759), int1);
        if ((int3 > IF_GETHEIGHT(int1))) {
            return;
        };
        string0 = SUBSTRING(varclient_2759, varclient_2750, STRING_LENGTH(varclient_2759));
        varclient_2759 = SUBSTRING(varclient_2759, 0, varclient_2750);
        varclient_2759 = strconcat(varclient_2759, "<br>");
        varclient_2759 = strconcat(varclient_2759, string0);
        varclient_2750 = (varclient_2750 + 4);
        IF_SETTEXT(varclient_2759, int1);
        script7671(92078106, 92078107, varclient_2759);
        IF_SETTEXT(inttostring((500 - STRING_LENGTH(REMOVETAGS(varclient_2759))), 10), comp(1405, 29));  // bugreport_interface:chars_repro
        return;
    };
    return;
}