//
function script14787(int0: number, int1: number): void {
    IF_SETHIDE(true, comp(219, 66));  // bonds_gratz:preset_rent_text_01
    IF_SETHIDE(true, comp(219, 64));  // bonds_gratz:namechange_name
    IF_SETHIDE(false, comp(219, 67));  // bonds_gratz:preset_rent_text_02
    switch (int1) {
        case 1: {
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 2: {
            IF_SETTEXT("Bond redeemed.", comp(219, 20));  // bonds_gratz:confirm_mems_button_on_layer
            IF_SETTEXT("You can now change your display name.", comp(219, 21));  // bonds_gratz:confirm_mems_button_over_layer
            IF_SETHIDE(true, comp(219, 69));  // bonds_gratz:preset_rent_buttons_layer
            IF_SETHIDE(false, comp(219, 19));  // bonds_gratz:confirm_mems_button
            script13463("You've redeemed a bond to change your display name. You can now change your display name.");
            break;
        }
        case 3: {
            IF_SETTEXT("Bond redeemed", comp(219, 20));  // bonds_gratz:confirm_mems_button_on_layer
            IF_SETTEXT("You will be able to change your display name shortly.", comp(219, 21));  // bonds_gratz:confirm_mems_button_over_layer
            script13463("You've redeemed a bond to change your display name. You will be able to change your display name shortly.");
            break;
        }
        case 4: {
            IF_SETHIDE(true, comp(219, 1));  // bonds_gratz:firework_layer
            script9554(14352445, 14352446, 14352447, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", comp(219, 20));  // bonds_gratz:confirm_mems_button_on_layer
            IF_SETTEXT("Please try again later.", comp(219, 21));  // bonds_gratz:confirm_mems_button_over_layer
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
        case 5: {
            IF_SETHIDE(true, comp(219, 1));  // bonds_gratz:firework_layer
            script9554(14352445, 14352446, 14352447, "Sorry", 21218);
            IF_SETTEXT("We were unable to process your request.", comp(219, 20));  // bonds_gratz:confirm_mems_button_on_layer
            IF_SETTEXT("Please try again later.", comp(219, 21));  // bonds_gratz:confirm_mems_button_over_layer
            script1296("Sorry, we were unable to process your request. Please try again later.");
            break;
        }
    };
    return;
}