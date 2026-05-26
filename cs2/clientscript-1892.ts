//[clientscript,friendschatsetup_onload]
function script1892(int0: number): void {
    varclient_5113 = "";
    IF_SETONFRIENDTRANSMIT(callback(script1893), int0);
    if ((USERDETAIL_QUICKCHAT() == 1)) {
        IF_SETTEXT("Friends Chat channel:", 72613896);
        IF_SETOP(1, "Enable", 72613897);
    };
    script10428(72613922, 72613923, 10291, -1, "Choose the sort mode", varbitplayer_30164, 0);
    return;
}