//
function script18449(): void {
    if ((((varbitplayer_54960 == 0) || (script18409(0) != 0)) || (script18413(0) == 1))) {
        return;
    };
    var int0 = script18428(varbitplayer_54960, -1);
    var string0 = script18429(int0);
    var string1 = script18431(int0);
    var int1 = script18433(int0);
    IF_SETHIDE(0, 83886116);
    IF_SETHIDE(0, 83886118);
    IF_SETHIDE(1, 83886119);
    IF_SETTEXT(string0, 83886141);
    stack(int1);
    stack(83886142);
    IF_SETGRAPHIC();
    var string2 = "Once activated, this buff cannot be changed and will be applied for 2 hours or until you log out after the day ends.";
    string1 = `${string1}<br><sprite=21341>${string2}`;
    if ((script18410() == 1)) {
        string1 = strconcat(string1, "<br><sprite=21341><col=FA3232>You already have a buff active. This will overwrite your existing buff.</col>");
    };
    IF_SETTEXT(string1, 83886144);
    return;
}