//
function script3103(): void {
    var int0 = 0;
    if ((varbitclient_23064 == 1)) {
        int0 = TTV_LOGOUT();
        if ((int0 == 0)) {
            varbitclient_23064 = 0;
            script3147();
            script10118();
            script7698();
            IF_SETHIDE(0, 15204390);
            IF_SETHIDE(1, 15204389);
            printmessage("You have successfully logged out from Twitch.");
            IF_SETONTIMER(callback(), 15138820);
            IF_SETHIDE(1, 15138816);
            IF_SETHIDE(1, 15138817);
            IF_SETHIDE(1, 15138822);
            SOUND_VORBIS_VOLUME(36961, 1, 0, 100);
        };
    } else {
        printmessage("You are not logged in to Twitch.");
        SOUND_VORBIS_VOLUME(10046, 1, 0, 150);
    };
    return;
}