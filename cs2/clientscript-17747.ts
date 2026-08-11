//
function script17747(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = script17489(int1, 0, 1);
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    if ((int1 != -1)) {
        int2 = dbrow_getfield(int1, 954496, 0);
        int5 = dbrow_getfield(int1, 954432, 0);
        IF_SETHIDE(true, comp(1222, 33));  // skill_tree:node_info_cooldown_graphic
        IF_SETHIDE(true, comp(1222, 32));  // skill_tree:node_info_target_type_graphic
        switch (dbrow_getfield(int1, 954400, 0)) {
            case 1: {
                [string0, string2, string1, int4, int6] = script967(int2, 0, 0, 2);
                int7 = script7473(int2, int4, int6, 2);
                IF_SETTEXT(script17698(int2, 0), comp(1222, 40));  // skill_tree:node_info_cooldown
                if ((STRING_LENGTH(IF_GETTEXT(comp(1222, 40))) > 0)) {  // skill_tree:node_info_cooldown
                    IF_SETHIDE(false, comp(1222, 33));  // skill_tree:node_info_cooldown_graphic
                };
                IF_SETTEXT(script17706(int2, 0), comp(1222, 42));  // skill_tree:node_info_target_type
                IF_SETGRAPHIC(script17705(struct_getparam(int2, 8170)), comp(1222, 32));  // skill_tree:node_info_target_type_graphic
                IF_SETHIDE(false, comp(1222, 32));  // skill_tree:node_info_target_type_graphic
                break;
            }
            default: {
                int3 = script17489(int1, 0, 1);
                string0 = script17486(int1);
                string2 = script17487(int1);
                IF_SETTEXT("", comp(1222, 40));  // skill_tree:node_info_cooldown
                IF_SETTEXT("", comp(1222, 42));  // skill_tree:node_info_target_type
                break;
            }
        };
        IF_SETTEXTALIGN(0, 0, 14, comp(1222, 49));  // skill_tree:node_info_description
    } else {
        string2 = "Select a talent to see more information.";
        IF_SETTEXTALIGN(1, 1, 14, comp(1222, 49));  // skill_tree:node_info_description
    };
    IF_SETGRAPHIC(int3, comp(1222, 52));  // skill_tree:node_info_icon_graphic
    IF_SETTEXT(`<col=ffffff>${string0}</col>`, comp(1222, 39));  // skill_tree:node_info_name
    IF_SETTEXT(string1, comp(1222, 41));  // skill_tree:node_info_type
    IF_SETTEXT(string2, comp(1222, 49));  // skill_tree:node_info_description
    if ((int7 > 0)) {
        IF_SETSIZE(0, IF_GETHEIGHT(comp(1222, 47) /*skill_tree:node_info_requirement_layer*/), 1, 1, comp(1222, 45) /*skill_tree:node_info_description_layer*/);
        IF_SETSIZE(16, IF_GETHEIGHT(comp(1222, 47) /*skill_tree:node_info_requirement_layer*/), 0, 1, comp(1222, 46) /*skill_tree:node_info_description_scrollbar_layer*/);
        IF_SETHIDE(false, comp(1222, 47));  // skill_tree:node_info_requirement_layer
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(1222, 45));  // skill_tree:node_info_description_layer
        IF_SETSIZE(16, 0, 0, 1, comp(1222, 46));  // skill_tree:node_info_description_scrollbar_layer
        IF_SETHIDE(true, comp(1222, 47));  // skill_tree:node_info_requirement_layer
    };
    if ((script7593(string2, IF_GETWIDTH(comp(1222, 49) /*skill_tree:node_info_description*/), IF_GETFONTMETRICS(comp(1222, 49) /*skill_tree:node_info_description*/), 14) > IF_GETHEIGHT(comp(1222, 45) /*skill_tree:node_info_description_layer*/))) {
        IF_SETSIZE((16 + 3), 0, 1, 1, comp(1222, 49));  // skill_tree:node_info_description
        IF_SETSCROLLSIZE(0, (2 + script7593(string2, IF_GETWIDTH(comp(1222, 49) /*skill_tree:node_info_description*/), IF_GETFONTMETRICS(comp(1222, 49) /*skill_tree:node_info_description*/), 14)), comp(1222, 45) /*skill_tree:node_info_description_layer*/);
        IF_SETHIDE(false, comp(1222, 46));  // skill_tree:node_info_description_scrollbar_layer
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(1222, 49));  // skill_tree:node_info_description
        IF_SETSCROLLSIZE(0, 0, comp(1222, 45));  // skill_tree:node_info_description_layer
        IF_SETHIDE(true, comp(1222, 46));  // skill_tree:node_info_description_scrollbar_layer
    };
    IF_SETSCROLLPOS(0, 0, comp(1222, 45));  // skill_tree:node_info_description_layer
    script7791(80085038, 80085037);
    IF_SETONOP(callback(), comp(1222, 54));  // skill_tree:node_info_button_control_layer
    IF_SETTEXT(`<col=ffffff>Cost: ${TOSTRING_LOCALISED(int5, 1)} ${script17481(varplayer_11091, dbrow_getfield(int1, 954432, 0))}`, comp(1222, 36));  // skill_tree:node_info_summary
    IF_SETHIDE(false, comp(1222, 37));  // skill_tree:node_info_button_layer
    IF_SETTEXTALIGN(1, 0, 14, comp(1222, 36));  // skill_tree:node_info_summary
    var int8 = script17485(int0, int1);
    switch (int8) {
        case 0: {
            IF_SETTEXT("<col=FF0000>You do not meet the requirements to unlock this talent</col>", comp(1222, 36));  // skill_tree:node_info_summary
            script13969(80085045, 80085046, 28554, "More Info");
            IF_SETONOP(callback(script17748, int0, int1), comp(1222, 54));  // skill_tree:node_info_button_control_layer
            break;
        }
        case 1: {
            if ((script17480(varplayer_11091) < int5)) {
                IF_SETTEXT(`<col=ff0000>Cost: ${TOSTRING_LOCALISED(int5, 1)} ${script17481(varplayer_11091, dbrow_getfield(int1, 954432, 0))}`, comp(1222, 36));  // skill_tree:node_info_summary
                script13971(80085045, 80085046, 28554, "Unlock Talent", 1);
            } else {
                script13969(80085045, 80085046, 28553, "Unlock Talent");
                IF_SETONOP(callback(script17748, int0, int1), comp(1222, 54));  // skill_tree:node_info_button_control_layer
            };
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(1222, 37));  // skill_tree:node_info_button_layer
            IF_SETTEXTALIGN(1, 1, 14, comp(1222, 36));  // skill_tree:node_info_summary
            IF_SETTEXT("<col=00FF00>You have unlocked this talent</col>", comp(1222, 36));  // skill_tree:node_info_summary
            break;
        }
        case -1: {
            IF_SETTEXT("", comp(1222, 36));  // skill_tree:node_info_summary
            break;
        }
    };
    return;
}