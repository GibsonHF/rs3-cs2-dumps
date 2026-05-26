//
function script18029(): void {
    var string0 = "";
    var string1 = "";
    var int0 = script17989(27);
    if ((varplayer_11339 == script17854())) {
        int0 = 8376;
    };
    CC_DELETEALL(80412717);
    if ((script17912() == 1)) {
        string0 = "Purchase Premier Hero Pass";
        string1 = "Purchase Premier Hero Pass";
    } else if ((script17862(7906) < script17890(varplayer_11339))) {
        string0 = "Purchase<br>Levels";
        string1 = "Purchase Levels";
        if ((script11939() == 1)) {
            int0 = 8376;
        };
    } else {
        string0 = "Purchase<br>Emblems";
        string1 = "Purchase Emblems";
        if ((script11939() == 1)) {
            int0 = 8376;
        };
    };
    script17927();
    script7852(80412717, 0, 0, 0, 0, 0, 0, 0, 1, 1, int0, "");
    CC_SETOP(1, string1);
    script2995(80412717, 1, 0, 0, 0, 2, 0, 80, 1, 0, 2195, string0);
    CC_SETTEXTFONT(57);
    CC_SETCOLOUR(14734449);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETTEXTSHADOW(1);
    return;
}