//
function script18130(): void {
    var string0 = "";
    var string1 = "";
    var int0 = -1 as graphic;
    var int1 = false;
    if ((script17853() != -1)) {
        string0 = "Missions";
        string1 = "Complete Hero Pass Missions to gain Hero Points and other rewards!";
        int0 = 4117 as graphic;
        IF_SETTEXT("Hero Pass Missions", comp(1345, 26));  // featured_main:skill_title
        IF_SETTEXT(string0, comp(1345, 25));  // featured_main:skill_label
        IF_SETGRAPHIC(int0, comp(1345, 24));  // featured_main:skill_graphic
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), comp(1345, 23));  // featured_main:missions_layer
        IF_SETONMOUSELEAVE(callback(script8805), comp(1345, 23));  // featured_main:missions_layer
    } else {
        [int1, string0, string1, int0] = script18237();
        if ((int0 == -1 as graphic)) {
            int0 = 23239 as graphic;
        };
        IF_SETHIDE(int1, comp(1345, 28));  // featured_main:skill_daily_stamp
        IF_SETTEXT(string0, comp(1345, 26));  // featured_main:skill_title
        if ((varbitplayer_52723 == 1)) {
            IF_SETTEXT("Returner Challenges", comp(1345, 25));  // featured_main:skill_label
        } else {
            IF_SETTEXT("Skill", comp(1345, 25));  // featured_main:skill_label
        };
        IF_SETGRAPHIC(int0, comp(1345, 24));  // featured_main:skill_graphic
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), comp(1345, 23));  // featured_main:missions_layer
        IF_SETONMOUSELEAVE(callback(script8805), comp(1345, 23));  // featured_main:missions_layer
    };
    return;
}