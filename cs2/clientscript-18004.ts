//
function script18004(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    [int2, int3, int4, int5, int6, int7] = script17884(int0);
    var string0 = "";
    var string1 = "";
    switch (int1) {
        case 1: {
            string0 = "Heroic Levels";
            string1 = `Levels after 99 are Heroic Levels. Heroic levels require ${TOSTRING_LOCALISED(dbrow_getfield(varplayer_11339, 991328, 0), 1)} hero points per level, but give Heroic rewards.<br><br>Purchasing Heroic levels is the same price as purchasing regular Hero Pass levels.`;
            break;
        }
        case 2: {
            string0 = script17886(int2, int3, int4, int5, int6, -1);
            string1 = script17887(int2, int3, int4, int5, int6, -1);
            string1 = strconcat(string1, `<br>${script17971(varplayer_11339)}`);
            break;
        }
        default: {
            string0 = script17886(int2, int3, int4, int5, int6, -1);
            string1 = script17887(int2, int3, int4, int5, int6, -1);
            break;
        }
    };
    IF_SETTEXT(string0, comp(1227, 11));
    IF_SETTEXT(string1, comp(1227, 12));
    return;
}