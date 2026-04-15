//
function script15251(int0: int): void {
    if ((varclient_6817 == int0)) {
        return;
    };
    var string0 = "";
    IF_SETHIDE(false, comp(724, 0));
    IF_SETHIDE(true, comp(724, 2));
    IF_SETHIDE(true, comp(724, 3));
    IF_SETHIDE(true, comp(744, 59));
    script2954(0);
    switch (int0) {
        case 0: {
            script15270("Checking Steam login status...");
            break;
        }
        case 1: {
            IF_SETSIZE(300, 210, 0, 0, comp(724, 0));
            IF_SETSIZE(0, 250, 1, 0, comp(744, 55));
            IF_SETHIDE(false, comp(724, 2));
            IF_SETONCLICK(callback(script15259), comp(724, 20));
            script15268(47448083);
            script15272();
            break;
        }
        case 2: {
            IF_SETTEXT("Welcome To RuneScape", comp(724, 4));
            IF_SETSIZE(300, 240, 0, 0, comp(724, 0));
            IF_SETSIZE(0, 280, 1, 0, comp(744, 55));
            IF_SETHIDE(false, comp(724, 3));
            IF_SETHIDE(false, comp(724, 5));
            IF_SETHIDE(true, comp(724, 6));
            IF_SETHIDE(true, comp(724, 10));
            script10704(comp(724, 16), "Yes - Link my RuneScape account with Steam.", 4476 as dbrow);
            script10704(comp(724, 17), "No - Create a new account with Steam.", 4476 as dbrow);
            if ((CC_FIND(comp(724, 16), 0) == 1)) {
                CC_SETONBUTTONCLICK(callback(script15265));
            };
            if ((CC_FIND(comp(724, 17), 0) == 1)) {
                CC_SETONBUTTONCLICK(callback(script15264));
            };
            script15272();
            break;
        }
        case 5: {
            IF_SETTEXT("Create New Account", comp(724, 4));
            IF_SETSIZE(300, 200, 0, 0, comp(724, 0));
            IF_SETSIZE(0, 240, 1, 0, comp(744, 55));
            IF_SETHIDE(false, comp(724, 3));
            IF_SETHIDE(true, comp(724, 5));
            IF_SETHIDE(false, comp(724, 6));
            IF_SETHIDE(true, comp(724, 10));
            script10704(comp(724, 8), "Create", 17062 as dbrow);
            script10704(comp(724, 9), "Go Back", 17061 as dbrow);
            if ((CC_FIND(comp(724, 8), 0) == 1)) {
                CC_SETONBUTTONCLICK(callback(script2661));
            };
            if ((CC_FIND(comp(724, 9), 0) == 1)) {
                CC_SETONBUTTONCLICK(callback(script1396));
            };
            break;
        }
        case 4: {
            IF_SETTEXT("Welcome To RuneScape", comp(724, 4));
            IF_SETSIZE(300, 310, 0, 0, comp(724, 0));
            IF_SETSIZE(0, 330, 1, 0, comp(744, 55));
            IF_SETHIDE(false, comp(724, 3));
            IF_SETHIDE(true, comp(724, 5));
            IF_SETHIDE(true, comp(724, 6));
            IF_SETHIDE(false, comp(724, 10));
            script10704(comp(724, 13), "Launch web page", 17061 as dbrow);
            script10704(comp(724, 14), "Cancel", 17063 as dbrow);
            IF_SETONCLICK(callback(script15260), comp(724, 12));
            if ((CC_FIND(47448078, 0) == 1)) {
                CC_SETONBUTTONCLICK(callback(script15252));
            };
            if ((CC_FIND(comp(724, 13), 0) == 1)) {
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
            IF_SETSIZE(0, 74, 1, 1, comp(744, 55));
            IF_SETHIDE(false, comp(744, 59));
            script15269("We failed to link your Steam account. Please try again later.", "Back", 1, 0);
            break;
        }
        case 7: {
            script15270("Logging In - Please Wait");
            break;
        }
        case 8: {
            IF_SETSIZE(0, 74, 1, 1, comp(744, 55));
            IF_SETHIDE(false, comp(744, 59));
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