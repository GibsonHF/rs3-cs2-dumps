//
function script18285(int0: component): void {
    script2731(int0, -1, 3);
    var string0 = "You can select a player to report from the chat list shown.<br><br>Chat from other players appears in white, while your chat is grey. You can't select your own chat.<br><br>To report a player, click on any line of their chat and click the 'Next' button to continue. You will then be shown a list of offences: choose the offence you are reporting the player for.<br><br>The list of offences has a 'Change player' button, so you can choose again if you select the wrong player.<br><br>Don't delay; once chat leaves the chat box, it can no longer be reported.";
    if ((script13749() == true)) {
        string0 = "You can select a player to report from the chat list shown.<br><br>Chat from other players appears in white, while your chat is grey. You can't select your own chat.<br><br>To report a player, tap on any line of their chat and tap the 'Next' button to continue. You will then be shown a list of offences: choose the offence you are reporting the player for.<br><br>The list of offences has a 'Change player' button, so you can choose again if you select the wrong player.<br><br>Don't delay; once chat leaves the chat box, it can no longer be reported.";
    };
    IF_SETTEXT(string0, int0);
    return;
}