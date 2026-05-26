//
function script12411(): void {
    var string0 = "Dragon bones cost - 1 Trinket<br>Hardened Dragon bones - 2 Trinkets<br>Reinforced Dragon bones - 3 Trinkets";
    if ((varbitplayer_31038 == 1)) {
        if ((varbitplayer_31035 == 0)) {
            IF_SETGRAPHIC(9234 as graphic, comp(870, 5));
        };
        if ((varbitplayer_31036 == 0)) {
            IF_SETGRAPHIC(9246 as graphic, comp(870, 9));
        };
        if ((varbitplayer_31037 == 0)) {
            IF_SETGRAPHIC(9243 as graphic, comp(870, 13));
        };
        IF_SETTEXT("Automatically loot and note dragon, reinforced dragon and hardened dragon bones that are dropped from metallic dragon kills.", comp(870, 7));
        IF_SETONMOUSEREPEAT(callback(script3876, string0, 57016324, -1), 57016324);
        string0 = "Bronze, Iron and Steel dragon slayer XP cost - 1 Trinket<br> Mithril and Adamant dragon slayer XP cost - 2 Trinkets<br>Rune dragon slayer XP cost - 7 Trinkets";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, 57016328, -1), 57016328);
        string0 = "Bronze, Iron, Steel and Mithril dragons instant kill cost - 2 Trinkets<br>Adamant dragon instant kill cost - 3 Trinkets<br>Rune dragon instant kill cost - 5 Trinkets";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, 57016332, -1), 57016332);
    } else {
        if ((varbitplayer_31039 == 0)) {
            IF_SETGRAPHIC(9234 as graphic, comp(1750, 6));
        };
        if ((varbitplayer_31043 == 0)) {
            IF_SETGRAPHIC(9237 as graphic, comp(1750, 19));
        };
        if ((varbitplayer_31040 == 0)) {
            IF_SETGRAPHIC(9246 as graphic, comp(1750, 10));
        };
        if ((varbitplayer_31041 == 0)) {
            IF_SETGRAPHIC(9243 as graphic, comp(1750, 14));
        };
        IF_SETTEXT("Auto Loot Hides", comp(1750, 20));
        IF_SETTEXT("Automatically loot and note dragon hides that are dropped from chromatic dragon kills.", comp(1750, 21));
        IF_SETTEXT("Automatically loot and note dragon bones and baby dragon bones that are dropped from chromatic dragon kills.", comp(1750, 8));
        string0 = "Dragon bones cost - 1 Trinket";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, 114688004, -1), 114688004);
        string0 = "Dragon hides cost - 1 Trinket";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, 114688005, -1), 114688005);
        string0 = "Adult dragon instant kill cost - 2 Trinkets<br>Baby dragon instant kill cost - 1 Trinket";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, 114688013, -1), 114688013);
        string0 = "Slayer XP cost - 1 Trinket<br>Brutal Green dragon slayer xp cost - 2 Trinkets";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, 114688009, -1), 114688009);
    };
    IF_SETONMOUSELEAVE(callback(script8805), comp(1750, 4));
    IF_SETONMOUSELEAVE(callback(script8805), 114688009);
    IF_SETONMOUSELEAVE(callback(script8805), 114688013);
    IF_SETONMOUSELEAVE(callback(script8805), 114688005);
    return;
}