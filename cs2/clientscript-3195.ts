//
function script3195(int0: component): void {
    var string0 = "";
    var string1 = "";
    switch (int0) {
        case 59965479: {
            string0 = "Help - honour";
            string1 = "An item scam is defined as cheating another player during a trade. We don't consider it a scam to ask for large amounts of gp for an item, but it is not in the spirit of the game to overprice an item. It is your responsibility to make sure that you are paying a good price.<br><br>Asking for someone's bank PIN or recovery answers is just as serious as asking for a password; giving out your bank PIN allows other players access to your bank space. Never tell another player your password, PIN number or any other account security details.<br><br>If you notice a bug, please report it to us straight away. If, after noticing a bug, you continue to exploit it, you are likely to have action taken against your account.<br><br>There are no cheats for any of our games. Anyone that approaches you in-game to offer you cheats should be reported under 'Encouraging rule-breaking'.<br><br>Don't encourage rule-breaking, such as encouraging someone to try real-world trading, scamming or exploiting bugs.<br><br>You should not swap your account with another player, or share your account with anyone else. Sharing your account makes it less secure, and is also unfair to other players.";
            break;
        }
        case 59965470: {
            string0 = "Help - respect";
            string1 = "There's no need to report anyone for using the term 'noob', it simply means 'new player'.<br><br>Seriously offensive language includes racism and chat of a sexual nature.<br><br>You don't need to report players for using abbreviations such as 'lmao', 'wtf', 'gtfo'.<br><br>You shouldn't report any chat that has been starred out (like this: ****), as the censor has prevented anything that may have been offensive from being seen.<br><br>Solicitation includes asking for a boyfriend or girlfriend in-game.<br><br>Disruptive behaviour includes flooding the chat window with lines of unnecessary chat, but only if you feel it's impairing your gameplay.<br><br>Beware of context when reporting players for real-life threats: they could be talking about in-game combat!";
            break;
        }
        case 59965468: {
            string0 = "Help - security";
            string1 = "Giving out your contact information in-game can put the security of your account at risk. There are some unscrupulous people out there, so, to protect your account and your privacy, it makes sense not to give your details to anyone you don't know.<br><br>Contact information includes: full name, email addresses, instant messenger screen names, telephone numbers, your home/work address or age.<br><br>Promoting a non-Jagex website in the forums or in-game could get you banned, even if you post the URL for your clan's site. We understand this rule may cause some inconvenience, but we want it to be impossible for people to send players to scam sites.";
            break;
        }
    };
    script8800(`${string0}<br><br>${string1}`, int0, -1);
    return;
}