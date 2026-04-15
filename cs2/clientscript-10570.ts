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
    stack(24008);
    stack(100466693);
    IF_SETGRAPHIC();
    IF_SETTEXT("Defend yourself with this wheel, pulled straight from a pirate ship. (Shield with level 1 and level 40 versions)", 100466721);
    IF_SETTEXT("Buy ship's wheel shield?", 100466722);
    IF_SETHIDE(0, 100466717);
    return;
}