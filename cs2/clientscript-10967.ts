//
function script10967(int0: unknown_int): void {
    if ((int0 == 103743563)) {
        if ((INV_TOTAL(93 as inv, 33968 as obj) == 0)) {
            printmessage("You don't have any rose petals in your inventory to sprinkle.");
            return;
        };
        if ((varbitplayer_26867 < 1250)) {
            stack(21732);
            stack(103743591);
            IF_SETGRAPHIC();
            IF_SETTEXT("How many rose petals would you like to add to the love side?", 103743619);
            IF_SETTEXT("0", 103743617);
            IF_SETHIDE(0, 103743598);
            IF_SETHIDE(0, 103743558);
            IF_SETHIDE(0, 103743585);
        } else {
            printmessage("You can't sprinkle any more petals.");
        };
    } else if ((int0 == 103743571)) {
        if ((INV_TOTAL(93 as inv, 33968 as obj) == 0)) {
            printmessage("You don't have any rose petals in your inventory to crush.");
            return;
        };
        if ((varbitplayer_26868 < 1250)) {
            stack(21731);
            stack(103743591);
            IF_SETGRAPHIC();
            IF_SETTEXT("How many rose petals would you like to add to the hate side?", 103743619);
            IF_SETTEXT("0", 103743617);
            IF_SETHIDE(0, 103743598);
            IF_SETHIDE(0, 103743558);
            IF_SETHIDE(0, 103743585);
        } else {
            printmessage("You can't crush any more petals.");
        };
    };
    return;
}