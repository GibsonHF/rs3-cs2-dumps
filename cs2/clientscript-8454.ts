//
function script8454(int0: component): void {
    var int1 = 0;
    if ((int0 == comp(1559, 25))) {
        int1 = 1;
    };
    if ((varclient_2760 < 0)) {
        varclient_2760 = (COMLEVEL_ACTIVE() - 2);
    };
    if ((int1 == 1)) {
        IF_SETSIZE(IF_GETWIDTH(comp(1559, 10)), IF_GETHEIGHT(comp(1559, 13)), 0, 0, comp(1559, 13));
        IF_SETSIZE(IF_GETWIDTH(comp(1559, 7)), IF_GETHEIGHT(comp(1559, 11)), 0, 0, comp(1559, 11));
        script8467(int0, varclient_4664);
    } else {
        if ((varclient_2761 < 0)) {
            script8459(int0, 0);
        };
        script8467(int0, varclient_2762);
    };
    if ((int1 == 1)) {
        IF_SETTEXT("", comp(1559, 18));
        IF_SETPOSITION(0, 0, 1, 2, comp(1559, 19));
        IF_SETTEXT("", comp(1559, 8));
        IF_SETPOSITION(0, 0, 1, 2, comp(1559, 20));
    };
    script8461(int0);
    script8463(int0);
    script8465(int0);
    var string0 = "";
    var int2 = -1;
    if (((IF_GETHEIGHT(comp(1559, 90)) >= IF_GETHEIGHT(comp(1559, 89))) && (int1 == 1))) {
        IF_SETTEXT("MH", comp(1559, 90));
        string0 = "Main Hand";
        int2 = 102170713;
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
        IF_SETONMOUSELEAVE(callback(script8805), int2);
        IF_SETTEXT("OH", 102170722);
        string0 = "Off Hand";
        int2 = 102170721;
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
        IF_SETONMOUSELEAVE(callback(script8805), int2);
        IF_SETTEXT("A", 102170755);
        string0 = "Abilities";
        int2 = 102170754;
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
        IF_SETONMOUSELEAVE(callback(script8805), int2);
    };
    string0 = "<col=F3B13F>Attack type</col> determines the style of weapon or spell you're using. Some enemies are weak to specific attack styles. Exploit your enemies' weaknesses to hit more often.";
    if ((int1 == 1)) {
        int2 = 102170671;
    } else {
        int2 = 95879220;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    if ((int1 == 1)) {
        int2 = 102170693;
    } else {
        int2 = 95879242;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    if ((int1 == 1)) {
        int2 = 102170769;
    } else {
        int2 = 95879388;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Attack speed</col> determines how quickly you strike with your main-hand/off-hand weapon or spell.";
    if ((int1 == 1)) {
        int2 = 102170676;
    } else {
        int2 = 95879225;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    if ((int1 == 1)) {
        int2 = 102170698;
    } else {
        int2 = 95879247;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Damage</col> determines the maximum amount of life points you can remove from an enemy in a single strike with your main-hand/off-hand weapon or spell. Using abilities can modify your damage.";
    if ((int1 == 1)) {
        int2 = 102170661;
    } else {
        int2 = 95879210;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    if ((int1 == 1)) {
        int2 = 102170683;
    } else {
        int2 = 95879232;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Damage</col> determines the maximum amount of life points you can remove from an enemy with a single ability. This is a modification of your normal damage.";
    if ((int1 == 1)) {
        int2 = 102170759;
    } else {
        int2 = 95879378;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Accuracy</col> affects how likely you are to damage your opponent with your main-hand/off-hand weapon or spell. The higher the accuracy, the more likely you are to damage an enemy.";
    if ((int1 == 1)) {
        int2 = 102170666;
    } else {
        int2 = 95879215;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    if ((int1 == 1)) {
        int2 = 102170688;
    } else {
        int2 = 95879237;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Accuracy</col> affects how likely you are to damage your opponent with your abilities. The higher the accuracy, the more likely you are to damage an enemy.";
    if ((int1 == 1)) {
        int2 = 102170764;
    } else {
        int2 = 95879383;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Lifepoints</col> determine how many points of damage you can take before you die.";
    if ((int1 == 1)) {
        int2 = 102170646;
    } else {
        int2 = 95879191;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Prayer Points</col> determine how long prayers can run for.";
    if ((int1 == 1)) {
        int2 = 102170648;
    } else {
        int2 = 95879195;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Prayer Bonus</col> affects how quickly your prayers drain your prayer points. Having a higher prayer modifier means your prayer points will drain slower.";
    if ((int1 == 1)) {
        int2 = 102170654;
    } else {
        int2 = 95879203;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Armour</col> affects how likely an enemy is to hit you. The higher your armour rating, the more likely you are to block an enemy hit. The class of your armour also affects how likely you are to block.";
    if ((int1 == 1)) {
        int2 = 102170727;
    } else {
        int2 = 95879351;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Style Bonus</col> is your ability to damage certain enemy types. This is affected by your equipped armour and weapons. The higher the number, the more damage you do.";
    if ((int1 == 1)) {
        int2 = 102170731;
    } else {
        int2 = 95879355;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Damage Reduction (PvE)</col> is the amount by which incoming damage from enemy NPC attacks is reduced.";
    if ((int1 == 1)) {
        int2 = 102170737;
    } else {
        int2 = 95879362;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Damage Reduction (PvP)</col> is the amount by which incoming damage from enemy player attacks is reduced.";
    if ((int1 == 1)) {
        int2 = 102170739;
    } else {
        int2 = 95879364;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    if ((int1 == 0)) {
        string0 = "<col=F3B13F>Critical Strike Chance</col> is the likelihood of an attack critically striking.";
        int2 = 95879406;
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
        IF_SETONMOUSELEAVE(callback(script8805), int2);
        string0 = "<col=F3B13F>Critical Strike Damage</col> is the amount by which damage will be increased when an attack critically strikes.";
        int2 = 95879411;
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
        IF_SETONMOUSELEAVE(callback(script8805), int2);
        string0 = "The hit and block chances shown are as a guide. Values will not be accurate for all opponents.";
        int2 = 95879252;
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
        IF_SETONMOUSELEAVE(callback(script8805), int2);
        IF_SETTEXT(inttostring(varclient_2760, 10), 95879259);
    };
    var string1 = "";
    var int3 = 0;
    if ((int1 == 1)) {
        if ((varbitplayer_27168 == 0)) {
            string1 = `${inttostring(varbitplayer_26128, 10)}/${inttostring(script10825(), 10)}`;
        } else {
            string1 = `${inttostring((varbitplayer_26128 / 10), 10)}/${inttostring((script10825() / 10), 10)}`;
        };
        IF_SETTEXT(string1, comp(1559, 19));
        if (((IF_FIND(comp(1559, 12)) == 1) && (IF_FIND[1](CC_GETPARENTLAYER()) == 1))) {
            int3 = script669(varbitplayer_26128, script10825(), CC_GETWIDTH[1]());
            CC_SETSIZE(int3, CC_GETHEIGHT(), 0, 0);
        };
        string1 = `${inttostring(script10827(), 10)}/${inttostring(script10826(), 10)}`;
        IF_SETTEXT(string1, comp(1559, 20));
        if (((IF_FIND(comp(1559, 78)) == 1) && (IF_FIND[1](CC_GETPARENTLAYER()) == 1))) {
            int3 = script669(script10827(), script10826(), CC_GETWIDTH[1]());
            CC_SETSIZE(int3, CC_GETHEIGHT(), 0, 0);
        };
    } else {
        if ((varbitplayer_27168 == 0)) {
            string1 = `${inttostring(varbitplayer_1668, 10)}/${inttostring(script2915(), 10)}`;
        } else {
            string1 = `${inttostring((varbitplayer_1668 / 10), 10)}/${inttostring((script2915() / 10), 10)}`;
        };
        IF_SETTEXT(string1, comp(1463, 24));
        if ((STRING_LENGTH(string1) >= 8)) {
            IF_SETTEXT("LP", comp(1463, 25));
        } else {
            IF_SETTEXT("Life Points", comp(1463, 25));
        };
        if (((IF_FIND(comp(1463, 16)) == 1) && (IF_FIND[1](CC_GETPARENTLAYER()) == 1))) {
            int3 = script669(varbitplayer_1668, script2915(), CC_GETWIDTH[1]());
            CC_SETSIZE(int3, CC_GETHEIGHT(), 0, 0);
        };
        string1 = `${inttostring(script5256(), 10)}/${inttostring(script7081(), 10)}`;
        IF_SETTEXT(string1, comp(1463, 28));
        if ((STRING_LENGTH(string1) >= 8)) {
            IF_SETTEXT("PP", comp(1463, 29));
        } else {
            IF_SETTEXT("Prayer Points", comp(1463, 29));
        };
        if (((IF_FIND(comp(1463, 158)) == 1) && (IF_FIND[1](CC_GETPARENTLAYER()) == 1))) {
            int3 = script669(script5256(), script7081(), CC_GETWIDTH[1]());
            CC_SETSIZE(int3, CC_GETHEIGHT(), 0, 0);
        };
    };
    return;
}