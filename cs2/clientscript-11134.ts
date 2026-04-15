//
function script11134(int0: component): void {
    if ((varbitplayer_27373 >= 30)) {
        IF_SETCOLOUR(script10495(6), int0);
        IF_SETTEXT("There are too many distractions!", int0);
        return;
    };
    if (((varbitplayer_27375 > 700) || (varbitplayer_27375 < 300))) {
        IF_SETCOLOUR(script10495(6), int0);
        IF_SETTEXT("The egg is leaning too far!", int0);
        return;
    };
    IF_SETCOLOUR(16777215, int0);
    if ((varbitplayer_27373 > 0)) {
        IF_SETTEXT("The imp has become distracted.", int0);
        return;
    };
    if (((varbitplayer_27375 > 575) || (varbitplayer_27375 < 425))) {
        IF_SETTEXT("The egg is leaning.", int0);
        return;
    };
    IF_SETTEXT("The imp is making good progress.", int0);
    return;
}