//
function script18130(): void {
    var string0 = "";
    var string1 = "";
    var int0 = -1;
    var int1 = 0;
    if ((script17853() != -1)) {
        string0 = "Missions";
        string1 = "Complete Hero Pass Missions to gain Hero Points and other rewards!";
        int0 = 4117;
        IF_SETTEXT("Hero Pass Missions", 88145946);
        IF_SETTEXT(string0, 88145945);
        IF_SETGRAPHIC(int0, 88145944);
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 88145943);
        IF_SETONMOUSELEAVE(callback(script8805), 88145943);
    } else {
        [int1, string0, string1, int0] = script18237();
        if ((int0 == -1)) {
            int0 = 23239;
        };
        IF_SETHIDE(int1, 88145948);
        IF_SETTEXT(string0, 88145946);
        if ((varbitplayer_52723 == 1)) {
            IF_SETTEXT("Returner Challenges", 88145945);
        } else {
            IF_SETTEXT("Skill", 88145945);
        };
        IF_SETGRAPHIC(int0, 88145944);
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 88145943);
        IF_SETONMOUSELEAVE(callback(script8805), 88145943);
    };
    return;
}