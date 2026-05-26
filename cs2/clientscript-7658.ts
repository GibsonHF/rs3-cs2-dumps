//
function script7658(): void {
    if ((STRING_LENGTH(varclient_2758) > 0)) {
        IF_SETTEXT(varclient_2758, comp(1405, 12));
    };
    if ((STRING_LENGTH(varclient_2759) > 0)) {
        IF_SETTEXT(varclient_2759, comp(1405, 26));
    };
    varclient_2753 = 1;
    script8841(17, 1);
    varclient_2749 = STRING_LENGTH(varclient_2758);
    varclient_2750 = STRING_LENGTH(varclient_2759);
    varclient_2755 = 0;
    varclient_2756 = 0;
    varclient_2757 = -1;
    IF_SETONCLICK(callback(script7669, -2147483647, -2147483646, 92078092, 92078095), 92078092);
    IF_SETONCLICK(callback(script7669, -2147483647, -2147483646, 92078106, 92078107), 92078106);
    script1566(0, varclient_2758, 0);
    script7671(92078092, 92078095, varclient_2758);
    script7671(92078106, 92078107, varclient_2759);
    IF_SETHIDE(1, 92078095);
    IF_SETHIDE(1, 92078107);
    IF_SETTEXT(inttostring((500 - STRING_LENGTH(REMOVETAGS(varclient_2758))), 10), 92078094);
    IF_SETTEXT(inttostring((500 - STRING_LENGTH(REMOVETAGS(varclient_2759))), 10), 92078109);
    return;
}