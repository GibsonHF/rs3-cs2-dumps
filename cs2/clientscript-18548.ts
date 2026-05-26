//
function script18548(): void {
    IF_SETHIDE(true, comp(1288, 151));
    IF_SETHIDE(false, comp(1288, 153));
    script4170(84410521, 33587, 33588, 33589, 33590);
    script15492(84410520, "Each boss returns for <col=F0BE79>2 days</col> alongside a <col=F0BE79>new ability override</col>.<br>On <col=F0BE79>13th March</col>, all bosses and overrides return!");
    var string0 = "Echo of Zamorak + Chaotic Overrides<br>";
    if ((script18536() == 1)) {
        string0 = strconcat(string0, "<col=FF00>Available now</col>");
        IF_SETHIDE(false, comp(1288, 126));
    } else {
        string0 = strconcat(string0, "<col=F0BE79>7th & 8th March</col>");
    };
    script15492(84410497, string0);
    script3536("Chaotic Assault (NEW!)", 84410498, -1);
    var string1 = "Echo of Arch-Glacor + Azure Overrides<br>";
    if ((script18537() == 1)) {
        string1 = strconcat(string1, "<col=FF00>Available now</col>");
        IF_SETHIDE(false, comp(1288, 132));
    } else {
        string1 = strconcat(string1, "<col=F0BE79>9th & 10th March</col>");
    };
    script15492(84410505, string1);
    script3536("Azure Hurricane (NEW!)", 84410506, -1);
    var string2 = "Echo of Croesus + Fungal Overrides<br>";
    if ((script18538() == 1)) {
        string2 = strconcat(string2, "<col=FF00>Available now</col>");
        IF_SETHIDE(false, comp(1288, 140));
    } else {
        string2 = strconcat(string2, "<col=F0BE79>11th & 12th March</col>");
    };
    script15492(84410511, string2);
    script3536("Fungal Swiftness (NEW!)", 84410512, -1);
    return;
}