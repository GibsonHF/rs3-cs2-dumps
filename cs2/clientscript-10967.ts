//
function script10967(int0: number): void {
    if ((int0 == 103743563)) {
        if ((INV_TOTAL(93 as inv, 33968 as obj) == 0)) {
            printmessage("You don't have any rose petals in your inventory to sprinkle.");
            return;
        };
        if ((varbitplayer_26867 < 1250)) {
            IF_SETGRAPHIC(21732 as graphic, comp(1583, 103));
            IF_SETTEXT("How many rose petals would you like to add to the love side?", comp(1583, 131));
            IF_SETTEXT("0", comp(1583, 129));
            IF_SETHIDE(false, comp(1583, 110));
            IF_SETHIDE(false, comp(1583, 70));
            IF_SETHIDE(false, comp(1583, 97));
        } else {
            printmessage("You can't sprinkle any more petals.");
        };
    } else if ((int0 == 103743571)) {
        if ((INV_TOTAL(93 as inv, 33968 as obj) == 0)) {
            printmessage("You don't have any rose petals in your inventory to crush.");
            return;
        };
        if ((varbitplayer_26868 < 1250)) {
            IF_SETGRAPHIC(21731 as graphic, comp(1583, 103));
            IF_SETTEXT("How many rose petals would you like to add to the hate side?", comp(1583, 131));
            IF_SETTEXT("0", comp(1583, 129));
            IF_SETHIDE(false, comp(1583, 110));
            IF_SETHIDE(false, comp(1583, 70));
            IF_SETHIDE(false, comp(1583, 97));
        } else {
            printmessage("You can't crush any more petals.");
        };
    };
    return;
}