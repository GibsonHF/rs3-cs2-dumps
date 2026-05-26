//
function script10574(): void {
    if ((varbitplayer_24848 == 1)) {
        return;
    };
    if ((INV_TOTAL(93, 32094) < 500)) {
        return;
    };
    if ((INV_FREESPACE(93) == 0)) {
        return;
    };
    varbitplayer_24852 = 9;
    IF_SETGRAPHIC(23961, 100466693);
    IF_SETTEXT("A set of fake pirate beards, wearable by men and women.", 100466721);
    IF_SETTEXT("Buy the fake pirate beards?", 100466722);
    IF_SETHIDE(0, 100466717);
    return;
}