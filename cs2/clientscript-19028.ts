//
function script19028(): void {
    var int0 = -1 as graphic;
    var int1 = -1 as graphic;
    var string0 = "";
    if (((varbitplayer_52293 > 0) && (varbitplayer_52294 > 0))) {
        IF_SETHIDE(false, comp(1082, 82));  // trh189_overlay:left_modifier_plus
    };
    switch (varbitplayer_52295) {
        case 61: {
            int0 = 19172 as graphic;
            string0 = "<col=FFFFFF>White or Above";
            break;
        }
        case 62: {
            int0 = 19173 as graphic;
            string0 = "<col=FFFF00>Yellow or Above";
            break;
        }
        case 63: {
            int0 = 19174 as graphic;
            string0 = "<col=FF6600>Orange or Above";
            break;
        }
        case 64: {
            int0 = 19175 as graphic;
            string0 = "<col=FE3939>Red or Above";
            break;
        }
        case 65: {
            int0 = 19176 as graphic;
            string0 = "<col=DE7FE1>Purple";
            IF_SETHIDE(true, comp(1082, 82));  // trh189_overlay:left_modifier_plus
            break;
        }
        default: {
            script12478("Unexpected chest left  chest for rarity graphic");
            break;
        }
    };
    switch (varbitplayer_52296) {
        case 0: {
            int1 = 22975 as graphic;
            break;
        }
        case 5: {
            int1 = 22989 as graphic;
            break;
        }
        case 6: {
            int1 = 22990 as graphic;
            break;
        }
        case 7: {
            int1 = 22991 as graphic;
            break;
        }
        case 8: {
            int1 = 22992 as graphic;
            break;
        }
        case 10: {
            int1 = 22993 as graphic;
            break;
        }
        default: {
            script12478(`Unexpected chest right chest for multiplier graphic ${inttostring(varbitplayer_52296, 10)}`);
            break;
        }
    };
    IF_SETGRAPHIC(int0, comp(1082, 74));  // trh189_overlay:left_modifier
    IF_SETGRAPHIC(int1, comp(1082, 59));  // trh189_overlay:right_modifier
    script19029(string0, 70910026);
    script11158();
    script11159();
    return;
}