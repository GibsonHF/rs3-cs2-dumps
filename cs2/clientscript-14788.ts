//
function script14788(int0: number, int1: number): void {
    IF_SETHIDE(0, 14352528);
    IF_SETHIDE(1, 14352523);
    IF_SETHIDE(1, 14352533);
    IF_SETHIDE(0, 14352442);
    var string0 = "";
    if ((DB_GETFIELDCOUNT(int0, 549168) > 0)) {
        string0 = inttostring(dbrow_getfield(int0, 549168, 0), 10);
    };
    switch (int1) {
        case 1: {
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 2: {
            IF_SETTEXT(`You've gained ${string0} Runecoins.`, 14352439);
            IF_SETTEXT(`Current Runecoins : ${TOSTRING_LOCALISED(varclient_4659, 1)}`, 14352440);
            IF_SETONVARCTRANSMIT(callback(script6189, 4659, 1), 14352440);
            script13463(`You've gained ${string0} Runecoins.`);
            break;
        }
        case 3: {
            IF_SETTEXT(`You've purchased ${string0} Runecoins.`, 14352439);
            IF_SETTEXT("They will be added to your account shortly.", 14352440);
            script13463("Your Runecoins will be added to your account shortly.");
            break;
        }
        case 4: {
            IF_SETHIDE(1, 14352385);
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", 14352439);
            IF_SETTEXT("Please try again later.", 14352440);
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 5: {
            IF_SETHIDE(1, 14352385);
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", 14352439);
            IF_SETTEXT("Please try again later.", 14352440);
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
    };
    return;
}