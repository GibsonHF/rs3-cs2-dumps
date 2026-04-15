//
function script1921(): void {
    if ((varclient_551 > 0)) {
        IF_SETTEXT(strconcat(APPEND_NUM(strconcat(varclient_2452, " ("), varclient_551), ")"), comp(812, 5));
    } else {
        IF_SETTEXT(varclient_2452, comp(812, 5));
    };
    if ((varclient_552 > 0)) {
        IF_SETTEXT(strconcat(APPEND_NUM(strconcat(varclient_2453, " ("), varclient_552), ")"), comp(812, 6));
    } else {
        IF_SETTEXT(varclient_2453, comp(812, 6));
    };
    if ((varclient_553 > 0)) {
        IF_SETTEXT(strconcat(APPEND_NUM(strconcat(varclient_2454, " ("), varclient_553), ")"), comp(812, 7));
    } else {
        IF_SETTEXT(varclient_2454, comp(812, 7));
    };
    return;
}