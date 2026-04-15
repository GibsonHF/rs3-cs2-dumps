//
function script15616(): void {
    if (((IF_GETHIDE(comp(906, 46)) == true) || (USERDETAIL_QUICKCHAT() == 1))) {
        return;
    };
    if ((STRING_LENGTH(varclient_2505) == 0)) {
        script15617("You haven't received any messages to which you can reply.");
        return;
    };
    var int0 = FRIEND_GETSLOTFROMNAME(varclient_2505);
    if ((int0 == -1)) {
        script15617("That player is not on your Friends list.");
        return;
    };
    var string0 = "";
    var string1 = "";
    [string0, string1] = FRIEND_GETNAME(int0);
    script3015(`Send message to ${string0}`, "", 0, varclient_2505, "");
    return;
}