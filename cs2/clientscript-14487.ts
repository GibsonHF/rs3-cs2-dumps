//
function script14487(int0: number, int1: number): void {
    IF_SETHIDE(0, 14352523);
    IF_SETHIDE(1, 14352533);
    var int2 = dbrow_getfield(int0, 549168, 0);
    IF_SETGRAPHIC(dbrow_getfield(int0, 549040, 0), 14352484);
    if ((script12278() == 0)) {
        IF_SETHIDE(1, 14352398);
        IF_SETHIDE(0, 14352397);
    };
    switch (int1) {
        case 1: {
            script1296("Sorry, we were unable to process your request. Please try again later.");
            return;
        }
        case 2: {
            IF_SETTEXT(`You've gained ${inttostring(int2, 10)} ${script4583(int2, "month", "months")} of <br>RuneMetrics Pro.`, 14352482);
            if ((script12278() == 1)) {
                IF_SETHIDE(1, 14352483);
            } else {
                IF_SETTEXT("Some features will not be available until <br>you log out and log back in.", 14352483);
            };
            script13463(`You've gained ${inttostring(int2, 10)} months of RuneMetrics Pro.`);
            break;
        }
        case 3: {
            IF_SETTEXT(`You've gained ${inttostring(int2, 10)} ${script4583(int2, "month", "months")} of <br>RuneMetrics Pro.`, 14352482);
            IF_SETTEXT("It will be added to your account shortly.", 14352483);
            script13463("Your RuneMetrics Pro will be added to your account shortly.");
            break;
        }
        case 4: {
            IF_SETHIDE(1, 14352385);
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", 14352482);
            IF_SETTEXT("Please try again later.", 14352483);
            script1296("Sorry, we were unable to process your request. Please try again later.");
            return;
        }
        case 5: {
            IF_SETHIDE(1, 14352385);
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", 14352482);
            IF_SETTEXT("Please try again later.", 14352483);
            script1296("Sorry, we were unable to process your request. Please try again later.");
            return;
        }
    };
    return;
}