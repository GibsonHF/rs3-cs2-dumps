//
function script5687(string0: unknown_string): void {
    if ((strcmp("", CLAN_GETCHATDISPLAYNAME()) == 0)) {
        printmessage("You aren't in a Friends Chat channel in which you can announce your boss time.");
        return;
    };
    stack(1);
    CHAT_SETMODE();
    CHAT_SENDPUBLIC(string0);
    return;
}