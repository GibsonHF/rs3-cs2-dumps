//
function script14787(int0: number, int1: number): void {
    IF_SETHIDE(1, 14352528);
    IF_SETHIDE(1, 14352523);
    IF_SETHIDE(0, 14352529);
    switch (int1) {
        case 1: {
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 2: {
            IF_SETTEXT("Bond redeemed.", 14352444);
            IF_SETTEXT("You can now change your display name.", 14352445);
            IF_SETHIDE(1, 14352533);
            IF_SETHIDE(0, 14352443);
            script13463("You've redeemed a bond to change your display name. You can now change your display name.");
            break;
        }
        case 3: {
            IF_SETTEXT("Bond redeemed", 14352444);
            IF_SETTEXT("You will be able to change your display name shortly.", 14352445);
            script13463("You've redeemed a bond to change your display name. You will be able to change your display name shortly.");
            break;
        }
        case 4: {
            IF_SETHIDE(1, 14352385);
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", 14352444);
            IF_SETTEXT("Please try again later.", 14352445);
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 5: {
            IF_SETHIDE(1, 14352385);
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", 14352444);
            IF_SETTEXT("Please try again later.", 14352445);
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
    };
    return;
}