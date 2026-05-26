//
function script9374(): void {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    if ((varbitplayer_20989 == 1)) {
        string0 = `${IF_GETTEXT(45940846)}. `;
    };
    if ((varbitplayer_20990 == 1)) {
        string0 = `${string0}${IF_GETTEXT(45940838)}until event starts. `;
    };
    if ((varbitplayer_20991 == 1)) {
        string0 = `${string0}${IF_GETTEXT(45940830)} Game Time. `;
    };
    if ((varbitplayer_20993 == 1)) {
        string1 = `${string1}World ${IF_GETTEXT(45940822)} `;
    };
    if ((varbitplayer_20994 == 1)) {
        string1 = `${string1}- ${IF_GETTEXT(45940814)}. `;
    };
    if ((varbitplayer_20995 == 1)) {
        string2 = `${string2}${IF_GETTEXT(45940806)}. `;
    };
    if ((varbitplayer_20996 == 1)) {
        string2 = `${string2}${IF_GETTEXT(45940798)}. `;
    };
    if ((varbitplayer_20997 == 1)) {
        string3 = `${string3}Open to ${IF_GETTEXT(45940790)}. `;
    };
    if ((varbitplayer_20999 == 1)) {
        string3 = `${string3}${IF_GETTEXT(45940774)} `;
    };
    if ((varbitplayer_21000 == 1)) {
        string3 = `${string3}${IF_GETTEXT(45940766)}`;
    };
    IF_SETTEXT(`${string0}<br>${string1}<br>${string2}<br>${string3}`, 45940939);
    IF_SETTEXT(`${string0}<br>${string1}<br>${string2}<br>${string3}`, 45940920);
    if (((11 + (11 * PARAHEIGHT(`${string0}<br>${string1}<br>${string2}<br>${string3}`, (IF_GETWIDTH(45940919) - 20), 27))) > IF_GETHEIGHT(45940919))) {
        IF_SETSIZE(20, 10, 1, 1, 45940919);
        IF_SETSCROLLSIZE(0, (51 + (11 * PARAHEIGHT(`${string0}<br>${string1}<br>${string2}<br>${string3}`, (IF_GETWIDTH(45940919) - 20), 27))), 45940919);
        IF_SETHIDE(0, 45940918);
        CC_DELETEALL(45940918);
        script7791(45940918, 45940919);
    } else {
        IF_SETSIZE(10, 10, 1, 1, 45940919);
        IF_SETSCROLLSIZE(0, 0, 45940919);
        IF_SETHIDE(1, 45940918);
    };
    return;
}