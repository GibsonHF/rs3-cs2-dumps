//
function script4707(): void {
    IF_SETTEXT(varclient_2743, comp(985, 87));
    IF_SETTEXT(inttostring(varclient_2732, 10), comp(985, 5));
    IF_SETTEXT(inttostring(varclient_2733, 10), comp(985, 7));
    IF_SETTEXT(inttostring(varclient_2734, 10), comp(985, 17));
    IF_SETTEXT(inttostring(varclient_2735, 10), comp(985, 18));
    IF_SETTEXT(varclient_2744, comp(985, 19));
    IF_SETTEXT(varclient_2745, comp(985, 20));
    IF_SETTEXT(inttostring(varclient_2736, 10), comp(985, 31));
    IF_SETTEXT(inttostring(varclient_2737, 10), comp(985, 33));
    IF_SETTEXT(inttostring(varclient_2738, 10), comp(985, 35));
    var int0 = STRINGWIDTH(IF_GETTEXT(comp(985, 35)), IF_GETFONTMETRICS(comp(985, 35)));
    IF_SETSIZE(int0, IF_GETHEIGHT(comp(985, 35)), 0, 0, comp(985, 35));
    var int1 = ((IF_GETX(comp(985, 35)) + IF_GETWIDTH(comp(985, 35))) + 5);
    IF_SETPOSITION(int1, IF_GETHEIGHT(comp(985, 35)), 0, 0, comp(985, 36));
    var int2 = (IF_GETX(comp(985, 36)) + IF_GETWIDTH(comp(985, 36)));
    IF_SETPOSITION(int2, IF_GETHEIGHT(comp(985, 36)), 0, 0, comp(985, 37));
    IF_SETTEXT(inttostring(varclient_2739, 10), comp(985, 37));
    int0 = STRINGWIDTH(IF_GETTEXT(comp(985, 37)), IF_GETFONTMETRICS(comp(985, 37)));
    IF_SETSIZE(int0, IF_GETHEIGHT(comp(985, 36)), 0, 0, comp(985, 37));
    int1 = ((IF_GETX(comp(985, 37)) + IF_GETWIDTH(comp(985, 37))) + 5);
    IF_SETPOSITION(int1, IF_GETHEIGHT(comp(985, 37)), 0, 0, comp(985, 38));
    IF_SETTEXT(inttostring(varclient_2740, 10), comp(985, 39));
    IF_SETTEXT(inttostring(varclient_2741, 10), comp(985, 40));
    IF_SETTEXT(inttostring(varclient_2742, 10), comp(985, 41));
    return;
}