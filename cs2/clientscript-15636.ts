//
function script15636(int0: unknown_int): void {
    var string0 = "";
    switch (int0) {
        case 59965450: {
            varclient_6884 = 7;
            string0 = "You should not swap or share your account with anyone else. It makes your account much less secure, they could lock you out of the account and it is also unfair to other players.<br><br>Never give out your password, bank PIN, authenticator code, e-mail address or any other information related to your account.";
            break;
        }
        case 59965451: {
            varclient_6884 = 10;
            string0 = "There are no cheats for any of our games.<br>Anyone that approaches you in-game to offer you cheats should be reported under 'Encouraging rule-breaking'.";
            break;
        }
        case 59965452: {
            varclient_6884 = 6;
            string0 = "A Jagex moderator will always have a gold crown next to their name.<br>A staff member will never ask you for personal details, login information or instruct you to go to a website.<br><br>This is always an attempt to steal your account.";
            break;
        }
        case 59965453: {
            varclient_6884 = 8;
            string0 = "A bot or macro allows a player to get an unfair advantage, if you suspect someone is using a bot then report them under this rule.<br>Players can have their chat turned off so not responding doesn't necessarily mean they're using a bot.";
            break;
        }
        case 59965454: {
            varclient_6884 = 16;
            string0 = "An item scam is defined as cheating another player during a trade.<br>We don't consider it a scam to ask for large amounts of gp for an item.<br>It is your responsibility to make sure that you are paying a fair price.";
            break;
        }
        case 59965455: {
            varclient_6884 = 5;
            string0 = "If you notice a bug, please report it to us straight away.<br>If, after noticing a bug, you continue to exploit it, you are likely to have action taken against your account.<br><br>If something seems too good to be true, it probably is!";
            break;
        }
        case 59965456: {
            varclient_6884 = 23;
            string0 = "Player-run games of chance are where you trade gold to a player at a chance of winning more. These are often scams where your gold will not be returned.";
            break;
        }
        case 59965458: {
            varclient_6884 = 17;
            string0 = "Seriously offensive language includes racism and chat of a sexual nature.<br>There's no need to report anyone for using the term 'noob' (new player) or abbreviations such as 'lmao'.<br><br>Swear words are also up to the individual to enable or disable their chat filter, so swearing alone does not consitute offensive language.";
            break;
        }
        case 59965459: {
            varclient_6884 = 18;
            string0 = "Solicitation includes asking for a boyfriend or girlfriend in-game and any chat of a sexual nature.";
            break;
        }
        case 59965460: {
            varclient_6884 = 19;
            string0 = "Disruptive behaviour includes flooding the chat window with lines of unnecessary chat.";
            break;
        }
        case 59965461: {
            varclient_6884 = 20;
            string0 = "If a players name is offensive or attempts to bypass the chat filter report it under this rule.";
            break;
        }
        case 59965462: {
            varclient_6884 = 21;
            string0 = "If someone is threatening you in a way which makes you fear for your safety in real-life report under this rule.<br><br>Beware of context when reporting players for real-life threats: they could be talking about in-game combat!";
            break;
        }
        case 59965464: {
            varclient_6884 = 14;
            string0 = "Giving out your contact information in-game can put you at risk.<br>It's vitally important to keep vital information important, as it can put more than just your account at risk - people may gain access to your email or even track you down in real-life.<br><br>If you see someone else sharing their information it is also worth reporting so that we can ensure their safety too.<br><br>Contact information includes: full name, email addresses, instant messenger screen names, telephone numbers, your home/work address or age, and similar details.";
            break;
        }
        case 59965465: {
            varclient_6884 = 22;
            string0 = "If a player is talking about breaking, or having broken, real-world laws they can be reported under this rule.";
            break;
        }
        case 59965466: {
            varclient_6884 = 12;
            string0 = "Promoting a non-Jagex website in the forums or in-game could get you banned, even if you post the URL for your clan's site.<br><br>We understand this rule may cause some inconvenience, but we want it to be impossible for people to send players to scam sites.";
            break;
        }
        default: {
            varclient_6884 = -1;
            string0 = "Select a rule to view more information.";
            break;
        }
    };
    IF_SETTEXT(string0, comp(915, 32));
    script15635();
    return;
}