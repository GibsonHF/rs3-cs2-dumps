//
function script15881(): void {
    if ((IF_GETHIDE(18087963) == 1)) {
        IF_SETTEXT(`[${enum_getvalue(0, 36, 10679 as cs2enum, script655(18))}]`, 8978504);
        IF_SETSIZE((IF_GETWIDTH(8978503) + STRINGWIDTH(IF_GETTEXT(8978504), IF_GETFONTMETRICS(8978504))), 0, 0, 1, 8978502);
        IF_SETSIZE(IF_GETWIDTH(8978502), 0, 1, 1, 8978508);
        IF_SETHIDE(1, 8978501);
        IF_SETHIDE(0, 8978502);
    } else {
        IF_SETHIDE(0, 8978501);
        IF_SETHIDE(0, 8978499);
        IF_SETSIZE(0, 0, 1, 1, 8978508);
        IF_SETHIDE(1, 8978502);
    };
    return;
}