//
function script10953(): void {
    if ((script4148() == 1)) {
        printmessage("Ironman players cannot make love potions.");
        return;
    };
    if (((INV_FREESPACE(93) == 0) && (INV_TOTAL(93, 34010) == 0))) {
        printmessage("You don't have enough free inventory space to make any love potions.");
        return;
    };
    if ((INV_TOTAL(93, 33968) >= 10)) {
        IF_SETGRAPHIC(19321, 103809212);
        IF_SETTEXT(`How many love potions would you like to make? (${inttostring(10, 10)} rose petals each)`, 103809240);
        IF_SETTEXT("0", 103809238);
        IF_SETHIDE(0, 103809219);
        IF_SETHIDE(0, 103809084);
        IF_SETHIDE(0, 103809038);
    } else {
        printmessage("You don't have enough rose petals to make a love potion.");
    };
    return;
}