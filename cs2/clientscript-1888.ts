//
function script1888(): void {
    if ((varclient_1025 == true)) {
        return;
    };
    if ((((script2728() == 1) && (varbitplayer_552 == 0)) && (varplayer_1295 >= 1000))) {
        if ((varclient_94 > CLIENTCLOCK())) {
            return;
        };
        varclient_94 = (CLIENTCLOCK() + 1500);
        if ((varplayer_2335 == 1)) {
            printmessage("Your health is low! Run away from your attacker and speak to Xenia.");
        } else {
            printmessage("Your health is low! Find a safe place away from your attacker");
            printmessage("or eat some food to heal yourself.");
        };
    };
    varclient_1025 = true;
    return;
}