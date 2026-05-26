//
function script11448(): void {
    IF_SETSIZE(STRINGWIDTH("Thaler:", 28 as fontmetrics), 0, 0, 1, comp(1624, 12));
    IF_SETPOSITION(((IF_GETX(comp(1624, 12)) + IF_GETWIDTH(comp(1624, 12))) + 5), 0, 0, 1, comp(1624, 13));
    IF_SETPOSITION(((IF_GETX(comp(1624, 13)) + IF_GETWIDTH(comp(1624, 13))) + 5), 0, 0, 1, comp(1624, 14));
    IF_SETTEXT(inttostring(varplayer_5427, 10), comp(1624, 14));
    return;
}