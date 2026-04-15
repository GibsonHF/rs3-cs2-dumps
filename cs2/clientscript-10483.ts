//
function script10483(string0: unknown_string): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    [int0, int1, int2, int3, int4, int5, int6] = script4590();
    if ((int4 < 0)) {
        printmessage("You aren't in a Guest Clan Chat channel in which you can announce your boss time.");
        return;
    };
    if ((int5 < int6)) {
        printmessage("Your rank is not high enough to talk in the Guest Clan Chat.");
        return;
    };
    stack(3);
    CHAT_SETMODE();
    CHAT_SENDPUBLIC(string0);
    return;
}