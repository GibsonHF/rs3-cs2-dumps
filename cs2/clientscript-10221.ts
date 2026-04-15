//
function script10221(int0: unknown_int, int1: unknown_int): void {
    if (((int0 == 1) && (int1 == 0))) {
        printmessage("You have logged in to Twitch!");
        varbitclient_23064 = 1;
        script9528(comp(232, 70), 100);
        IF_SETHIDE(true, comp(232, 72));
        IF_SETHIDE(true, comp(232, 73));
        IF_SETHIDE(true, comp(232, 69));
        IF_SETHIDE(true, comp(232, 64));
        IF_SETHIDE(false, comp(232, 66));
        IF_SETONTIMER(callback(script10142, CLIENTCLOCK()), comp(232, 66));
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
            IF_SETTEXT("", comp(232, 93));
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