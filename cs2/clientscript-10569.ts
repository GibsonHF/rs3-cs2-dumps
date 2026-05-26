//
function script10569(): void {
    if ((varbitplayer_24845 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 2000)) {
        return;
    };
    if ((INV_FREESPACE(93 as inv) == 0)) {
        return;
    };
    varbitplayer_24852 = 3;
    IF_SETGRAPHIC(23963 as graphic, comp(1533, 5));
    IF_SETTEXT("A cape fashioned from a Jolly Roger flag. (No combat stats)", comp(1533, 33));
    IF_SETTEXT("Buy Jolly Roger cape?", comp(1533, 34));
    IF_SETHIDE(false, comp(1533, 29));
    return;
}