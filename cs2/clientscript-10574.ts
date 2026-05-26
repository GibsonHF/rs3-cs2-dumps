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
    IF_SETGRAPHIC(23961 as graphic, comp(1533, 5));
    IF_SETTEXT("A set of fake pirate beards, wearable by men and women.", comp(1533, 33));
    IF_SETTEXT("Buy the fake pirate beards?", comp(1533, 34));
    IF_SETHIDE(false, comp(1533, 29));
    return;
}