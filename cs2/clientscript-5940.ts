//
function script5940(): void {
    varclient_1411 = true;
    varclient_2552 = "";
    varclient_2553 = "";
    varclient_1919 = 0;
    IF_SETHIDE(false, comp(906, 148));
    IF_SETHIDE(false, comp(803, 32));
    if ((varplayer_1749 >= 4163)) {
        if ((((DATE_RUNEDAY() - varplayer_1749) >= 5) && (varbitplayer_16464 == 2))) {
            IF_SETHIDE(true, comp(803, 36));
        };
    } else {
        IF_SETHIDE(false, comp(803, 36));
        IF_SETTEXT("", comp(803, 18));
    };
    if (((varplayer_3185 == 1) || (varplayer_3185 == 5))) {
        IF_SETHIDE(true, comp(803, 34));
    };
    if (((varplayer_3185 == 3) || (varplayer_3185 == 6))) {
        IF_SETTEXT("To continue your adventure, you need to validate your account using the email address you entered at login.", comp(803, 18));
        IF_SETTEXT("No email?", comp(803, 6));
        IF_SETTEXT("Please use the button below to request an email so we can validate your account.<br>If you can't find the email, make sure to check your junk or spam folder.", comp(803, 7));
        IF_SETTEXT("Need a change?", comp(803, 11));
        IF_SETTEXT("If you need to update your email address, please use the button to access your account settings.", comp(803, 12));
        IF_SETTEXT("Account Settings", comp(803, 13));
        IF_SETOP(1, "Account Settings", comp(803, 13));
    } else {
        IF_SETTEXT("To continue your adventure, you need to validate your account using an email address.", comp(803, 18));
        IF_SETTEXT("No email?", comp(803, 6));
        IF_SETTEXT("Please use the button below to request an email so we can validate your account.<br>If you can't find the email, make sure to check your junk or spam folder.", comp(803, 7));
        IF_SETTEXT("Enter your email", comp(803, 11));
        IF_SETTEXT("Validate your email address on our website by using the button below.", comp(803, 12));
        IF_SETTEXT("Validate Email", comp(803, 13));
        IF_SETOP(1, "Validate Email", comp(803, 13));
    };
    return;
}