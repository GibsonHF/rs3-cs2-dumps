//
function script15014(int0: number): void {
    var string0 = "You already have this item stored as a favourite.";
    if ((INV_TOTAL(890, int0) > 0)) {
        script1296(string0);
        return;
    };
    script7207(46333965, 46333966, 46333967, 46333968, varclient_2250, 2);
    script7208(varclient_2250, 46333965);
    IF_SETHIDE(0, 46333977);
    IF_SETHIDE(1, 46333969);
    script11704();
    return;
}