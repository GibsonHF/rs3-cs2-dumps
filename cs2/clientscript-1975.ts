//
function script1975(): void {
    var int0 = false;
    var int1 = false;
    var int2 = false;
    if ((varbitplayer_21649 == 0)) {
        if (((varbitplayer_21655 == 0) || (varbitplayer_21637 == 0))) {
            int0 = true;
        };
        if (((varbitplayer_21656 == 0) || (varbitplayer_21638 == 0))) {
            int1 = true;
        };
        if (((varbitplayer_21657 == 0) || (varbitplayer_21639 == 0))) {
            int2 = true;
        };
        IF_SETTEXT("Resist arrest", comp(1039, 12));
        IF_SETTEXT("Great escape", comp(1039, 17));
        IF_SETTEXT("Decoy", comp(1039, 22));
    } else {
        if (((varbitplayer_21651 == 0) || (varbitplayer_21637 == 0))) {
            int0 = true;
        };
        if (((varbitplayer_21652 == 0) || (varbitplayer_21638 == 0))) {
            int1 = true;
        };
        if (((varbitplayer_21653 == 0) || (varbitplayer_21639 == 0))) {
            int2 = true;
        };
        IF_SETTEXT("Friendly wave", comp(1039, 12));
        IF_SETTEXT("Security sensor", comp(1039, 17));
        IF_SETTEXT("Undercover cop", comp(1039, 22));
    };
    CC_DELETEALL(comp(1039, 4));
    CC_DELETEALL(comp(1039, 6));
    CC_DELETEALL(comp(1039, 8));
    script13991(comp(1039, 4), comp(1039, 11), 28557 as struct, int0);
    script13991(comp(1039, 6), comp(1039, 16), 28557 as struct, int1);
    script13991(comp(1039, 8), comp(1039, 21), 28557 as struct, int2);
    script7999(comp(1039, 12), 24113 as struct);
    script7999(comp(1039, 17), 24113 as struct);
    script7999(comp(1039, 22), 24113 as struct);
    return;
}