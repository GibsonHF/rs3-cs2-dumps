//
function script2077(): void {
    var int0 = 0;
    var int1 = 0;
    if ((varclient_632 == 0)) {
        int0 = (3 - varclient_635);
        if ((int0 == 1)) {
            IF_SETTEXT(`New game:<br><col=FFFFFF>${inttostring(int0, 10)}</col> min`, 54853640);
        } else {
            IF_SETTEXT(`New game:<br><col=FFFFFF>${inttostring(int0, 10)}</col> mins`, 54853640);
        };
    } else {
        int1 = (20 - varclient_636);
        int0 = (int1 + 3);
        IF_SETTEXT(`New game:<br><col=FFFFFF>${inttostring(int0, 10)}</col> mins`, 54853640);
    };
    return;
}