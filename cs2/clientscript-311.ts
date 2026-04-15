//
function script311(): void {
    var string0 = "";
    var string1 = "";
    switch (varclient_4104) {
        case 1: {
            string0 = "Inappropriate Behaviour";
            string1 = "We've noticed activity on your account that is inappropriate for our game, and is offensive to others.<br><br>Any activity of this type may result in a mute, or even a permanent ban.";
            break;
        }
        case 2: {
            string0 = "Inbox message";
            string1 = "Considering becoming a member? We've dropped you an inbox message you might want to check out.<br><br>If you would like to chat to a J-Mod personally about your options, just hit reply to the message and we will be on hand to help.";
            break;
        }
        case 3: {
            string0 = "Inbox message";
            string1 = "We've dropped you an inbox message as we have noticed your membership has lapsed recently.<br><br>If you would like to chat to a J-Mod personally, just hit reply to the inbox message and we will be on hand to help.";
            break;
        }
        case 4: {
            string0 = "Inbox message";
            string1 = "Was there a problem with your order? We've dropped you an inbox message you might want to check out.<br><br>If you would like to chat to a J-Mod personally, just hit reply to the message and we will be on hand to help.";
            break;
        }
        case 5: {
            string0 = "Inbox message";
            string1 = "We've dropped you an inbox message you might want to check out. If you would like to chat to a J-Mod personally, just hit reply to the message and we will be on hand to help.";
            break;
        }
        case 6: {
            string0 = "Inbox message";
            string1 = "We've dropped you an inbox message about your recent payment attempt as it looks like you recently had some problems!<br><br>If you would like to chat to a J-Mod personally, just hit reply to the inbox message and we will be on hand to help.";
            break;
        }
        case 7: {
            string0 = "Inbox message";
            string1 = "We've dropped you an inbox message as we have noticed your subscription was cancelled recently.<br><br>If you would like to chat to a J-Mod personally, just hit reply to the inbox message and we will be on hand to help.";
            break;
        }
    };
    script9554(comp(564, 22), comp(564, 24), comp(564, 23), string0, 21217 as struct);
    IF_SETTEXT(string1, comp(564, 5));
    return;
}