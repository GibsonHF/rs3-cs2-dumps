//
function script2394(int0: unknown_int): void {
    var string0 = "Join a Friends chat channel";
    if ((CLAN_GETCHATCOUNT() > 0)) {
        IF_SETOP(1, "Leave chat", comp(1927, 11));
        stack(6255);
        stack(126287884);
        IF_SETGRAPHIC();
        string0 = "Leave the Friends chat channel";
    } else {
        IF_SETOP(1, "Join chat", comp(1927, 11));
        stack(6256);
        stack(126287884);
        IF_SETGRAPHIC();
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 126287883);
    return;
}