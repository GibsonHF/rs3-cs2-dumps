//
function script10569(): void {
    if ((varbitplayer_24845 == 1)) {
        return;
    };
    if ((INV_TOTAL(93, 32094) < 2000)) {
        return;
    };
    if ((INV_FREESPACE(93) == 0)) {
        return;
    };
    varbitplayer_24852 = 3;
    IF_SETGRAPHIC(23963, 100466693);
    IF_SETTEXT("A cape fashioned from a Jolly Roger flag. (No combat stats)", 100466721);
    IF_SETTEXT("Buy Jolly Roger cape?", 100466722);
    IF_SETHIDE(0, 100466717);
    return;
}