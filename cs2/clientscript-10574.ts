//
function script10574(): void {
    if ((varbitplayer_24848 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 500)) {
        return;
    };
    if ((INV_FREESPACE(93 as inv) == 0)) {
        return;
    };
    varbitplayer_24852 = 9;
    stack(23961);
    stack(100466693);
    IF_SETGRAPHIC();
    IF_SETTEXT("A set of fake pirate beards, wearable by men and women.", 100466721);
    IF_SETTEXT("Buy the fake pirate beards?", 100466722);
    IF_SETHIDE(0, 100466717);
    return;
}