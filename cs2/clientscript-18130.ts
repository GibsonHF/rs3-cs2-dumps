//
function script18130(): void {
    var string0 = "";
    var string1 = "";
    var int0 = -1;
    var int1 = false;
    if ((script17853() != -1 as dbrow)) {
        string0 = "Missions";
        string1 = "Complete Hero Pass Missions to gain Hero Points and other rewards!";
        int0 = 4117;
        IF_SETTEXT("Hero Pass Missions", comp(1345, 26));
        IF_SETTEXT(string0, comp(1345, 25));
        stack(int0);
        stack(88145944);
        IF_SETGRAPHIC();
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 88145943);
        IF_SETONMOUSELEAVE(callback(script8805), 88145943);
    } else {
        [int1, string0, string1, int0] = script18237();
        if ((int0 == -1)) {
            int0 = 23239;
        };
        IF_SETHIDE(int1, comp(1345, 28));
        IF_SETTEXT(string0, comp(1345, 26));
        if ((varbitplayer_52723 == 1)) {
            IF_SETTEXT("Returner Challenges", comp(1345, 25));
        } else {
            IF_SETTEXT("Skill", comp(1345, 25));
        };
        stack(int0);
        stack(88145944);
        IF_SETGRAPHIC();
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 88145943);
        IF_SETONMOUSELEAVE(callback(script8805), 88145943);
    };
    return;
}