//
function script9374(): void {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    if ((varbitplayer_20989 == 1)) {
        string0 = `${IF_GETTEXT(comp(701, 110))}. `;  // clan_noticeboard_broadcast:date_text
    };
    if ((varbitplayer_20990 == 1)) {
        string0 = `${string0}${IF_GETTEXT(comp(701, 102))}until event starts. `;  // clan_noticeboard_broadcast:reltime_text
    };
    if ((varbitplayer_20991 == 1)) {
        string0 = `${string0}${IF_GETTEXT(comp(701, 94))} Game Time. `;  // clan_noticeboard_broadcast:gametime_text
    };
    if ((varbitplayer_20993 == 1)) {
        string1 = `${string1}World ${IF_GETTEXT(comp(701, 86))} `;  // clan_noticeboard_broadcast:world_text
    };
    if ((varbitplayer_20994 == 1)) {
        string1 = `${string1}- ${IF_GETTEXT(comp(701, 78))}. `;  // clan_noticeboard_broadcast:place_text
    };
    if ((varbitplayer_20995 == 1)) {
        string2 = `${string2}${IF_GETTEXT(comp(701, 70))}. `;  // clan_noticeboard_broadcast:type_text
    };
    if ((varbitplayer_20996 == 1)) {
        string2 = `${string2}${IF_GETTEXT(comp(701, 62))}. `;  // clan_noticeboard_broadcast:subtype_text
    };
    if ((varbitplayer_20997 == 1)) {
        string3 = `${string3}Open to ${IF_GETTEXT(comp(701, 54))}. `;  // clan_noticeboard_broadcast:attendees_text
    };
    if ((varbitplayer_20999 == 1)) {
        string3 = `${string3}${IF_GETTEXT(comp(701, 38))} `;  // clan_noticeboard_broadcast:mandatory_text
    };
    if ((varbitplayer_21000 == 1)) {
        string3 = `${string3}${IF_GETTEXT(comp(701, 30))}`;  // clan_noticeboard_broadcast:moreinfo_text
    };
    IF_SETTEXT(`${string0}<br>${string1}<br>${string2}<br>${string3}`, comp(701, 203));  // clan_noticeboard_broadcast:broadcast_text
    IF_SETTEXT(`${string0}<br>${string1}<br>${string2}<br>${string3}`, comp(701, 184));  // clan_noticeboard_broadcast:phrase
    if (((11 + (11 * PARAHEIGHT(`${string0}<br>${string1}<br>${string2}<br>${string3}`, (IF_GETWIDTH(comp(701, 183)) - 20), 27 as fontmetrics))) > IF_GETHEIGHT(comp(701, 183)))) {  // clan_noticeboard_broadcast:phrase_text_layer
        IF_SETSIZE(20, 10, 1, 1, comp(701, 183));  // clan_noticeboard_broadcast:phrase_text_layer
        IF_SETSCROLLSIZE(0, (51 + (11 * PARAHEIGHT(`${string0}<br>${string1}<br>${string2}<br>${string3}`, (IF_GETWIDTH(comp(701, 183)) - 20), 27 as fontmetrics))), comp(701, 183));  // clan_noticeboard_broadcast:phrase_text_layer
        IF_SETHIDE(false, comp(701, 182));  // clan_noticeboard_broadcast:phrase_scrollbar
        CC_DELETEALL(comp(701, 182));  // clan_noticeboard_broadcast:phrase_scrollbar
        script7791(45940918, 45940919);
    } else {
        IF_SETSIZE(10, 10, 1, 1, comp(701, 183));  // clan_noticeboard_broadcast:phrase_text_layer
        IF_SETSCROLLSIZE(0, 0, comp(701, 183));  // clan_noticeboard_broadcast:phrase_text_layer
        IF_SETHIDE(true, comp(701, 182));  // clan_noticeboard_broadcast:phrase_scrollbar
    };
    return;
}