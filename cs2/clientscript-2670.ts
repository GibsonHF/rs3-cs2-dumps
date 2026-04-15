//
function script2670(): void {
    if ((IF_GETHIDE(comp(906, 124)) == true)) {
        return;
    };
    var string0 = "Email Registration";
    var int0 = 0;
    var string1 = "";
    var string2 = "";
    var int1 = -1;
    switch (USERDETAIL_LOBBY_EMAILSTATUS()) {
        case 0: {
            int0 = 1;
            string1 = "Unregistered";
            string2 = "You do not currently have an email address registered. Use this button to register.";
            int1 = 2510;
            break;
        }
        case 1: {
            int0 = 1;
            string1 = "Pending Parental Confirmation";
            string2 = "You have registered your email address. We are currently waiting for your parent to confirm their email address. Use this button to submit a confirmation code.";
            int1 = 2510;
            break;
        }
        case 2: {
            int0 = 1;
            string1 = "Pending Confirmation";
            string2 = "Your email address is currently pending confirmation. Use this button to submit a confirmation code.";
            int1 = 2510;
            break;
        }
        case 3: {
            string1 = "Registered";
            string2 = "Your email address is now registered. Use this button to view or change your email preferences.";
            int1 = 2511;
            break;
        }
        case 4: {
            string1 = "No longer registered";
            string2 = "Your account no longer has a registered email address. Use this button to register again.";
            int1 = 2511;
            break;
        }
    };
    if ((int0 == 1)) {
        script10017(comp(906, 124), -1, 6, 1, "null", comp(-1, 65535));
    };
    script10059(string0, string1, string2, 59375741);
    IF_SETONBUTTONCLICK(callback(script3088, int1), 59375741);
    return;
}