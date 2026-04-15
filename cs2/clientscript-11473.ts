//
function script11473(string0: string): void {
    if ((USERDETAIL_QUICKCHAT() == 0)) {
        script3015(`Send message to ${string0}`, "", 0, string0, "");
    } else {
        printmessage("Users restricted to quick-chat cannot send messages from the Lobby.");
    };
    return;
}