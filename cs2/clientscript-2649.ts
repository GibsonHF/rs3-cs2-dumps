//
function script2649(): void {
    USERDETAIL_LOBBY_UNREADMESSAGES();
    var int0 = stack();
    var string0 = "Messages";
    var int1 = 0;
    var string1 = `${inttostring(int0, 10)} Unread`;
    var string2 = "";
    if ((int0 == 0)) {
        string2 = "You have no unread messages. Use this button to open your Message Centre.";
    } else {
        int1 = 1;
        string2 = strconcat(`You have ${inttostring(int0, 10)} unread `, script4583(int0, "message.", "messages."));
        string2 = strconcat(string2, " Click here to open your Message Centre.");
    };
    if ((int1 == 1)) {
        if ((int0 < 100)) {
            script10017(comp(906, 130), -1, 6, 0, inttostring(int0, 10), comp(-1, 65535));
        } else {
            script10017(comp(906, 130), -1, 6, 0, "*", comp(-1, 65535));
        };
    };
    script10059(string0, string1, string2, 59375747);
    IF_SETONBUTTONCLICK(callback(script3088, 2501), 59375747);
    return;
}