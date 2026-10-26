//
function script14788(int0: number, int1: number): void {
    IF_SETHIDE(false, comp(219, 66));  // bonds_gratz:preset_rent_text_01
    IF_SETHIDE(true, comp(219, 64));  // bonds_gratz:namechange_name
    IF_SETHIDE(true, comp(219, 69));  // bonds_gratz:preset_rent_buttons_layer
    IF_SETHIDE(false, comp(219, 18));  // bonds_gratz:mems_buttons_layer
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
            IF_SETTEXT(`You've gained ${string0} Runecoins.`, comp(219, 15));  // bonds_gratz:mems_text_01
            IF_SETTEXT(`Current Runecoins : ${TOSTRING_LOCALISED(varclient_4659, 1)}`, comp(219, 16));  // bonds_gratz:mems_text_02
            IF_SETONVARCTRANSMIT(callback(script6189, 4659, 1), comp(219, 16));  // bonds_gratz:mems_text_02
            script13463(`You've gained ${string0} Runecoins.`);
            break;
        }
        case 3: {
            IF_SETTEXT(`You've purchased ${string0} Runecoins.`, comp(219, 15));  // bonds_gratz:mems_text_01
            IF_SETTEXT("They will be added to your account shortly.", comp(219, 16));  // bonds_gratz:mems_text_02
            script13463("Your Runecoins will be added to your account shortly.");
            break;
        }
        case 4: {
            IF_SETHIDE(true, comp(219, 1));  // bonds_gratz:firework_layer
            script9554(14352445, 14352446, 14352447, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", comp(219, 15));  // bonds_gratz:mems_text_01
            IF_SETTEXT("Please try again later.", comp(219, 16));  // bonds_gratz:mems_text_02
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 5: {
            IF_SETHIDE(true, comp(219, 1));  // bonds_gratz:firework_layer
            script9554(14352445, 14352446, 14352447, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", comp(219, 15));  // bonds_gratz:mems_text_01
            IF_SETTEXT("Please try again later.", comp(219, 16));  // bonds_gratz:mems_text_02
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
    };
    return;
}