//
function script11448(): void {
    IF_SETSIZE(STRINGWIDTH("Thaler:", 28 as fontmetrics), 0, 0, 1, comp(1624, 12));  // spotlight:rupees_text
    IF_SETPOSITION(((IF_GETX(comp(1624, 12) /*spotlight:rupees_text*/) + IF_GETWIDTH(comp(1624, 12) /*spotlight:rupees_text*/)) + 5), 0, 0, 1, comp(1624, 13) /*spotlight:rupees_icon*/);
    IF_SETPOSITION(((IF_GETX(comp(1624, 13) /*spotlight:rupees_icon*/) + IF_GETWIDTH(comp(1624, 13) /*spotlight:rupees_icon*/)) + 5), 0, 0, 1, comp(1624, 14) /*spotlight:player_currency*/);
    IF_SETTEXT(inttostring(varplayer_5427, 10), comp(1624, 14));  // spotlight:player_currency
    return;
}