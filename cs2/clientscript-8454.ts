//
function script8454(int0: number): void {
    var int1 = 0;
    if ((int0 == 102170649)) {
        int1 = 1;
    };
    if ((varclient_2760 < 0)) {
        varclient_2760 = (COMLEVEL_ACTIVE() - 2);
    };
    if ((int1 == 1)) {
        IF_SETSIZE(IF_GETWIDTH(comp(1559, 10) /*toplevel_v2_inspect_worn_stats:health_bar_bounds_layer*/), IF_GETHEIGHT(comp(1559, 13) /*toplevel_v2_inspect_worn_stats:health_bar_graphic*/), 0, 0, comp(1559, 13) /*toplevel_v2_inspect_worn_stats:health_bar_graphic*/);
        IF_SETSIZE(IF_GETWIDTH(comp(1559, 7) /*toplevel_v2_inspect_worn_stats:prayer_bar_bounds_layer*/), IF_GETHEIGHT(comp(1559, 11) /*toplevel_v2_inspect_worn_stats:prayer_bar_graphic*/), 0, 0, comp(1559, 11) /*toplevel_v2_inspect_worn_stats:prayer_bar_graphic*/);
        script8467(int0, varclient_4664);
    } else {
        if ((varclient_2761 < 0)) {
            script8459(int0, 0);
        };
        script8467(int0, varclient_2762);
    };
    if ((int1 == 1)) {
        IF_SETTEXT("", comp(1559, 18));  // toplevel_v2_inspect_worn_stats:health_title_text
        IF_SETPOSITION(0, 0, 1, 2, comp(1559, 19));  // toplevel_v2_inspect_worn_stats:health_value_text
        IF_SETTEXT("", comp(1559, 8));  // toplevel_v2_inspect_worn_stats:prayer_title_text
        IF_SETPOSITION(0, 0, 1, 2, comp(1559, 20));  // toplevel_v2_inspect_worn_stats:prayer_value_text
    };
    script8461(int0);
    script8463(int0);
    script8465(int0);
    var string0 = "";
    var int2 = comp(-1, 65535);
    if (((IF_GETHEIGHT(comp(1559, 90) /*toplevel_v2_inspect_worn_stats:main_weapon_button_text*/) >= IF_GETHEIGHT(comp(1559, 89) /*toplevel_v2_inspect_worn_stats:main_weapon_button_text_layer*/)) && (int1 == 1))) {
        IF_SETTEXT("MH", comp(1559, 90));  // toplevel_v2_inspect_worn_stats:main_weapon_button_text
        string0 = "Main Hand";
        int2 = comp(1559, 89);  // toplevel_v2_inspect_worn_stats:main_weapon_button_text_layer
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
        IF_SETONMOUSELEAVE(callback(script8805), int2);
        IF_SETTEXT("OH", comp(1559, 98));  // toplevel_v2_inspect_worn_stats:off_weapon_button_text
        string0 = "Off Hand";
        int2 = comp(1559, 97);  // toplevel_v2_inspect_worn_stats:off_weapon_button_text_layer
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
        IF_SETONMOUSELEAVE(callback(script8805), int2);
        IF_SETTEXT("A", comp(1559, 131));  // toplevel_v2_inspect_worn_stats:abilities_weapon_button_text
        string0 = "Abilities";
        int2 = comp(1559, 130);  // toplevel_v2_inspect_worn_stats:abilities_weapon_button_text_layer
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
        IF_SETONMOUSELEAVE(callback(script8805), int2);
    };
    string0 = "<col=F3B13F>Attack type</col> determines the style of weapon or spell you're using. Some enemies are weak to specific attack styles. Exploit your enemies' weaknesses to hit more often.";
    if ((int1 == 1)) {
        int2 = comp(1559, 47);  // toplevel_v2_inspect_worn_stats:main_type_box
    } else {
        int2 = comp(1463, 52);  // toplevel_v2_parent_suboverlay_worn_stats:main_type_box
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    if ((int1 == 1)) {
        int2 = comp(1559, 69);  // toplevel_v2_inspect_worn_stats:off_type_box
    } else {
        int2 = comp(1463, 74);  // toplevel_v2_parent_suboverlay_worn_stats:off_type_box
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    if ((int1 == 1)) {
        int2 = comp(1559, 145);  // toplevel_v2_inspect_worn_stats:ab_type_box
    } else {
        int2 = comp(1463, 220);  // toplevel_v2_parent_suboverlay_worn_stats:ab_type_box
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Attack speed</col> determines how quickly you strike with your main-hand/off-hand weapon or spell.";
    if ((int1 == 1)) {
        int2 = comp(1559, 52);  // toplevel_v2_inspect_worn_stats:main_speed_box
    } else {
        int2 = comp(1463, 57);  // toplevel_v2_parent_suboverlay_worn_stats:main_speed_box
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    if ((int1 == 1)) {
        int2 = comp(1559, 74);  // toplevel_v2_inspect_worn_stats:off_speed_box
    } else {
        int2 = comp(1463, 79);  // toplevel_v2_parent_suboverlay_worn_stats:off_speed_box
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Damage</col> determines the maximum amount of life points you can remove from an enemy in a single strike with your main-hand/off-hand weapon or spell. Using abilities can modify your damage.";
    if ((int1 == 1)) {
        int2 = comp(1559, 37);  // toplevel_v2_inspect_worn_stats:main_damage_box
    } else {
        int2 = comp(1463, 42);  // toplevel_v2_parent_suboverlay_worn_stats:main_damage_box
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    if ((int1 == 1)) {
        int2 = comp(1559, 59);  // toplevel_v2_inspect_worn_stats:off_damage_box
    } else {
        int2 = comp(1463, 64);  // toplevel_v2_parent_suboverlay_worn_stats:off_damage_box
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Damage</col> determines the maximum amount of life points you can remove from an enemy with a single ability. This is a modification of your normal damage.";
    if ((int1 == 1)) {
        int2 = comp(1559, 135);  // toplevel_v2_inspect_worn_stats:ab_damage_box
    } else {
        int2 = comp(1463, 210);  // toplevel_v2_parent_suboverlay_worn_stats:ab_damage_box
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Accuracy</col> affects how likely you are to damage your opponent with your main-hand/off-hand weapon or spell. The higher the accuracy, the more likely you are to damage an enemy.";
    if ((int1 == 1)) {
        int2 = comp(1559, 42);  // toplevel_v2_inspect_worn_stats:main_accuracy_box
    } else {
        int2 = comp(1463, 47);  // toplevel_v2_parent_suboverlay_worn_stats:main_accuracy_box
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    if ((int1 == 1)) {
        int2 = comp(1559, 64);  // toplevel_v2_inspect_worn_stats:off_accuracy_box
    } else {
        int2 = comp(1463, 69);  // toplevel_v2_parent_suboverlay_worn_stats:off_accuracy_box
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Accuracy</col> affects how likely you are to damage your opponent with your abilities. The higher the accuracy, the more likely you are to damage an enemy.";
    if ((int1 == 1)) {
        int2 = comp(1559, 140);  // toplevel_v2_inspect_worn_stats:ab_accuracy_box
    } else {
        int2 = comp(1463, 215);  // toplevel_v2_parent_suboverlay_worn_stats:ab_accuracy_box
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Lifepoints</col> determine how many points of damage you can take before you die.";
    if ((int1 == 1)) {
        int2 = comp(1559, 22);  // toplevel_v2_inspect_worn_stats:life_bonus_icon_1
    } else {
        int2 = comp(1463, 23);  // toplevel_v2_parent_suboverlay_worn_stats:life_bonus_icon_1
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Prayer Points</col> determine how long prayers can run for.";
    if ((int1 == 1)) {
        int2 = comp(1559, 24);  // toplevel_v2_inspect_worn_stats:prayer_bonus_icon_1
    } else {
        int2 = comp(1463, 27);  // toplevel_v2_parent_suboverlay_worn_stats:prayer_bonus_icon_1
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Prayer Bonus</col> affects how quickly your prayers drain your prayer points. Having a higher prayer modifier means your prayer points will drain slower.";
    if ((int1 == 1)) {
        int2 = comp(1559, 30);  // toplevel_v2_inspect_worn_stats:prayer_bonus_box
    } else {
        int2 = comp(1463, 35);  // toplevel_v2_parent_suboverlay_worn_stats:prayer_bonus_box
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Armour</col> affects how likely an enemy is to hit you. The higher your armour rating, the more likely you are to block an enemy hit. The class of your armour also affects how likely you are to block.";
    if ((int1 == 1)) {
        int2 = comp(1559, 103);  // toplevel_v2_inspect_worn_stats:armour_box
    } else {
        int2 = comp(1463, 183);  // toplevel_v2_parent_suboverlay_worn_stats:armour_box
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Style Bonus</col> is your ability to damage certain enemy types. This is affected by your equipped armour and weapons. The higher the number, the more damage you do.";
    if ((int1 == 1)) {
        int2 = comp(1559, 107);  // toplevel_v2_inspect_worn_stats:effective_armour_box
    } else {
        int2 = comp(1463, 187);  // toplevel_v2_parent_suboverlay_worn_stats:effective_armour_box
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Damage Reduction (PvE)</col> is the amount by which incoming damage from enemy NPC attacks is reduced.";
    if ((int1 == 1)) {
        int2 = comp(1559, 113);  // toplevel_v2_inspect_worn_stats:damage_reduction_pve_layer
    } else {
        int2 = comp(1463, 194);  // toplevel_v2_parent_suboverlay_worn_stats:damage_reduction_pve_layer
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    string0 = "<col=F3B13F>Damage Reduction (PvP)</col> is the amount by which incoming damage from enemy player attacks is reduced.";
    if ((int1 == 1)) {
        int2 = comp(1559, 115);  // toplevel_v2_inspect_worn_stats:damage_reduction_pvp_layer
    } else {
        int2 = comp(1463, 196);  // toplevel_v2_parent_suboverlay_worn_stats:damage_reduction_pvp_layer
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    if ((int1 == 0)) {
        string0 = "<col=F3B13F>Critical Strike Chance</col> is the likelihood of an attack critically striking.";
        int2 = comp(1463, 238);  // toplevel_v2_parent_suboverlay_worn_stats:critical_strike_chance_label_text
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
        IF_SETONMOUSELEAVE(callback(script8805), int2);
        string0 = "<col=F3B13F>Critical Strike Damage</col> is the amount by which damage will be increased when an attack critically strikes.";
        int2 = comp(1463, 243);  // toplevel_v2_parent_suboverlay_worn_stats:critical_strike_damage_label_text
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
        IF_SETONMOUSELEAVE(callback(script8805), int2);
        string0 = "The hit and block chances shown are as a guide. Values will not be accurate for all opponents.";
        int2 = comp(1463, 84);  // toplevel_v2_parent_suboverlay_worn_stats:vs_stats_text
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
        IF_SETONMOUSELEAVE(callback(script8805), int2);
        IF_SETTEXT(inttostring(varclient_2760, 10), comp(1463, 91));  // toplevel_v2_parent_suboverlay_worn_stats:vs_level_value
    };
    var string1 = "";
    var int3 = 0;
    if ((int1 == 1)) {
        if ((varbitplayer_27168 == 0)) {
            string1 = `${inttostring(varbitplayer_26128, 10)}/${inttostring(script10825(), 10)}`;
        } else {
            string1 = `${inttostring((varbitplayer_26128 / 10), 10)}/${inttostring((script10825() / 10), 10)}`;
        };
        IF_SETTEXT(string1, comp(1559, 19));  // toplevel_v2_inspect_worn_stats:health_value_text
        if (((IF_FIND(comp(1559, 12)) == 1) && (IF_FIND[1](CC_GETPARENTLAYER()) == 1))) {  // toplevel_v2_inspect_worn_stats:health_bar_layer
            int3 = script669(varbitplayer_26128, script10825(), CC_GETWIDTH[1]());
            CC_SETSIZE(int3, CC_GETHEIGHT(), 0, 0);
        };
        string1 = `${inttostring(script10827(), 10)}/${inttostring(script10826(), 10)}`;
        IF_SETTEXT(string1, comp(1559, 20));  // toplevel_v2_inspect_worn_stats:prayer_value_text
        if (((IF_FIND(comp(1559, 78)) == 1) && (IF_FIND[1](CC_GETPARENTLAYER()) == 1))) {  // toplevel_v2_inspect_worn_stats:prayer_bar_layer
            int3 = script669(script10827(), script10826(), CC_GETWIDTH[1]());
            CC_SETSIZE(int3, CC_GETHEIGHT(), 0, 0);
        };
    } else {
        if ((varbitplayer_27168 == 0)) {
            string1 = `${inttostring(varplayer_13537, 10)}/${inttostring(script2915(), 10)}`;
        } else {
            string1 = `${inttostring((varplayer_13537 / 10), 10)}/${inttostring((script2915() / 10), 10)}`;
        };
        IF_SETTEXT(string1, comp(1463, 24));  // toplevel_v2_parent_suboverlay_worn_stats:health_value_text
        if ((STRING_LENGTH(string1) >= 8)) {
            IF_SETTEXT("LP", comp(1463, 25));  // toplevel_v2_parent_suboverlay_worn_stats:health_title_text
        } else {
            IF_SETTEXT("Life Points", comp(1463, 25));  // toplevel_v2_parent_suboverlay_worn_stats:health_title_text
        };
        if (((IF_FIND(comp(1463, 16)) == 1) && (IF_FIND[1](CC_GETPARENTLAYER()) == 1))) {  // toplevel_v2_parent_suboverlay_worn_stats:health_bar_layer
            int3 = script669(varplayer_13537, script2915(), CC_GETWIDTH[1]());
            CC_SETSIZE(int3, CC_GETHEIGHT(), 0, 0);
        };
        string1 = `${inttostring(script5256(), 10)}/${inttostring(script7081(), 10)}`;
        IF_SETTEXT(string1, comp(1463, 28));  // toplevel_v2_parent_suboverlay_worn_stats:prayer_value_text
        if ((STRING_LENGTH(string1) >= 8)) {
            IF_SETTEXT("PP", comp(1463, 29));  // toplevel_v2_parent_suboverlay_worn_stats:prayer_title_text
        } else {
            IF_SETTEXT("Prayer Points", comp(1463, 29));  // toplevel_v2_parent_suboverlay_worn_stats:prayer_title_text
        };
        if (((IF_FIND(comp(1463, 158)) == 1) && (IF_FIND[1](CC_GETPARENTLAYER()) == 1))) {  // toplevel_v2_parent_suboverlay_worn_stats:prayer_bar_layer
            int3 = script669(script5256(), script7081(), CC_GETWIDTH[1]());
            CC_SETSIZE(int3, CC_GETHEIGHT(), 0, 0);
        };
    };
    return;
}