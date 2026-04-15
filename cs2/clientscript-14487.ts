//
function script14487(int0: dbrow, int1: unknown_int): void {
    IF_SETHIDE(false, comp(219, 139));
    IF_SETHIDE(true, comp(219, 149));
    var int2 = dbrow_getfield(int0, 549168, 0);
    stack(dbrow_getfield(int0, 549040, 0));
    stack(14352484);
    IF_SETGRAPHIC();
    if ((script12278() == 0)) {
        IF_SETHIDE(true, comp(219, 14));
        IF_SETHIDE(false, comp(219, 13));
    };
    switch (int1) {
        case 1: {
            script1296("Sorry, we were unable to process your request. Please try again later.");
            return;
        }
        case 2: {
            IF_SETTEXT(`You've gained ${inttostring(int2, 10)} ${script4583(int2, "month", "months")} of <br>RuneMetrics Pro.`, comp(219, 98));
            if ((script12278() == 1)) {
                IF_SETHIDE(true, comp(219, 99));
            } else {
                IF_SETTEXT("Some features will not be available until <br>you log out and log back in.", comp(219, 99));
            };
            script13463(`You've gained ${inttostring(int2, 10)} months of RuneMetrics Pro.`);
            break;
        }
        case 3: {
            IF_SETTEXT(`You've gained ${inttostring(int2, 10)} ${script4583(int2, "month", "months")} of <br>RuneMetrics Pro.`, comp(219, 98));
            IF_SETTEXT("It will be added to your account shortly.", comp(219, 99));
            script13463("Your RuneMetrics Pro will be added to your account shortly.");
            break;
        }
        case 4: {
            IF_SETHIDE(true, comp(219, 1));
            script9554(comp(219, 136), comp(219, 137), comp(219, 138), "Sorry", 21218 as struct);
            IF_SETTEXT("We were unable to process your request.", comp(219, 98));
            IF_SETTEXT("Please try again later.", comp(219, 99));
            script1296("Sorry, we were unable to process your request. Please try again later.");
            return;
        }
        case 5: {
            IF_SETHIDE(true, comp(219, 1));
            script9554(comp(219, 136), comp(219, 137), comp(219, 138), "Sorry", 21218 as struct);
            IF_SETTEXT("We were unable to process your request.", comp(219, 98));
            IF_SETTEXT("Please try again later.", comp(219, 99));
            script1296("Sorry, we were unable to process your request. Please try again later.");
            return;
        }
    };
    return;
}