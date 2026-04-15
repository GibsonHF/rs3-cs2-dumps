//
function script12014(int0: component): void {
    var string0 = "";
    if ((varbitplayer_45115 == 1)) {
        switch (varbitplayer_16789) {
            case 0: {
                string0 = `${script8241(1)} here to unfilter and show the full list of prayers.`;
                break;
            }
            case 1: {
                string0 = `${script8241(1)} here to unfilter and show the full list of curses.`;
                break;
            }
            default: {
                string0 = `${script8241(1)} here to unfilter and show the full list of prayers.`;
                break;
            }
        };
    } else {
        switch (varbitplayer_16789) {
            case 0: {
                string0 = `${script8241(1)} here to filter the list of prayers to show only those which you meet the level or quest requirements.`;
                break;
            }
            case 1: {
                string0 = `${script8241(1)} here to filter the list of curses to show only those which you meet the level or quest requirements.`;
                break;
            }
            default: {
                string0 = `${script8241(1)} here to filter the list of prayers to show only those which you meet the level or quest requirements.`;
                break;
            }
        };
    };
    if ((script6431() == true)) {
        IF_SETOP(5, "Info", int0);
        IF_SETONOP(callback(script7774, string0, -2147483645, -2147483643, 0), int0);
    } else {
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int0);
        IF_SETONMOUSELEAVE(callback(script8805), int0);
    };
    return;
}