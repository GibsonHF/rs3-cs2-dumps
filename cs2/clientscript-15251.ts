//
function script15251(int0: number): void {
    if ((varclient_6817 == int0)) {
        return;
    };
    var string0 = "";
    IF_SETHIDE(0, 47448064);
    IF_SETHIDE(1, 47448066);
    IF_SETHIDE(1, 47448067);
    IF_SETHIDE(1, 48758843);
    script2954(0);
    switch (int0) {
        case 0: {
            script15270("Checking Steam login status...");
            break;
        }
        case 1: {
            IF_SETSIZE(300, 210, 0, 0, 47448064);
            IF_SETSIZE(0, 250, 1, 0, 48758839);
            IF_SETHIDE(0, 47448066);
            IF_SETONCLICK(callback(script15259), 47448084);
            script15268(47448083);
            script15272();
            break;
        }
        case 2: {
            IF_SETTEXT("Welcome To RuneScape", 47448068);
            IF_SETSIZE(300, 240, 0, 0, 47448064);
            IF_SETSIZE(0, 280, 1, 0, 48758839);
            IF_SETHIDE(0, 47448067);
            IF_SETHIDE(0, 47448069);
            IF_SETHIDE(1, 47448070);
            IF_SETHIDE(1, 47448074);
            script10704(47448080, "Yes - Link my RuneScape account with Steam.", 4476);
            script10704(47448081, "No - Create a new account with Steam.", 4476);
            if ((CC_FIND(47448080, 0) == 1)) {
                CC_SETONBUTTONCLICK(callback(script15265));
            };
            if ((CC_FIND(47448081, 0) == 1)) {
                CC_SETONBUTTONCLICK(callback(script15264));
            };
            script15272();
            break;
        }
        case 5: {
            IF_SETTEXT("Create New Account", 47448068);
            IF_SETSIZE(300, 200, 0, 0, 47448064);
            IF_SETSIZE(0, 240, 1, 0, 48758839);
            IF_SETHIDE(0, 47448067);
            IF_SETHIDE(1, 47448069);
            IF_SETHIDE(0, 47448070);
            IF_SETHIDE(1, 47448074);
            script10704(47448072, "Create", 17062);
            script10704(47448073, "Go Back", 17061);
            if ((CC_FIND(47448072, 0) == 1)) {
                CC_SETONBUTTONCLICK(callback(script2661));
            };
            if ((CC_FIND(47448073, 0) == 1)) {
                CC_SETONBUTTONCLICK(callback(script1396));
            };
            break;
        }
        case 4: {
            IF_SETTEXT("Welcome To RuneScape", 47448068);
            IF_SETSIZE(300, 310, 0, 0, 47448064);
            IF_SETSIZE(0, 330, 1, 0, 48758839);
            IF_SETHIDE(0, 47448067);
            IF_SETHIDE(1, 47448069);
            IF_SETHIDE(1, 47448070);
            IF_SETHIDE(0, 47448074);
            script10704(47448077, "Launch web page", 17061);
            script10704(47448078, "Cancel", 17063);
            IF_SETONCLICK(callback(script15260), 47448076);
            if ((CC_FIND(47448078, 0) == 1)) {
                CC_SETONBUTTONCLICK(callback(script15252));
            };
            if ((CC_FIND(47448077, 0) == 1)) {
                CC_SETONBUTTONCLICK(callback(script15266));
            };
            string0 = "If the browser page didn't launch or it closed without your account being linked use this button to re-launch the web page.";
            IF_SETONMOUSEREPEAT(callback(script8802, string0, 1000, 0, -2147483645, -2147483643, 27, 16777215), 47448077);
            script15272();
            break;
        }
        case 3: {
            script15270("Account linking in progress.");
            break;
        }
        case 6: {
            IF_SETSIZE(0, 74, 1, 1, 48758839);
            IF_SETHIDE(0, 48758843);
            script15269("We failed to link your Steam account. Please try again later.", "Back", 1, 0);
            break;
        }
        case 7: {
            script15270("Logging In - Please Wait");
            break;
        }
        case 8: {
            IF_SETSIZE(0, 74, 1, 1, 48758839);
            IF_SETHIDE(0, 48758843);
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