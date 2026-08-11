//
function script19953(int0: number): void {
    if ((varbitplayer_57849 == 1)) {
        IF_SETHIDE(true, comp(1334, 2));  // easter_hub_beekeeping_emotion_bar:current_emotion
        IF_SETGRAPHIC(34913 as graphic, comp(1334, 1));  // easter_hub_beekeeping_emotion_bar:emotion_bar
        script3536("The bees are currently: ???", 87425025, -1);
    } else if ((int0 == 0)) {
        IF_SETHIDE(false, comp(1334, 2));  // easter_hub_beekeeping_emotion_bar:current_emotion
        IF_SETGRAPHIC(34912 as graphic, comp(1334, 1));  // easter_hub_beekeeping_emotion_bar:emotion_bar
        script19954();
    };
    return;
}