//
function script14788(int0: number, int1: number): void {
    IF_SETHIDE(false, comp(219, 144));  // bonds_gratz:runecoins_layer
    IF_SETHIDE(true, comp(219, 139));  // bonds_gratz:generic_redeem_layer
    IF_SETHIDE(true, comp(219, 149));  // bonds_gratz:confirm_button
    IF_SETHIDE(false, comp(219, 58));  // bonds_gratz:confirm_button_runecoins
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
            IF_SETTEXT(`You've gained ${string0} Runecoins.`, comp(219, 55));  // bonds_gratz:runecoins_text_01
            IF_SETTEXT(`Current Runecoins : ${TOSTRING_LOCALISED(varclient_4659, 1)}`, comp(219, 56));  // bonds_gratz:runecoins_text_02
            IF_SETONVARCTRANSMIT(callback(script6189, 4659, 1), comp(219, 56));  // bonds_gratz:runecoins_text_02
            script13463(`You've gained ${string0} Runecoins.`);
            break;
        }
        case 3: {
            IF_SETTEXT(`You've purchased ${string0} Runecoins.`, comp(219, 55));  // bonds_gratz:runecoins_text_01
            IF_SETTEXT("They will be added to your account shortly.", comp(219, 56));  // bonds_gratz:runecoins_text_02
            script13463("Your Runecoins will be added to your account shortly.");
            break;
        }
        case 4: {
            IF_SETHIDE(true, comp(219, 1));  // bonds_gratz:firework_layer
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", comp(219, 55));  // bonds_gratz:runecoins_text_01
            IF_SETTEXT("Please try again later.", comp(219, 56));  // bonds_gratz:runecoins_text_02
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 5: {
            IF_SETHIDE(true, comp(219, 1));  // bonds_gratz:firework_layer
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", comp(219, 55));  // bonds_gratz:runecoins_text_01
            IF_SETTEXT("Please try again later.", comp(219, 56));  // bonds_gratz:runecoins_text_02
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
    };
    return;
}