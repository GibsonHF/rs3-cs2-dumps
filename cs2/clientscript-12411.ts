//
function script12411(): void {
    var string0 = "Dragon bones cost - 1 Trinket<br>Hardened Dragon bones - 2 Trinkets<br>Reinforced Dragon bones - 3 Trinkets";
    if ((varbitplayer_31038 == 1)) {
        if ((varbitplayer_31035 == 0)) {
            stack(9234);
            stack(57016325);
            IF_SETGRAPHIC();
        };
        if ((varbitplayer_31036 == 0)) {
            stack(9246);
            stack(57016329);
            IF_SETGRAPHIC();
        };
        if ((varbitplayer_31037 == 0)) {
            stack(9243);
            stack(57016333);
            IF_SETGRAPHIC();
        };
        IF_SETTEXT("Automatically loot and note dragon, reinforced dragon and hardened dragon bones that are dropped from metallic dragon kills.", comp(870, 7));
        IF_SETONMOUSEREPEAT(callback(script3876, string0, 57016324, -1), 57016324);
        string0 = "Bronze, Iron and Steel dragon slayer XP cost - 1 Trinket<br> Mithril and Adamant dragon slayer XP cost - 2 Trinkets<br>Rune dragon slayer XP cost - 7 Trinkets";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, 57016328, -1), 57016328);
        string0 = "Bronze, Iron, Steel and Mithril dragons instant kill cost - 2 Trinkets<br>Adamant dragon instant kill cost - 3 Trinkets<br>Rune dragon instant kill cost - 5 Trinkets";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, 57016332, -1), 57016332);
    } else {
        if ((varbitplayer_31039 == 0)) {
            stack(9234);
            stack(114688006);
            IF_SETGRAPHIC();
        };
        if ((varbitplayer_31043 == 0)) {
            stack(9237);
            stack(114688019);
            IF_SETGRAPHIC();
        };
        if ((varbitplayer_31040 == 0)) {
            stack(9246);
            stack(114688010);
            IF_SETGRAPHIC();
        };
        if ((varbitplayer_31041 == 0)) {
            stack(9243);
            stack(114688014);
            IF_SETGRAPHIC();
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