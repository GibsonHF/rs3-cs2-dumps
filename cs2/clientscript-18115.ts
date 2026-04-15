//
function script18115(): void {
    if ((script17852() == 0)) {
        return;
    };
    var int0 = -1;
    var int1 = 0;
    var int2 = 0;
    script17927();
    switch (MAP_LANG()) {
        case 1: {
            int0 = 4294;
            int1 = 1321;
            int2 = 147;
            break;
        }
        case 2: {
            int0 = 4305;
            int1 = 1481;
            int2 = 165;
            break;
        }
        case 3: {
            int0 = 4306;
            int1 = 1529;
            int2 = 145;
            break;
        }
        default: {
            int0 = 4293;
            int1 = 1337;
            int2 = 178;
            break;
        }
    };
    int1 = (int1 / 2);
    int2 = (int2 / 2);
    stack(int0);
    stack(80543754);
    IF_SETGRAPHIC();
    IF_SETSIZE(int1, int2, 0, 0, 80543754);
    script17927();
    script7852(80543750, 0, 0, 0, 0, 0, 0, 0, 1, 1, script17989(27), "");
    CC_SETOP(1, "Begin Hero Pass");
    script2995(80543750, 1, 0, 0, 0, 2, 0, 80, 1, 0, 2195, "Begin<br>Hero Pass");
    CC_SETTEXTFONT(58);
    CC_SETCOLOUR(14734449);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETTEXTSHADOW(1);
    var int3 = 0;
    var int4 = 0;
    var int5 = 450;
    var int6 = 80543749;
    CC_DELETEALL(int6);
    script2994(int6, 1, int3, int4, 1, 1, int5, int5, 0, 0, 4312);
    CC_SETONTIMER(callback(script17942, int6, 1, -1500));
    CC_SET2DANGLE(16384);
    script2994(int6, 2, int3, int4, 1, 1, int5, int5, 0, 0, 4312);
    CC_SETONTIMER(callback(script17942, int6, 2, -1500));
    CC_SET2DANGLE(49152);
    int6 = 80543751;
    CC_DELETEALL(int6);
    script2994(int6, 1, int3, int4, 1, 1, int5, int5, 0, 0, 4312);
    CC_SETONTIMER(callback(script17942, int6, 1, -1500));
    CC_SETTRANS(204);
    CC_SET2DANGLE(16384);
    script2994(int6, 2, int3, int4, 1, 1, int5, int5, 0, 0, 4312);
    CC_SETONTIMER(callback(script17942, int6, 2, -1500));
    CC_SETTRANS(204);
    CC_SET2DANGLE(49152);
    var int7 = 0;
    var int8 = 0;
    int7 = 529;
    int8 = 1920;
    script4264(80543745, 2, 2);
    script1636(80543745, 4313, int7, int8, 2, 25, 1, 0);
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    [int9, int10, int11] = script18040(script17853());
    var string0 = `You're currently level <col=2EF8FF>${TOSTRING_LOCALISED(int9, 1)}</col> with <col=2EF8FF>${TOSTRING_LOCALISED(int10, 1)}</col> / <col=2EF8FF>${TOSTRING_LOCALISED(int11, 1)}</col> Hero points.<br>`;
    if ((((varplayer_11331 > 0) || (varplayer_11332 > 0)) && (varplayer_11333 == script17857(script17853())))) {
        if ((varplayer_11331 > 0)) {
            string0 = strconcat(string0, `<br> - Your Yak Track skips have converted to <col=2EF8FF>${TOSTRING_LOCALISED(varplayer_11331, 1)}</col> levels.`);
        };
        if ((varplayer_11332 > 0)) {
            string0 = strconcat(string0, `<br> - Your Challenge skip tokens have converted to <col=2EF8FF>${TOSTRING_LOCALISED(varplayer_11332, 1)}</col> Hero points.`);
        };
    };
    if ((script17894() == 1)) {
        if ((script17854() == -1 as dbrow)) {
            string0 = strconcat(string0, `<br> - Your progress booster from Forinthry Frontier Yak Track earnt you <col=2EF8FF>${TOSTRING_LOCALISED(10, 1)}</col> levels.`);
        } else {
            string0 = strconcat(string0, `<br> - Your progress booster from ${script17888(script17854())} earnt you <col=2EF8FF>${TOSTRING_LOCALISED(10, 1)}</col> levels.`);
        };
    } else if ((script17854() == -1 as dbrow)) {
        string0 = strconcat(string0, `<br> - If unlocked, the progress booster from Forinthry Frontier Yak Track would've awarded ${TOSTRING_LOCALISED(10, 1)} levels.`);
    } else {
        string0 = strconcat(string0, `<br> - If unlocked, the progrss booster from ${script17888(script17854())} would've awarded ${TOSTRING_LOCALISED(10, 1)} levels.`);
    };
    IF_SETTEXT(string0, comp(1229, 22));
    return;
}