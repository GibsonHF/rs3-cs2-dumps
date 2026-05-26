//
function script10571(): void {
    if ((varbitplayer_24847 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 1000)) {
        return;
    };
    if ((INV_FREESPACE(93 as inv) == 0)) {
        return;
    };
    varbitplayer_24852 = 6;
    IF_SETGRAPHIC(23965 as graphic, comp(1533, 5));
    IF_SETTEXT("A set of peg legs (left, right and both legs) to help your pirate look.", comp(1533, 33));
    IF_SETTEXT("Buy pirate peglegs?", comp(1533, 34));
    IF_SETHIDE(false, comp(1533, 29));
    return;
}