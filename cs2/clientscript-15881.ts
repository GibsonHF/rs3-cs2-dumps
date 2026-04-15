//
function script15881(): void {
    if ((IF_GETHIDE(comp(276, 27)) == true)) {
        IF_SETTEXT(`[${enum_getvalue(0, 36, 10679 as cs2enum, script655(18))}]`, comp(137, 72));
        IF_SETSIZE((IF_GETWIDTH(comp(137, 71)) + STRINGWIDTH(IF_GETTEXT(comp(137, 72)), IF_GETFONTMETRICS(comp(137, 72)))), 0, 0, 1, comp(137, 70));
        IF_SETSIZE(IF_GETWIDTH(comp(137, 70)), 0, 1, 1, comp(137, 76));
        IF_SETHIDE(true, comp(137, 69));
        IF_SETHIDE(false, comp(137, 70));
    } else {
        IF_SETHIDE(false, comp(137, 69));
        IF_SETHIDE(false, comp(137, 67));
        IF_SETSIZE(0, 0, 1, 1, comp(137, 76));
        IF_SETHIDE(true, comp(137, 70));
    };
    return;
}