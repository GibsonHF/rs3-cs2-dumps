//
function script21168(): void {
    var int1 = comp(1578, 8);  // plugin_hub_parent_install:button_wrapper
    var int2 = 48;
    var int3 = false;
    var int4 = true;
    var string0 = "";
    var int5 = 0;
    var int6 = comp(1578, 9);  // plugin_hub_parent_install:prepare_buttons
    var int7 = comp(1578, 11);  // plugin_hub_parent_install:install_button
    var int8 = comp(1578, 14);  // plugin_hub_parent_install:prepare_button
    var int9 = comp(1578, 15);  // plugin_hub_parent_install:prepare_spinner
    CC_DELETEALL(int1);
    IF_SETHIDE(true, int6);
    IF_SETHIDE(true, int8);
    IF_SETHIDE(true, int9);
    switch (int0) {
        case 0:
        case 1: {
            int3 = true;
            string0 = "RuneScape uses mod.io to support user-generated content. By selected 'I agree' you agree to mod.io Terms of Use and a mod.io account will be created for you. Please see the mod.io Privacy Policy on how mod.io processes your personal data.";
            int5 = script20478(string0, 400, 2100, 0);
            script20480(int1, 0, 0, 0, 1, 0, 400, int5, 0, 0, 2100, string0, -1, 1, 1);
            script16747(int8, 17062);
            IF_SETPOSITION(0, (int5 + 4), 1, 0, int8);
            IF_SETTEXT("Agree", int8);
            stack(21169);
            IF_SETONBUTTONCLICK("", int8);
            IF_SETHIDE(false, int8);
            script16747(int9, 17061);
            IF_SETPOSITION(0, (((int5 + 27) + 4) + 4), 1, 0, int9);
            IF_SETTEXT("Decline", int9);
            stack(21170);
            IF_SETONBUTTONCLICK("", int9);
            IF_SETHIDE(false, int9);
            break;
        }
        case 2:
        case 4: {
            if ((int0 == 4)) {
                string0 = "The email address entered could not be used. Please enter another email address.";
            } else {
                string0 = "Please enter your email address.";
            };
            int5 = script20478(string0, 400, 2100, 0);
            script20480(int1, 0, 0, 0, 1, 0, 400, int5, 0, 0, 2100, string0, -1, 1, 1);
            script16747(int7, 4488);
            IF_SETPOSITION(14, (int5 + 4), 1, 0, int6);
            IF_SETTEXT("", int7);
            unk10992("Email Address (me@example.com)", -1701144064, 255, int7);
            stack(21171);
            stack(-2147483647);
            stack("i");
            stack(int7);
            unk11865();
            IF_SETGRAPHIC(30018 as graphic, comp(1578, 13));  // plugin_hub_parent_install:install_spinner
            script9077(int7, 1, 1, 0, 255);
            IF_SETHIDE(false, int6);
            script16747(int8, 17062);
            IF_SETPOSITION(0, (((int5 + 27) + 4) + 4), 1, 0, int8);
            IF_SETTEXT("Submit Email", int8);
            stack(21173);
            IF_SETONBUTTONCLICK("", int8);
            IF_SETHIDE(false, int8);
            script16747(int9, 17063);
            IF_SETPOSITION(0, ((((int5 + 54) + 4) + 4) + 4), 1, 0, int9);
            IF_SETTEXT("Cancel", int9);
            stack(21178);
            IF_SETONBUTTONCLICK("", int9);
            IF_SETHIDE(false, int9);
            break;
        }
        case 3: {
            int4 = false;
            break;
        }
        case 5:
        case 7: {
            if ((int0 == 7)) {
                string0 = "Mod.io could not validate the code you entered. Please check the code was entered correctly and try again.";
            } else {
                string0 = "Mod.io has sent a validation code to the email address you entered. Please enter it now.";
            };
            int5 = script20478(string0, 400, 2100, 0);
            script20480(int1, 0, 0, 0, 1, 0, 400, int5, 0, 0, 2100, string0, -1, 1, 1);
            script16747(int7, 4488);
            IF_SETPOSITION(14, (int5 + 4), 1, 0, int6);
            IF_SETTEXT("", int7);
            IF_SETGRAPHIC(30018 as graphic, comp(1578, 13));  // plugin_hub_parent_install:install_spinner
            unk10992("Confirmation Code", -1701144064, 255, int7);
            stack(21172);
            stack(-2147483647);
            stack("i");
            stack(int7);
            unk11865();
            script9077(int7, 1, 1, 0, 5);
            IF_SETHIDE(false, int6);
            script16747(int8, 17062);
            IF_SETPOSITION(0, (((int5 + 27) + 4) + 4), 1, 0, int8);
            IF_SETTEXT("Submit Code", int8);
            stack(21175);
            IF_SETONBUTTONCLICK("", int8);
            IF_SETHIDE(false, int8);
            script16747(int9, 17063);
            IF_SETPOSITION(0, ((((int5 + 54) + 4) + 4) + 4), 1, 0, int9);
            IF_SETTEXT("Cancel", int9);
            stack(21178);
            IF_SETONBUTTONCLICK("", int9);
            IF_SETHIDE(false, int9);
            break;
        }
        case 6: {
            int4 = false;
            break;
        }
        case 8: {
            int5 = script20478(string0, 400, 2100, 0);
            script20480(int1, 0, 0, 0, 1, 0, 400, int5, 0, 0, 2100, string0, -1, 1, 1);
            script16747(int8, 17062);
            IF_SETPOSITION(0, (int5 + 4), 1, 0, int8);
            IF_SETTEXT("Close", int8);
            stack(21177);
            IF_SETONBUTTONCLICK("", int8);
            IF_SETHIDE(false, int8);
            break;
        }
    };
    IF_SETHIDE(int4, comp(1578, 23));  // plugin_hub_parent_install:loading_blackout
    IF_SETHIDE(int3, comp(1578, 18));  // plugin_hub_parent_install:dependency_list
    if ((int3 == true)) {
        IF_SETSIZE(0, 70, 1, 1, comp(1578, 8));  // plugin_hub_parent_install:button_wrapper
        IF_SETSIZE(0, 48, 1, 0, comp(1578, 16));  // plugin_hub_parent_install:dependency_wrapper
    } else {
        IF_SETSIZE(0, 110, 1, 1, comp(1578, 8));  // plugin_hub_parent_install:button_wrapper
        IF_SETSIZE(0, 88, 1, 0, comp(1578, 16));  // plugin_hub_parent_install:dependency_wrapper
    };
    return;
}