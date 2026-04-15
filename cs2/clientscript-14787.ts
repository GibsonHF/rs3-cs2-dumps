//
function script14787(int0: dbrow, int1: unknown_int): void {
    IF_SETHIDE(true, comp(219, 144));
    IF_SETHIDE(true, comp(219, 139));
    IF_SETHIDE(false, comp(219, 145));
    switch (int1) {
        case 1: {
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 2: {
            IF_SETTEXT("Bond redeemed.", comp(219, 60));
            IF_SETTEXT("You can now change your display name.", comp(219, 61));
            IF_SETHIDE(true, comp(219, 149));
            IF_SETHIDE(false, comp(219, 59));
            script13463("You've redeemed a bond to change your display name. You can now change your display name.");
            break;
        }
        case 3: {
            IF_SETTEXT("Bond redeemed", comp(219, 60));
            IF_SETTEXT("You will be able to change your display name shortly.", comp(219, 61));
            script13463("You've redeemed a bond to change your display name. You will be able to change your display name shortly.");
            break;
        }
        case 4: {
            IF_SETHIDE(true, comp(219, 1));
            script9554(comp(219, 136), comp(219, 137), comp(219, 138), "Sorry", 21218 as struct);
            IF_SETTEXT("We were unable to process your request.", comp(219, 60));
            IF_SETTEXT("Please try again later.", comp(219, 61));
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 5: {
            IF_SETHIDE(true, comp(219, 1));
            script9554(comp(219, 136), comp(219, 137), comp(219, 138), "Sorry", 21218 as struct);
            IF_SETTEXT("We were unable to process your request.", comp(219, 60));
            IF_SETTEXT("Please try again later.", comp(219, 61));
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
    };
    return;
}