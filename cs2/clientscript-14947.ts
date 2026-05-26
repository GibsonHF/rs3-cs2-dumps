//
function script14947(int0: number, int1: number): void {
    IF_SETHIDE(false, comp(219, 143));
    IF_SETHIDE(true, comp(219, 149));
    if ((script444() == 1)) {
        IF_SETHIDE(true, comp(219, 47));
    };
    IF_SETHIDE(false, comp(219, 38));
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
            IF_SETTEXT(`You've gained ${string0} keys.`, comp(219, 35));
            IF_SETTEXT(`Current keys: ${inttostring(script6950(), 10)}`, comp(219, 36));
            IF_SETONVARCTRANSMIT(callback(script6055, 1800, 1), comp(219, 36));
            script13463(`You've gained ${string0} keys.`);
            break;
        }
        case 3: {
            IF_SETTEXT(`You've purchased ${string0} keys.`, comp(219, 35));
            IF_SETTEXT("They will be added to your account shortly.", comp(219, 36));
            script13463("Your keys will be added to your account shortly.");
            break;
        }
        case 4: {
            IF_SETHIDE(true, comp(219, 1));
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", comp(219, 35));
            IF_SETTEXT("Please try again later.", comp(219, 36));
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 5: {
            IF_SETHIDE(true, comp(219, 1));
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", comp(219, 35));
            IF_SETTEXT("Please try again later.", comp(219, 36));
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
    };
    return;
}