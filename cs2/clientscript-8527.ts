//
function script8527(int0: int): void {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var string7 = "";
    var string8 = "";
    var string9 = "";
    var string10 = "";
    var string11 = "";
    var string12 = "";
    var string13 = "";
    [string0, string7, string1, string8, string2, string9, string3, string10, string4, string11, string5, string12, string6, string13] = script4729();
    var int1 = script8526(int0);
    MES_TYPED(int1, 0, "Chat commands.");
    MES_TYPED(int1, 0, `${string0} : Switch to All Chat.`);
    MES_TYPED(int1, 0, `${string2} or / : Switch to Friends Chat.`);
    MES_TYPED(int1, 0, `${string1} or // : Switch to Clan Chat.`);
    MES_TYPED(int1, 0, `${string3} or /// : Switch to Guest Clan Chat.`);
    MES_TYPED(int1, 0, `${string4} or //// : Switch to Group Chat.`);
    MES_TYPED(int1, 0, `${string5} or ///// : Switch to Group Team Chat.`);
    if ((script19316() == true)) {
        MES_TYPED(int1, 0, `${string6} or /# : Switch to Group Ironman Chat.`);
    };
    MES_TYPED(int1, 0, "/pm playername message : Send a private message to a player on your friends list. If the playername has spaces enter as 'player name'.");
    MES_TYPED(int1, 0, "/wiki searchterm : Search https://runescape.wiki for searchterm. Alternatively omit searchterm to open the wiki homepage.");
    if ((script19316() == true)) {
        MES_TYPED(int1, 0, "You can also prefix a message with /, //, ///, ////, ///// or /# to send it to Friends, Clan, Guest Clan, Group, Group (Team Only) or Group Ironman Chat.");
    } else {
        MES_TYPED(int1, 0, "You can also prefix a message with /, //, ///, //// or ///// to send it to Friends, Clan, Guest Clan, Group or Group (Team Only) Chat.");
    };
    return;
}