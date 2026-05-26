//
function script10575(): void {
    if ((varbitplayer_24848 == 1)) {
        return;
    };
    if ((INV_TOTAL(93, 32094) < 1500)) {
        return;
    };
    if ((INV_FREESPACE(93) == 0)) {
        return;
    };
    varbitplayer_24852 = 5;
    IF_SETGRAPHIC(24009, 100466693);
    IF_SETTEXT("Slay your enemies with this stuffed hunter of the seas. (Two-handed sword with level 1 and level 40 versions)", 100466721);
    IF_SETTEXT("Buy the two-handed swordfish?", 100466722);
    IF_SETHIDE(0, 100466717);
    return;
}