//
function script14788(int0: dbrow, int1: unknown_int): void {
    IF_SETHIDE(false, comp(219, 144));
    IF_SETHIDE(true, comp(219, 139));
    IF_SETHIDE(true, comp(219, 149));
    IF_SETHIDE(false, comp(219, 58));
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
            IF_SETTEXT(`You've gained ${string0} Runecoins.`, comp(219, 55));
            IF_SETTEXT(`Current Runecoins : ${TOSTRING_LOCALISED(varclient_4659, 1)}`, comp(219, 56));
            IF_SETONVARCTRANSMIT(callback(script6189, 4659, 1), comp(219, 56));
            script13463(`You've gained ${string0} Runecoins.`);
            break;
        }
        case 3: {
            IF_SETTEXT(`You've purchased ${string0} Runecoins.`, comp(219, 55));
            IF_SETTEXT("They will be added to your account shortly.", comp(219, 56));
            script13463("Your Runecoins will be added to your account shortly.");
            break;
        }
        case 4: {
            IF_SETHIDE(true, comp(219, 1));
            script9554(comp(219, 136), comp(219, 137), comp(219, 138), "Sorry", 21218 as struct);
            IF_SETTEXT("We were unable to process your request.", comp(219, 55));
            IF_SETTEXT("Please try again later.", comp(219, 56));
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 5: {
            IF_SETHIDE(true, comp(219, 1));
            script9554(comp(219, 136), comp(219, 137), comp(219, 138), "Sorry", 21218 as struct);
            IF_SETTEXT("We were unable to process your request.", comp(219, 55));
            IF_SETTEXT("Please try again later.", comp(219, 56));
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
    };
    return;
}