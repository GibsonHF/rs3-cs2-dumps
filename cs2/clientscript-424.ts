//
function script424(): void {
    var int0 = ((varclient_1365 * 6) / 10);
    var int1 = 0;
    var string0 = "1 minute";
    if ((int0 < 60)) {
        IF_SETTEXT("Your opponent has logged out.<br>You may wait for them to return or end the Conquest now and be declared the winner.", comp(1027, 3));
        return;
    };
    if ((int0 > 120)) {
        int1 = (int0 / 60);
        string0 = `${inttostring(int1, 10)} minutes`;
    };
    IF_SETTEXT(`Your opponent has been logged out for ${string0}.<br>You may wait for them to return or end the Conquest now and be declared the winner.`, comp(1027, 3));
    return;
}