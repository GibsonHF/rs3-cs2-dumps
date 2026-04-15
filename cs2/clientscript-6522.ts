//
function script6522(): unknown_int {
    if ((((varbitplayer_33688 == 0) && (varbitplayer_27907 == 0)) && (varbitplayer_27908 < 5))) {
        return 0;
    };
    var string0 = "null";
    var int0 = -1;
    if ((varbitplayer_33688 > 0)) {
        string0 = "Your next prize is guaranteed to be a <col=6600FF>purple prize</col>!";
        int0 = 22121;
    } else if ((varbitplayer_27907 == 3)) {
        string0 = "Your next prize is guaranteed to be a <col=FF0000>red prize or greater</col>!";
        int0 = 22120;
    } else if ((varbitplayer_27907 == 2)) {
        string0 = "Your next prize is guaranteed to be a <col=FF6600>orange prize or greater</col>!";
        int0 = 22119;
    } else if ((varbitplayer_27907 == 1)) {
        string0 = "Your next prize is guaranteed to be a <col=FFFF00>yellow prize or greater</col>!";
        int0 = 22118;
    } else if ((varbitplayer_33689 == 500)) {
        string0 = "Activate the purple gem to guarantee that your next prize is a <col=6600FF>purple prize</col>!";
        int0 = 22121;
    } else if ((varbitplayer_27908 == 24)) {
        string0 = "Activate the wonderbar to guarantee that your next prize is a <col=FF0000>red prize or greater</col>!";
        int0 = 22120;
    } else if ((varbitplayer_27908 >= (5 + 8))) {
        string0 = "Activate the wonderbar to guarantee that your next prize is a <col=FF6600>orange prize or greater</col>!";
        int0 = 22119;
    } else if ((varbitplayer_27908 >= 5)) {
        string0 = "Activate the wonderbar to guarantee that your next prize is a <col=FFFF00>yellow prize or greater</col>!";
        int0 = 22118;
    } else {
        return 0;
    };
    return 1;
}