//
function script4689(): void {
    IF_SETHIDE(0, 36110338);
    IF_SETTEXT(enum_getvalue(0, 36, 3855 as cs2enum, 1), 36110340);
    IF_SETGRAPHIC(6188, 36110342);
    IF_SETTEXT(inttostring(enum_getvalue(0, 0, 3856 as cs2enum, 1), 10), 36110341);
    IF_SETHIDE(0, 36110346);
    IF_SETTEXT(enum_getvalue(0, 36, 3855 as cs2enum, 2), 36110348);
    IF_SETGRAPHIC(6189, 36110350);
    IF_SETTEXT(inttostring(enum_getvalue(0, 0, 3856 as cs2enum, 2), 10), 36110349);
    IF_SETHIDE(0, 36110354);
    IF_SETTEXT(enum_getvalue(0, 36, 3855 as cs2enum, 3), 36110356);
    IF_SETGRAPHIC(6190, 36110358);
    IF_SETTEXT(inttostring(enum_getvalue(0, 0, 3856 as cs2enum, 3), 10), 36110357);
    IF_SETHIDE(0, 36110362);
    IF_SETTEXT(enum_getvalue(0, 36, 3855 as cs2enum, 4), 36110365);
    IF_SETGRAPHIC(6191, 36110367);
    IF_SETTEXT(inttostring(enum_getvalue(0, 0, 3856 as cs2enum, 4), 10), 36110366);
    IF_SETONMOUSEREPEAT(callback(script4692, -2147483645), 36110338);
    IF_SETONMOUSEREPEAT(callback(script4692, -2147483645), 36110346);
    IF_SETONMOUSEREPEAT(callback(script4692, -2147483645), 36110354);
    IF_SETONMOUSEREPEAT(callback(script4692, -2147483645), 36110362);
    return;
}