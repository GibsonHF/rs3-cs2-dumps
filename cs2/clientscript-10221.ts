//
function script10221(int0: number, int1: number): void {
    if (((int0 == 1) && (int1 == 0))) {
        printmessage("You have logged in to Twitch!");
        varbitclient_23064 = 1;
        script9528(15204422, 100);
        IF_SETHIDE(1, 15204424);
        IF_SETHIDE(1, 15204425);
        IF_SETHIDE(1, 15204421);
        IF_SETHIDE(1, 15204416);
        IF_SETHIDE(0, 15204418);
        IF_SETONTIMER(callback(script10142, CLIENTCLOCK()), 15204418);
        IF_SETHIDE(1, 15204390);
        IF_SETHIDE(0, 15204389);
        script7698();
    } else if (((int0 == 2) && (int1 == 0))) {
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
            IF_SETTEXT("", 15204445);
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