//
function script11990(int0: component): void {
    var string0 = "";
    switch (varbitplayer_16789) {
        case 0: {
            if ((script6431() == true)) {
                string0 = "Tap here to select which prayers become active when using quick-prayers.<br>Quick-prayers can be activated using the Prayer button on the action bar.";
            } else if ((varbitplayer_27169 == 1)) {
                string0 = "Click here to select which prayers<br>become active when using quick-prayers.<br>Quick-prayers can be activated using<br>the Prayer button next to the minimap.";
            } else {
                string0 = "Click here to select which prayers become active when using quick-prayers.<br>Quick-prayers can be activated using the Prayer button on the action bar.";
            };
            break;
        }
        case 1: {
            if ((script6431() == true)) {
                string0 = "Tap here to select which curses become active when using quick-curses.<br>Quick-curses can be activated using the Prayer button on the action bar.";
            } else if ((varbitplayer_27169 == 1)) {
                string0 = "Click here to select which curses<br>become active when using quick-curses.<br>Quick-curses can be activated using<br>the Prayer button next to the minimap.";
            } else {
                string0 = "Click here to select which curses<br>become active when using quick-curses.<br>Quick-curses can be activated using<br>the Prayer button next to the minimap.";
            };
            break;
        }
        default: {
            string0 = "Press here to select which prayers become active when using quick-prayers.<br>Quick-prayers can be activated using the Prayer button on the action bar.";
            break;
        }
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