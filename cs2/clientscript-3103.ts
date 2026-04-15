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
            IF_SETHIDE(false, comp(232, 38));
            IF_SETHIDE(true, comp(232, 37));
            printmessage("You have successfully logged out from Twitch.");
            IF_SETONTIMER(callback(), comp(231, 4));
            IF_SETHIDE(1, 15138816);
            IF_SETHIDE(1, 15138817);
            IF_SETHIDE(1, 15138822);
            SOUND_VORBIS_VOLUME(36961, 1, 0, 100);
        };
    } else {
        printmessage("You are not logged in to Twitch.");
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
    };
    return;
}