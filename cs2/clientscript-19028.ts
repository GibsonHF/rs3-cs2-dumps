//
function script19028(): void {
    var int0 = -1;
    var int1 = -1;
    var string0 = "";
    if (((varbitplayer_52293 > 0) && (varbitplayer_52294 > 0))) {
        IF_SETHIDE(false, comp(1082, 82));
    };
    switch (varbitplayer_52295) {
        case 61: {
            int0 = 19172;
            string0 = "<col=FFFFFF>White or Above";
            break;
        }
        case 62: {
            int0 = 19173;
            string0 = "<col=FFFF00>Yellow or Above";
            break;
        }
        case 63: {
            int0 = 19174;
            string0 = "<col=FF6600>Orange or Above";
            break;
        }
        case 64: {
            int0 = 19175;
            string0 = "<col=FE3939>Red or Above";
            break;
        }
        case 65: {
            int0 = 19176;
            string0 = "<col=DE7FE1>Purple";
            IF_SETHIDE(true, comp(1082, 82));
            break;
        }
        default: {
            script12478("Unexpected chest left  chest for rarity graphic");
            break;
        }
    };
    switch (varbitplayer_52296) {
        case 0: {
            int1 = 22975;
            break;
        }
        case 5: {
            int1 = 22989;
            break;
        }
        case 6: {
            int1 = 22990;
            break;
        }
        case 7: {
            int1 = 22991;
            break;
        }
        case 8: {
            int1 = 22992;
            break;
        }
        case 10: {
            int1 = 22993;
            break;
        }
        default: {
            script12478(`Unexpected chest right chest for multiplier graphic ${inttostring(varbitplayer_52296, 10)}`);
            break;
        }
    };
    stack(int0);
    stack(70910026);
    IF_SETGRAPHIC();
    stack(int1);
    stack(70910011);
    IF_SETGRAPHIC();
    script19029(string0, 70910026);
    script11158();
    script11159();
    return;
}