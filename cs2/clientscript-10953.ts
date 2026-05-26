//
function script10953(): void {
    if ((script4148() == 1)) {
        printmessage("Ironman players cannot make love potions.");
        return;
    };
    if (((INV_FREESPACE(93 as inv) == 0) && (INV_TOTAL(93 as inv, 34010 as obj) == 0))) {
        printmessage("You don't have enough free inventory space to make any love potions.");
        return;
    };
    if ((INV_TOTAL(93 as inv, 33968 as obj) >= 10)) {
        IF_SETGRAPHIC(19321 as graphic, comp(1584, 188));
        IF_SETTEXT(`How many love potions would you like to make? (${inttostring(10, 10)} rose petals each)`, comp(1584, 216));
        IF_SETTEXT("0", comp(1584, 214));
        IF_SETHIDE(false, comp(1584, 195));
        IF_SETHIDE(false, comp(1584, 60));
        IF_SETHIDE(false, comp(1584, 14));
    } else {
        printmessage("You don't have enough rose petals to make a love potion.");
    };
    return;
}