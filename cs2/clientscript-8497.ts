//
function script8497(int0: number): void {
    var int1 = script2222(int0);
    if ((int1 == 0)) {
        script8564();
        CC_DELETEALL(123863078);
        CC_DELETEALL(123863041);
        CC_CREATE(123863041, 4, 0);
        if ((varbitplayer_36829 <= 0)) {
            if ((script6431() == 0)) {
                CC_SETTEXT("You don't have any presets.<br><br>Click the create preset button<br>to create your first preset.");
            } else {
                CC_SETTEXT("You don't have any presets.<br><br>Tap the create preset button<br>to create your first preset.");
            };
        } else {
            CC_SETTEXT("Select a preset to edit your<br>quick prayers.");
        };
        CC_SETTEXTFONT(55);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 0, 0);
    } else {
        CC_DELETEALL(123863041);
        script7819(123863078);
        script8564();
        script8576();
    };
    return;
}