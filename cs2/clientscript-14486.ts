//
function script14486(int0: number, int1: number): void {
    if ((DB_GETFIELDCOUNT(int0, 549136) > 0)) {
        switch (dbrow_getfield(int0, 549136, 0)) {
            case 1: {
                script14788(int0, int1);
                break;
            }
            case 3: {
                script14787(int0, int1);
                break;
            }
        };
        return;
    };
    var string0 = `You've purchased ${dbrow_getfield(int0, 548864, 0)}`;
    var string1 = "";
    if ((DB_GETFIELDCOUNT(int0, 549088) > 0)) {
        string1 = dbrow_getfield(int0, 549088, 0);
    };
    var string2 = "";
    if ((DB_GETFIELDCOUNT(int0, 549104) > 0)) {
        string2 = dbrow_getfield(int0, 549104, 0);
    };
    var string3 = "";
    if ((DB_GETFIELDCOUNT(int0, 549120) > 0)) {
        string3 = dbrow_getfield(int0, 549120, 0);
    };
    IF_SETHIDE(false, comp(219, 139));  // bonds_gratz:generic_redeem_layer
    IF_SETHIDE(true, comp(219, 144));  // bonds_gratz:runecoins_layer
    IF_SETHIDE(true, comp(219, 149));  // bonds_gratz:confirm_button
    IF_SETGRAPHIC(dbrow_getfield(int0, 549040, 0), comp(219, 100));  // bonds_gratz:generic_graphic
    switch (int1) {
        case 1: {
            script13463("Sorry, we were unable to process your request. Please try again later.");
            return;
        }
        case 2: {
            IF_SETTEXT(string0, comp(219, 98));  // bonds_gratz:generic_text1
            IF_SETTEXT(string1, comp(219, 99));  // bonds_gratz:generic_text2
            if ((STRING_LENGTH(string3) > 0)) {
                printmessage(string3);
            } else {
                printmessage(string0);
            };
            break;
        }
        case 3: {
            IF_SETTEXT(string0, comp(219, 98));  // bonds_gratz:generic_text1
            IF_SETTEXT(string2, comp(219, 99));  // bonds_gratz:generic_text2
            if ((STRING_LENGTH(string3) > 0)) {
                printmessage(string3);
            } else {
                printmessage(string0);
            };
            if ((STRING_LENGTH(string2) > 0)) {
                printmessage(string2);
            };
            break;
        }
        case 4: {
            IF_SETHIDE(true, comp(219, 1));  // bonds_gratz:firework_layer
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request due to insufficient funds.", comp(219, 98));  // bonds_gratz:generic_text1
            IF_SETTEXT("Please try again later.", comp(219, 99));  // bonds_gratz:generic_text2
            script1296("We were unable to process your request due to insufficient funds. Please try again later.");
            break;
        }
        case 5: {
            IF_SETHIDE(true, comp(219, 1));  // bonds_gratz:firework_layer
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", comp(219, 98));  // bonds_gratz:generic_text1
            IF_SETTEXT("Please try again later.", comp(219, 99));  // bonds_gratz:generic_text2
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
    };
    return;
}