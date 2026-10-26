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
    IF_SETHIDE(false, comp(219, 64));  // bonds_gratz:namechange_name
    IF_SETHIDE(true, comp(219, 66));  // bonds_gratz:preset_rent_text_01
    IF_SETHIDE(true, comp(219, 69));  // bonds_gratz:preset_rent_buttons_layer
    IF_SETHIDE(true, comp(219, 67));  // bonds_gratz:preset_rent_text_02
    IF_SETHIDE(true, comp(219, 68));  // bonds_gratz:preset_rent_icon
    IF_SETHIDE(false, comp(219, 14));  // bonds_gratz:generic_redeem_confirm_button
    IF_SETHIDE(true, comp(219, 13));  // bonds_gratz:generic_redeem_buttons_layer
    IF_SETGRAPHIC(dbrow_getfield(int0, 549040, 0), comp(219, 36));  // bonds_gratz:mtxgame_text_02
    IF_SETTEXTFONT(27 as fontmetrics, comp(219, 35));  // bonds_gratz:mtxgame_text_01
    if ((dbrow_getfield(int0, 549216, 0) == 2)) {
        if ((int2 == 1)) {
            string1 = strconcat(string1, "<br><br>As you have an active subscription, please see the support article below to find out more about when your membership will be available.");
            string2 = strconcat(string2, "<br><br>As you have an active subscription, please see the support article below to find out more about when your membership will be available.");
            IF_SETHIDE(true, comp(219, 14));  // bonds_gratz:generic_redeem_confirm_button
            IF_SETHIDE(false, comp(219, 13));  // bonds_gratz:generic_redeem_buttons_layer
        } else {
            string1 = strconcat(string1, " You can now log in to members' worlds.");
        };
    };
    switch (int1) {
        case 1: {
            script13463("Sorry, we were unable to process your request. Please try again later.");
            return;
        }
        case 2: {
            IF_SETTEXT(string0, comp(219, 34));  // bonds_gratz:goto_mems_button_disabled_layer
            IF_SETTEXT(string1, comp(219, 35));  // bonds_gratz:mtxgame_text_01
            if ((STRING_LENGTH(string3) > 0)) {
                printmessage(string3);
            } else {
                printmessage(string0);
            };
            break;
        }
        case 3: {
            IF_SETTEXT(string0, comp(219, 34));  // bonds_gratz:goto_mems_button_disabled_layer
            IF_SETTEXT(string2, comp(219, 35));  // bonds_gratz:mtxgame_text_01
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
            script9554(14352445, 14352446, 14352447, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request due to insufficient funds.", comp(219, 34));  // bonds_gratz:goto_mems_button_disabled_layer
            IF_SETTEXT("Please try again later.", comp(219, 35));  // bonds_gratz:mtxgame_text_01
            script1296("We were unable to process your request due to insufficient funds. Please try again later.");
            break;
        }
        case 5: {
            IF_SETHIDE(true, comp(219, 1));  // bonds_gratz:firework_layer
            script9554(14352445, 14352446, 14352447, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", comp(219, 34));  // bonds_gratz:goto_mems_button_disabled_layer
            IF_SETTEXT("Please try again later.", comp(219, 35));  // bonds_gratz:mtxgame_text_01
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
    };
    return;
}