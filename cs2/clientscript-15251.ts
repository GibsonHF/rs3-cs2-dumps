//
function script15251(int0: number): void {
    if ((varclient_6817 == int0)) {
        return;
    };
    var string0 = "";
    IF_SETHIDE(false, comp(724, 0));  // login_steam:main
    IF_SETHIDE(true, comp(724, 2));  // login_steam:sso_login
    IF_SETHIDE(true, comp(724, 3));  // login_steam:link_account
    IF_SETHIDE(true, comp(744, 59));  // loginscreen:desktop_background_lower
    script2954(0);
    switch (int0) {
        case 0: {
            script15270("Checking Steam login status...");
            break;
        }
        case 1: {
            IF_SETSIZE(300, 210, 0, 0, comp(724, 0));  // login_steam:main
            IF_SETSIZE(0, 250, 1, 0, comp(744, 55));  // loginscreen:desktop_background_upper
            IF_SETHIDE(false, comp(724, 2));  // login_steam:sso_login
            IF_SETONCLICK(callback(script15259), comp(724, 20));  // login_steam:login_button
            script15268(47448083);
            script15272();
            break;
        }
        case 2: {
            IF_SETTEXT("Welcome To RuneScape", comp(724, 4));  // login_steam:welcome_link
            IF_SETSIZE(300, 240, 0, 0, comp(724, 0));  // login_steam:main
            IF_SETSIZE(0, 280, 1, 0, comp(744, 55));  // loginscreen:desktop_background_upper
            IF_SETHIDE(false, comp(724, 3));  // login_steam:link_account
            IF_SETHIDE(false, comp(724, 5));  // login_steam:link_buttons
            IF_SETHIDE(true, comp(724, 6));  // login_steam:link_new_confirm
            IF_SETHIDE(true, comp(724, 10));  // login_steam:link_external_login
            script10704(47448080, "Yes - Link my RuneScape account with Steam.", 4476);
            script10704(47448081, "No - Create a new account with Steam.", 4476);
            if ((CC_FIND(comp(724, 16), 0) == 1)) {  // login_steam:button_yes
                CC_SETONBUTTONCLICK(callback(script15265));
            };
            if ((CC_FIND(comp(724, 17), 0) == 1)) {  // login_steam:button_no
                CC_SETONBUTTONCLICK(callback(script15264));
            };
            script15272();
            break;
        }
        case 5: {
            IF_SETTEXT("Create New Account", comp(724, 4));  // login_steam:welcome_link
            IF_SETSIZE(300, 200, 0, 0, comp(724, 0));  // login_steam:main
            IF_SETSIZE(0, 240, 1, 0, comp(744, 55));  // loginscreen:desktop_background_upper
            IF_SETHIDE(false, comp(724, 3));  // login_steam:link_account
            IF_SETHIDE(true, comp(724, 5));  // login_steam:link_buttons
            IF_SETHIDE(false, comp(724, 6));  // login_steam:link_new_confirm
            IF_SETHIDE(true, comp(724, 10));  // login_steam:link_external_login
            script10704(47448072, "Create", 17062);
            script10704(47448073, "Go Back", 17061);
            if ((CC_FIND(comp(724, 8), 0) == 1)) {  // login_steam:confirm
                CC_SETONBUTTONCLICK(callback(script2661));
            };
            if ((CC_FIND(comp(724, 9), 0) == 1)) {  // login_steam:cancel
                CC_SETONBUTTONCLICK(callback(script1396));
            };
            break;
        }
        case 4: {
            IF_SETTEXT("Welcome To RuneScape", comp(724, 4));  // login_steam:welcome_link
            IF_SETSIZE(300, 310, 0, 0, comp(724, 0));  // login_steam:main
            IF_SETSIZE(0, 330, 1, 0, comp(744, 55));  // loginscreen:desktop_background_upper
            IF_SETHIDE(false, comp(724, 3));  // login_steam:link_account
            IF_SETHIDE(true, comp(724, 5));  // login_steam:link_buttons
            IF_SETHIDE(true, comp(724, 6));  // login_steam:link_new_confirm
            IF_SETHIDE(false, comp(724, 10));  // login_steam:link_external_login
            script10704(47448077, "Launch web page", 17061);
            script10704(47448078, "Cancel", 17063);
            IF_SETONCLICK(callback(script15260), comp(724, 12));  // login_steam:login_button_external
            if ((CC_FIND(comp(724, 14), 0) == 1)) {  // login_steam:cancel_link
                CC_SETONBUTTONCLICK(callback(script15252));
            };
            if ((CC_FIND(comp(724, 13), 0) == 1)) {  // login_steam:reopen_page
                CC_SETONBUTTONCLICK(callback(script15266));
            };
            string0 = "If the browser page didn't launch or it closed without your account being linked use this button to re-launch the web page.";
            IF_SETONMOUSEREPEAT(callback(script8802, string0, 1000, 0, -2147483645, -2147483643, 27, 16777215), comp(724, 13));  // login_steam:reopen_page
            script15272();
            break;
        }
        case 3: {
            script15270("Account linking in progress.");
            break;
        }
        case 6: {
            IF_SETSIZE(0, 74, 1, 1, comp(744, 55));  // loginscreen:desktop_background_upper
            IF_SETHIDE(false, comp(744, 59));  // loginscreen:desktop_background_lower
            script15269("We failed to link your Steam account. Please try again later.", "Back", 1, 0);
            break;
        }
        case 7: {
            script15270("Logging In - Please Wait");
            break;
        }
        case 8: {
            IF_SETSIZE(0, 74, 1, 1, comp(744, 55));  // loginscreen:desktop_background_upper
            IF_SETHIDE(false, comp(744, 59));  // loginscreen:desktop_background_lower
            script15269("Logging in - Please Wait", "Abort Login", 0, 0);
            break;
        }
        default: {
            script15256();
            break;
        }
    };
    varclient_6817 = int0;
    return;
}