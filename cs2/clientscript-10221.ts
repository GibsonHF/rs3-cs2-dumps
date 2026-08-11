//
function script10221(int0: number, int1: number): void {
    if ((int0 == 1)) {
        if ((int1 == 0)) {
            printmessage("You have logged in to Twitch!");
            varbitclient_23064 = 1;
            script9528(15204422, 100);
            IF_SETHIDE(true, comp(232, 72));  // toplevel_v2_parent_suboverlay_twitch:twitch_login
            IF_SETHIDE(true, comp(232, 73));  // toplevel_v2_parent_suboverlay_twitch:twitch_setup
            IF_SETHIDE(true, comp(232, 69));  // toplevel_v2_parent_suboverlay_twitch:logging_in
            IF_SETHIDE(true, comp(232, 64));  // toplevel_v2_parent_suboverlay_twitch:api_check
            IF_SETHIDE(false, comp(232, 66));  // toplevel_v2_parent_suboverlay_twitch:autosetup
            IF_SETONTIMER(callback(script10142, CLIENTCLOCK()), comp(232, 66));  // toplevel_v2_parent_suboverlay_twitch:autosetup
            IF_SETHIDE(true, comp(232, 38));  // toplevel_v2_parent_suboverlay_twitch:logout_btn_disable
            IF_SETHIDE(false, comp(232, 37));  // toplevel_v2_parent_suboverlay_twitch:logout_btn
            script7698();
        } else if ((int0 == 2)) {
            if ((int1 == 0)) {
                printmessage("You have successfully logged out from Twitch.");
                script3147();
                script10118();
                script7698();
            } else if ((int0 == 4)) {
                if ((int1 == 13)) {
                    varclient_4287 = "";
                    varclient_4288 = 0;
                    varbitclient_23064 = 0;
                    varbitclient_23079 = 0;
                    IF_SETTEXT("", comp(232, 93));  // toplevel_v2_parent_suboverlay_twitch:login_password
                    printmessage("Your Twitch username or Password is incorrect.");
                };
                script10118();
            } else if ((int0 == 34)) {
                if ((int1 == 0)) {
                    script10111();
                };
            } else if ((int0 == 30)) {
                if (((int1 == 2) || (int1 == 1))) {
                } else if (((int1 == 3) && (varclient_4297 == 1))) {
                    varclient_4297 = 0;
                    script10149();
                };
            } else if ((((int0 == 33) && (int1 == 0)) && (varbitclient_23070 == 1))) {
                varbitclient_23070 = 0;
            };
        } else if ((int0 == 4)) {
            if ((int1 == 13)) {
                varclient_4287 = "";
                varclient_4288 = 0;
                varbitclient_23064 = 0;
                varbitclient_23079 = 0;
                IF_SETTEXT("", comp(232, 93));  // toplevel_v2_parent_suboverlay_twitch:login_password
                printmessage("Your Twitch username or Password is incorrect.");
            };
            script10118();
        } else if ((int0 == 34)) {
            if ((int1 == 0)) {
                script10111();
            };
        } else if ((int0 == 30)) {
            if (((int1 == 2) || (int1 == 1))) {
            } else if (((int1 == 3) && (varclient_4297 == 1))) {
                varclient_4297 = 0;
                script10149();
            };
        } else if ((((int0 == 33) && (int1 == 0)) && (varbitclient_23070 == 1))) {
            varbitclient_23070 = 0;
        };
    } else if ((int0 == 2)) {
        if ((int1 == 0)) {
            printmessage("You have successfully logged out from Twitch.");
            script3147();
            script10118();
            script7698();
        } else if ((int0 == 4)) {
            if ((int1 == 13)) {
                varclient_4287 = "";
                varclient_4288 = 0;
                varbitclient_23064 = 0;
                varbitclient_23079 = 0;
                IF_SETTEXT("", comp(232, 93));  // toplevel_v2_parent_suboverlay_twitch:login_password
                printmessage("Your Twitch username or Password is incorrect.");
            };
            script10118();
        } else if ((int0 == 34)) {
            if ((int1 == 0)) {
                script10111();
            };
        } else if ((int0 == 30)) {
            if (((int1 == 2) || (int1 == 1))) {
            } else if (((int1 == 3) && (varclient_4297 == 1))) {
                varclient_4297 = 0;
                script10149();
            };
        } else if ((((int0 == 33) && (int1 == 0)) && (varbitclient_23070 == 1))) {
            varbitclient_23070 = 0;
        };
    } else if ((int0 == 4)) {
        if ((int1 == 13)) {
            varclient_4287 = "";
            varclient_4288 = 0;
            varbitclient_23064 = 0;
            varbitclient_23079 = 0;
            IF_SETTEXT("", comp(232, 93));  // toplevel_v2_parent_suboverlay_twitch:login_password
            printmessage("Your Twitch username or Password is incorrect.");
        };
        script10118();
    } else if ((int0 == 34)) {
        if ((int1 == 0)) {
            script10111();
        };
    } else if ((int0 == 30)) {
        if (((int1 == 2) || (int1 == 1))) {
        } else if (((int1 == 3) && (varclient_4297 == 1))) {
            varclient_4297 = 0;
            script10149();
        };
    } else if ((((int0 == 33) && (int1 == 0)) && (varbitclient_23070 == 1))) {
        varbitclient_23070 = 0;
    };
    return;
}