//
function script15014(int0: obj): void {
    var string0 = "You already have this item stored as a favourite.";
    if ((INV_TOTAL(890 as inv, int0) > 0)) {
        script1296(string0);
        return;
    };
    script7207(comp(707, 13), comp(707, 14), comp(707, 15), comp(707, 16), varclient_2250, 2);
    script7208(varclient_2250, comp(707, 13));
    IF_SETHIDE(false, comp(707, 25));
    IF_SETHIDE(true, comp(707, 17));
    script11704();
    return;
}