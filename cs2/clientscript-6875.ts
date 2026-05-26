//
function script6875(): void {
    if (((varbitplayer_674 == -1) || (varbitplayer_674 == 1023))) {
        script18487();
        return;
    };
    var int0 = 13777;
    var int1 = 13780 as graphic;
    var int2 = 13779 as graphic;
    var int3 = 13778 as graphic;
    var int4 = -1;
    var int5 = -1;
    var int6 = (ENUM_GETOUTPUTCOUNT(2345 as cs2enum) - 1);
    var string0 = "";
    var string1 = "";
    var int7 = -1;
    while ((int6 >= 0)) {
        if ((CC_FIND(comp(1311, 504), ((int6 * 2) + 1)) == 1)) {
            int7 = enum_getvalue(0, 0, 2345 as cs2enum, int6);
            string1 = enum_getvalue(0, 36, 2344 as cs2enum, int6);
            if ((((varclient_2017 == int7) && (varclient_2018 == int7)) && (varbitplayer_688 == 1))) {
                CC_SETGRAPHIC(int1);
                string0 = `Set colour to ${string1}.`;
            } else if ((varclient_2017 == int7)) {
                if ((varbitplayer_688 == 1)) {
                    CC_SETGRAPHIC(int2);
                    string0 = "Click again to set secondary colour.";
                } else {
                    CC_SETGRAPHIC(int1);
                    string0 = `Set colour to ${string1}.`;
                };
            } else if (((varbitplayer_688 == 1) && (varclient_2018 == int7))) {
                CC_SETGRAPHIC(int3);
                string0 = "Click again to set primary colour.";
            } else {
                CC_SETGRAPHIC(13777 as graphic);
                string0 = `Set colour to ${string1}.`;
            };
            script14990(0, string0);
        };
        int6 = (int6 - 1);
    };
    return;
}