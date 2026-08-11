//
function script19954(): void {
    if ((varbitplayer_57849 == 1)) {
        return;
    };
    var int0 = comp(1334, 1);  // easter_hub_beekeeping_emotion_bar:emotion_bar
    var int1 = comp(1334, 2);  // easter_hub_beekeeping_emotion_bar:current_emotion
    if ((varbitplayer_57842 < 300)) {
        IF_SETGRAPHIC(34916 as graphic, int1);
        script3536("Sad", int1, -1);
        script3536("The bees are currently: Sad", int0, -1);
    } else if ((varbitplayer_57842 > 800)) {
        IF_SETGRAPHIC(34914 as graphic, int1);
        script3536("Angry", int1, -1);
        script3536("The bees are currently: Angry", int0, -1);
    } else {
        IF_SETGRAPHIC(34915 as graphic, int1);
        script3536("Happy", int1, -1);
        script3536("The bees are currently: Happy", int0, -1);
    };
    var int2 = IF_GETWIDTH(int0);
    IF_SETPOSITION((varbitplayer_57842 / (1000 / int2)), IF_GETY(int1), 0, 0, int1);
    return;
}