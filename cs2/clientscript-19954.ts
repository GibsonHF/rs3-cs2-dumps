//
function script19954(): void {
    if ((varbitplayer_57849 == 1)) {
        return;
    };
    var int0 = comp(1334, 1);
    var int1 = comp(1334, 2);
    if ((varbitplayer_57842 < 300)) {
        stack(34916);
        stack(int1);
        IF_SETGRAPHIC();
        script3536("Sad", int1, -1);
        script3536("The bees are currently: Sad", int0, -1);
    } else if ((varbitplayer_57842 > 800)) {
        stack(34914);
        stack(int1);
        IF_SETGRAPHIC();
        script3536("Angry", int1, -1);
        script3536("The bees are currently: Angry", int0, -1);
    } else {
        stack(34915);
        stack(int1);
        IF_SETGRAPHIC();
        script3536("Happy", int1, -1);
        script3536("The bees are currently: Happy", int0, -1);
    };
    var int2 = IF_GETWIDTH(int0);
    IF_SETPOSITION((varbitplayer_57842 / (1000 / int2)), IF_GETY(int1), 0, 0, int1);
    return;
}