//
function script10570(): void {
    if ((varbitplayer_24846 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 1500)) {
        return;
    };
    if ((INV_FREESPACE(93 as inv) == 0)) {
        return;
    };
    varbitplayer_24852 = 4;
    IF_SETGRAPHIC(24008 as graphic, comp(1533, 5));
    IF_SETTEXT("Defend yourself with this wheel, pulled straight from a pirate ship. (Shield with level 1 and level 40 versions)", comp(1533, 33));
    IF_SETTEXT("Buy ship's wheel shield?", comp(1533, 34));
    IF_SETHIDE(false, comp(1533, 29));
    return;
}