//
function script14947(int0: number, int1: number): void {
    IF_SETHIDE(0, 14352527);
    IF_SETHIDE(1, 14352533);
    if ((script444() == 1)) {
        IF_SETHIDE(1, 14352431);
    };
    IF_SETHIDE(0, 14352422);
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
            IF_SETTEXT(`You've gained ${string0} keys.`, 14352419);
            IF_SETTEXT(`Current keys: ${inttostring(script6950(), 10)}`, 14352420);
            IF_SETONVARCTRANSMIT(callback(script6055, 1800, 1), 14352420);
            script13463(`You've gained ${string0} keys.`);
            break;
        }
        case 3: {
            IF_SETTEXT(`You've purchased ${string0} keys.`, 14352419);
            IF_SETTEXT("They will be added to your account shortly.", 14352420);
            script13463("Your keys will be added to your account shortly.");
            break;
        }
        case 4: {
            IF_SETHIDE(1, 14352385);
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", 14352419);
            IF_SETTEXT("Please try again later.", 14352420);
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 5: {
            IF_SETHIDE(1, 14352385);
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", 14352419);
            IF_SETTEXT("Please try again later.", 14352420);
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
    };
    return;
}