//[clientscript,quickchat_tutorial_loadcontent]
function script783(): void {
    if ((varbitplayer_5998 != varclient_155)) {
        varclient_155 = varbitplayer_5998;
        if (((script6431() == true) && (varbitplayer_5998 == 1))) {
            varbitplayer_5998 = 2;
        };
        if ((varbitplayer_5998 == 1)) {
            script1029(1484 as cs2enum, 9);
        } else if ((varbitplayer_5998 == 2)) {
            if ((script6431() == true)) {
                script1032(12906, 0, 7);
            } else {
                script1032(1486, 0, 7);
            };
        } else if ((varbitplayer_5998 == 3)) {
            script1030(1485);
        };
    };
    return;
}