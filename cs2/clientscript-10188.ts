//
function script10188(string0: unknown_string): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    [int0, int1, int2, int3, int4, int5, int6] = script4590();
    if ((int0 < 0)) {
        printmessage("You aren't in a Clan Chat channel in which you can announce your boss time.");
        return;
    };
    if ((int1 < int2)) {
        printmessage("Your rank is not high enough to talk in your Clan Chat.");
        return;
    };
    if ((int3 == 1)) {
        printmessage("You've been muted by your Clan and can't talk in your Clan Chat.");
        return;
    };
    stack(0);
    CHAT_SETMODE();
    CHAT_SENDPUBLIC(string0);
    return;
}