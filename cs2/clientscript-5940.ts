//
function script5940(): void {
    varclient_1411 = true;
    varclient_2552 = "";
    varclient_2553 = "";
    varclient_1919 = 0;
    IF_SETHIDE(0, 59375764);
    IF_SETHIDE(0, 52625440);
    if ((varplayer_1749 >= 4163)) {
        if ((((DATE_RUNEDAY() - varplayer_1749) >= 5) && (varbitplayer_16464 == 2))) {
            IF_SETHIDE(1, 52625444);
        };
    } else {
        IF_SETHIDE(0, 52625444);
        IF_SETTEXT("", 52625426);
    };
    if (((varplayer_3185 == 1) || (varplayer_3185 == 5))) {
        IF_SETHIDE(1, 52625442);
    };
    if (((varplayer_3185 == 3) || (varplayer_3185 == 6))) {
        IF_SETTEXT("To continue your adventure, you need to validate your account using the email address you entered at login.", 52625426);
        IF_SETTEXT("No email?", 52625414);
        IF_SETTEXT("Please use the button below to request an email so we can validate your account.<br>If you can't find the email, make sure to check your junk or spam folder.", 52625415);
        IF_SETTEXT("Need a change?", 52625419);
        IF_SETTEXT("If you need to update your email address, please use the button to access your account settings.", 52625420);
        IF_SETTEXT("Account Settings", 52625421);
        IF_SETOP(1, "Account Settings", 52625421);
    } else {
        IF_SETTEXT("To continue your adventure, you need to validate your account using an email address.", 52625426);
        IF_SETTEXT("No email?", 52625414);
        IF_SETTEXT("Please use the button below to request an email so we can validate your account.<br>If you can't find the email, make sure to check your junk or spam folder.", 52625415);
        IF_SETTEXT("Enter your email", 52625419);
        IF_SETTEXT("Validate your email address on our website by using the button below.", 52625420);
        IF_SETTEXT("Validate Email", 52625421);
        IF_SETOP(1, "Validate Email", 52625421);
    };
    return;
}