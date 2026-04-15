//
function script8512(int0: int, string0: string): void {
    if (((STRING_LENGTH(string0) <= 0) && (STRING_LENGTH(varclient_2367) <= 0))) {
        if ((script6431() == true)) {
            MES_TYPED(script8526(19), 0, "Tap and hold a friend's name and select the Message option to start a private chat.");
        } else {
            MES_TYPED(script8526(19), 0, "Right-click a friend's name and select the Message option to start a private chat.");
        };
        return;
    };
    script15842(int0);
    var int0 = script7026(int0);
    script8551(int0, 100);
    script8515(int0);
    varclient_2367 = string0;
    script8516(int0);
    return;
}