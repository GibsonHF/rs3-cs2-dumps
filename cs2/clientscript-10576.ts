//
function script10576(): void {
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 100)) {
        return;
    };
    if ((INV_FREESPACE(93 as inv) == 0)) {
        return;
    };
    varbitplayer_24852 = 10;
    stack(23962);
    stack(100466693);
    IF_SETGRAPHIC();
    IF_SETTEXT("Good old-fashioned pirate food. Eat for healing and a random stat boost. (+2 stat boost. Heals the same as a mackerel)", 100466721);
    IF_SETTEXT("Buy a ship's biscuit?", 100466722);
    IF_SETHIDE(0, 100466717);
    return;
}