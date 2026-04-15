//
function script10575(): void {
    if ((varbitplayer_24848 == 1)) {
        return;
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 1500)) {
        return;
    };
    if ((INV_FREESPACE(93 as inv) == 0)) {
        return;
    };
    varbitplayer_24852 = 5;
    stack(24009);
    stack(100466693);
    IF_SETGRAPHIC();
    IF_SETTEXT("Slay your enemies with this stuffed hunter of the seas. (Two-handed sword with level 1 and level 40 versions)", 100466721);
    IF_SETTEXT("Buy the two-handed swordfish?", 100466722);
    IF_SETHIDE(0, 100466717);
    return;
}