//
function script1975(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    if ((varbitplayer_21649 == 0)) {
        if (((varbitplayer_21655 == 0) || (varbitplayer_21637 == 0))) {
            int0 = 1;
        };
        if (((varbitplayer_21656 == 0) || (varbitplayer_21638 == 0))) {
            int1 = 1;
        };
        if (((varbitplayer_21657 == 0) || (varbitplayer_21639 == 0))) {
            int2 = 1;
        };
        IF_SETTEXT("Resist arrest", comp(1039, 12));  // town_side:name_1
        IF_SETTEXT("Great escape", comp(1039, 17));  // town_side:name_2
        IF_SETTEXT("Decoy", comp(1039, 22));  // town_side:name_3
    } else {
        if (((varbitplayer_21651 == 0) || (varbitplayer_21637 == 0))) {
            int0 = 1;
        };
        if (((varbitplayer_21652 == 0) || (varbitplayer_21638 == 0))) {
            int1 = 1;
        };
        if (((varbitplayer_21653 == 0) || (varbitplayer_21639 == 0))) {
            int2 = 1;
        };
        IF_SETTEXT("Friendly wave", comp(1039, 12));  // town_side:name_1
        IF_SETTEXT("Security sensor", comp(1039, 17));  // town_side:name_2
        IF_SETTEXT("Undercover cop", comp(1039, 22));  // town_side:name_3
    };
    CC_DELETEALL(comp(1039, 4));  // town_side:ability_button_build_1
    CC_DELETEALL(comp(1039, 6));  // town_side:ability_button_build_2
    CC_DELETEALL(comp(1039, 8));  // town_side:ability_button_build_3
    script13991(68091908, 68091915, 28557, int0);
    script13991(68091910, 68091920, 28557, int1);
    script13991(68091912, 68091925, 28557, int2);
    script7999(68091916, 24113);
    script7999(68091921, 24113);
    script7999(68091926, 24113);
    return;
}