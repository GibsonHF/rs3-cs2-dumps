//
function script14787(int0: number, int1: number): void {
    IF_SETHIDE(true, comp(219, 144));  // bonds_gratz:runecoins_layer
    IF_SETHIDE(true, comp(219, 139));  // bonds_gratz:generic_redeem_layer
    IF_SETHIDE(false, comp(219, 145));  // bonds_gratz:namechange_redeem_layer
    switch (int1) {
        case 1: {
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 2: {
            IF_SETTEXT("Bond redeemed.", comp(219, 60));  // bonds_gratz:namechange_1
            IF_SETTEXT("You can now change your display name.", comp(219, 61));  // bonds_gratz:namechange_2
            IF_SETHIDE(true, comp(219, 149));  // bonds_gratz:confirm_button
            IF_SETHIDE(false, comp(219, 59));  // bonds_gratz:namechange_redeem_confirm_button
            script13463("You've redeemed a bond to change your display name. You can now change your display name.");
            break;
        }
        case 3: {
            IF_SETTEXT("Bond redeemed", comp(219, 60));  // bonds_gratz:namechange_1
            IF_SETTEXT("You will be able to change your display name shortly.", comp(219, 61));  // bonds_gratz:namechange_2
            script13463("You've redeemed a bond to change your display name. You will be able to change your display name shortly.");
            break;
        }
        case 4: {
            IF_SETHIDE(true, comp(219, 1));  // bonds_gratz:firework_layer
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", comp(219, 60));  // bonds_gratz:namechange_1
            IF_SETTEXT("Please try again later.", comp(219, 61));  // bonds_gratz:namechange_2
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 5: {
            IF_SETHIDE(true, comp(219, 1));  // bonds_gratz:firework_layer
            script9554(14352520, 14352521, 14352522, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", comp(219, 60));  // bonds_gratz:namechange_1
            IF_SETTEXT("Please try again later.", comp(219, 61));  // bonds_gratz:namechange_2
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
    };
    return;
}