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
        IF_SETTEXT("Resist arrest", 68091916);
        IF_SETTEXT("Great escape", 68091921);
        IF_SETTEXT("Decoy", 68091926);
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
        IF_SETTEXT("Friendly wave", 68091916);
        IF_SETTEXT("Security sensor", 68091921);
        IF_SETTEXT("Undercover cop", 68091926);
    };
    CC_DELETEALL(68091908);
    CC_DELETEALL(68091910);
    CC_DELETEALL(68091912);
    script13991(68091908, 68091915, 28557, int0);
    script13991(68091910, 68091920, 28557, int1);
    script13991(68091912, 68091925, 28557, int2);
    script7999(68091916, 24113);
    script7999(68091921, 24113);
    script7999(68091926, 24113);
    return;
}