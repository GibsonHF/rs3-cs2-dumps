//
function script4689(): void {
    IF_SETHIDE(false, comp(551, 2));
    IF_SETTEXT(enum_getvalue(0, 36, 3855 as cs2enum, 1), comp(551, 4));
    IF_SETGRAPHIC(6188 as graphic, comp(551, 6));
    IF_SETTEXT(inttostring(enum_getvalue(0, 0, 3856 as cs2enum, 1), 10), comp(551, 5));
    IF_SETHIDE(false, comp(551, 10));
    IF_SETTEXT(enum_getvalue(0, 36, 3855 as cs2enum, 2), comp(551, 12));
    IF_SETGRAPHIC(6189 as graphic, comp(551, 14));
    IF_SETTEXT(inttostring(enum_getvalue(0, 0, 3856 as cs2enum, 2), 10), comp(551, 13));
    IF_SETHIDE(false, comp(551, 18));
    IF_SETTEXT(enum_getvalue(0, 36, 3855 as cs2enum, 3), comp(551, 20));
    IF_SETGRAPHIC(6190 as graphic, comp(551, 22));
    IF_SETTEXT(inttostring(enum_getvalue(0, 0, 3856 as cs2enum, 3), 10), comp(551, 21));
    IF_SETHIDE(false, comp(551, 26));
    IF_SETTEXT(enum_getvalue(0, 36, 3855 as cs2enum, 4), comp(551, 29));
    IF_SETGRAPHIC(6191 as graphic, comp(551, 31));
    IF_SETTEXT(inttostring(enum_getvalue(0, 0, 3856 as cs2enum, 4), 10), comp(551, 30));
    IF_SETONMOUSEREPEAT(callback(script4692, -2147483645), comp(551, 2));
    IF_SETONMOUSEREPEAT(callback(script4692, -2147483645), 36110346);
    IF_SETONMOUSEREPEAT(callback(script4692, -2147483645), 36110354);
    IF_SETONMOUSEREPEAT(callback(script4692, -2147483645), 36110362);
    return;
}