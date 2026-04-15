//
function script18029(): void {
    var string0 = "";
    var string1 = "";
    var int0 = script17989(27);
    if ((varplayer_11339 == script17854())) {
        int0 = 8376 as dbrow;
    };
    CC_DELETEALL(comp(1227, 45));
    if ((script17912() == 1)) {
        string0 = "Purchase Premier Hero Pass";
        string1 = "Purchase Premier Hero Pass";
    } else if ((script17862(7906 as dbrow) < script17890(varplayer_11339))) {
        string0 = "Purchase<br>Levels";
        string1 = "Purchase Levels";
        if ((script11939() == 1)) {
            int0 = 8376 as dbrow;
        };
    } else {
        string0 = "Purchase<br>Emblems";
        string1 = "Purchase Emblems";
        if ((script11939() == 1)) {
            int0 = 8376 as dbrow;
        };
    };
    script17927();
    script7852(comp(1227, 45), 0, 0, 0, 0, 0, 0, 0, 1, 1, int0, "");
    CC_SETOP(1, string1);
    script2995(comp(1227, 45), 1, 0, 0, 0, 2, 0, 80, 1, 0, 2195 as dbrow, string0);
    CC_SETTEXTFONT(57 as fontmetrics);
    CC_SETCOLOUR(14734449);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETTEXTSHADOW(true);
    return;
}