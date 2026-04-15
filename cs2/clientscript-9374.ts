//
function script9374(): void {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    if ((varbitplayer_20989 == 1)) {
        string0 = `${IF_GETTEXT(comp(701, 110))}. `;
    };
    if ((varbitplayer_20990 == 1)) {
        string0 = `${string0}${IF_GETTEXT(comp(701, 102))}until event starts. `;
    };
    if ((varbitplayer_20991 == 1)) {
        string0 = `${string0}${IF_GETTEXT(comp(701, 94))} Game Time. `;
    };
    if ((varbitplayer_20993 == 1)) {
        string1 = `${string1}World ${IF_GETTEXT(comp(701, 86))} `;
    };
    if ((varbitplayer_20994 == 1)) {
        string1 = `${string1}- ${IF_GETTEXT(comp(701, 78))}. `;
    };
    if ((varbitplayer_20995 == 1)) {
        string2 = `${string2}${IF_GETTEXT(comp(701, 70))}. `;
    };
    if ((varbitplayer_20996 == 1)) {
        string2 = `${string2}${IF_GETTEXT(comp(701, 62))}. `;
    };
    if ((varbitplayer_20997 == 1)) {
        string3 = `${string3}Open to ${IF_GETTEXT(comp(701, 54))}. `;
    };
    if ((varbitplayer_20999 == 1)) {
        string3 = `${string3}${IF_GETTEXT(comp(701, 38))} `;
    };
    if ((varbitplayer_21000 == 1)) {
        string3 = `${string3}${IF_GETTEXT(comp(701, 30))}`;
    };
    IF_SETTEXT(`${string0}<br>${string1}<br>${string2}<br>${string3}`, comp(701, 203));
    IF_SETTEXT(`${string0}<br>${string1}<br>${string2}<br>${string3}`, comp(701, 184));
    if (((11 + (11 * PARAHEIGHT(`${string0}<br>${string1}<br>${string2}<br>${string3}`, (IF_GETWIDTH(comp(701, 183)) - 20), 27 as fontmetrics))) > IF_GETHEIGHT(comp(701, 183)))) {
        IF_SETSIZE(20, 10, 1, 1, comp(701, 183));
        IF_SETSCROLLSIZE(0, (51 + (11 * PARAHEIGHT(`${string0}<br>${string1}<br>${string2}<br>${string3}`, (IF_GETWIDTH(comp(701, 183)) - 20), 27 as fontmetrics))), comp(701, 183));
        IF_SETHIDE(false, comp(701, 182));
        CC_DELETEALL(comp(701, 182));
        script7791(comp(701, 182), comp(701, 183));
    } else {
        IF_SETSIZE(10, 10, 1, 1, comp(701, 183));
        IF_SETSCROLLSIZE(0, 0, comp(701, 183));
        IF_SETHIDE(true, comp(701, 182));
    };
    return;
}