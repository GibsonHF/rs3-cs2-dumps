//
function script2691(): void {
    if ((IF_GETHIDE(comp(906, 127)) == true)) {
        return;
    };
    var string0 = "totp-authenticator";
    var string1 = "";
    var string2 = "Authenticator";
    var int0 = 0;
    var string3 = "";
    var string4 = "";
    var int1 = 2513;
    if ((varbitplayer_22783 <= 1)) {
        int0 = 1;
        string3 = "Enhanced security disabled";
        string4 = "Use this button to enable RuneScape Authenticator to add an extra layer of security to your account.";
        int1 = 2513;
    } else if ((varbitplayer_22783 == 2)) {
        string3 = "Enhanced security enabled";
        string4 = "Use this button to manage your Authenticator settings.";
        int1 = 2507;
    };
    if ((int0 == 1)) {
        script10017(comp(906, 127), -1, 6, 1, "null", comp(-1, 65535));
    };
    script10059(string2, string3, string4, 59375744);
    IF_SETONBUTTONCLICK(callback(script3088, int1), 59375744);
    return;
}