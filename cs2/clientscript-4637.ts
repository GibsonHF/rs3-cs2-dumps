//
function script4637(int0: int): void {
    var string0 = "";
    var int1 = 0;
    var int2 = 0;
    IF_SETHIDE(false, comp(153, 3));
    IF_SETTEXT("", comp(153, 4));
    SOUND_VORBIS_VOLUME(6185 as vorbis, 1, 0, 150);
    script14296(int0);
    switch (int0) {
        case 1: {
            string0 = "<col=FFFFFF><u=FFFFFF>Three's Company</u></col><br><br>";
            if ((script4643(1) == 0)) {
                string0 = strconcat(string0, "<col=FFFFFF>Attack 30, Ranged 30, Magic 30 required to play the unabridged version.<br><br>");
            };
            string0 = strconcat(string0, "Manage a party of adventurers in this saga. <br><br>+ Select 'Switch' to change to a target character. <br>+ Select 'Mark' on an enemy to focus your allies' attacks on that target.<br>+ Human enemies will focus their attacks on you, animals will attack your allies.<br><br><col=FFFFFF>All three characters must survive.</col>");
            break;
        }
        case 2: {
            string0 = "<col=FFFFFF><u=FFFFFF>Vengeance</u></col><br><br>";
            if ((script4643(2) == 0)) {
                string0 = strconcat(string0, "<col=FFFFFF>Agility 55, Thieving 55 required to play the unabridged version.<br><br>");
            };
            string0 = strconcat(string0, "A tragic tale of grief, warped into furious vengeance.<br><br>+ At some point in this saga, you will become poisoned. Keep an eye on your health. You will not take poison damage whilst in a conversation.<br>+ Look for alternative methods of defeating your human foes. Your environment may offer more indirect solutions.<br>+ Hellhounds will drop antipoison elixirs that will lessen your suffering temporarily.<br>+ Spiders drop food, but their bites may negate the effect of an antipoison elixir.<br>+ Choices you make in the saga will lead you towards 'noble' or 'ruthless' vengeance.");
            break;
        }
        case 4: {
            string0 = "<col=FFFFFF><u=FFFFFF>Thok It To 'Em</u></col><br><br>";
            if ((script4643(4) == 0)) {
                string0 = strconcat(string0, "<col=FFFFFF>Strength 70 required to play the unabridged version.<br><br>");
            };
            string0 = strconcat(string0, "Control mighty Thok, Fremennik warrior.<br><br>+ Thok heals damage and recovers adrenaline by killing enemies. Bosses provide greater health and adrenaline boosts than normal enemies.<br>+ Thok can eat food raw. He likes the taste.");
            break;
        }
        case 3: {
            string0 = "<col=FFFFFF><u=FFFFFF>Nadir</u></col><br><br>";
            if ((script4643(3) == 0)) {
                string0 = strconcat(string0, "<col=FFFFFF>Attack 60, Thieving 45 required to play the unabridged version.<br><br>");
            };
            string0 = strconcat(string0, "Take command of the mysterious Moia.<br><br>+ Moia works best undetected. Find information in the minds of others to progress safely.<br>+ Avoid the suspicions of those around you to avoid later combat.<br>+ At some point in the saga, Moia will enter a special combat mode. Keep an eye on her ability meter.<br>+ There is a wealth of information to find. Stay a while, and listen to the people of Daemonheim.");
            break;
        }
        case 6: {
            string0 = "<col=FFFFFF><u=FFFFFF>Thok Your Block Off</u></col><br><br>";
            [int1, int2] = script4644(4);
            if (((int1 == 0) && (int2 == 0))) {
                string0 = strconcat(string0, "<col=FFFFFF>You must complete <u=FFFFFF>Thok It To 'Em</u> to play this saga.<br><br>");
            } else if ((script4643(6) == 0)) {
                string0 = strconcat(string0, "<col=FFFFFF>Strength 75 required to play the unabridged version.<br><br>");
            };
            string0 = strconcat(string0, "Mighty Thok returns with his brother Marmaros.<br><br>+ Kill far more enemies than your brother Marmaros to prove your dominance.<br>+ Thok heals damage and recovers adrenaline by killing enemies.<br>+ Thok can heal by eating raw fish.<br>+ Thok will upgrade his fists during the tale, dealing greater damage.<br>+ Thok can obtain a special item that will yield him many fish.");
            break;
        }
    };
    IF_SETHIDE(true, comp(153, 13));
    script13971(comp(153, 3), comp(-1, 65535), 28554 as struct, "Show Rewards", false);
    script13971(comp(153, 38), comp(-1, 65535), 28553 as struct, "Play Saga", false);
    IF_SETTEXT(string0, comp(153, 12));
    var int3 = (PARAHEIGHT(string0, IF_GETWIDTH(comp(153, 12)), 26 as fontmetrics) * 12);
    if ((int3 < IF_GETHEIGHT(comp(153, 12)))) {
        int3 = 0;
    };
    IF_SETSCROLLSIZE(0, int3, comp(153, 10));
    script7791(comp(153, 11), comp(153, 10));
    return;
}