//
function script9611(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int3 = -1 as model;
    while ((int0 < 8)) {
        [int2, string0, string2, int3] = script9613(int0);
        if ((int2 > 0)) {
            string1 = `Level ${TOSTRING_LOCALISED(int2, 1)} Construction required.`;
            if ((STAT(22 as stat) < int2)) {
                string2 = `${string2}<br><br><col=ffffff>You can pay Papa Mambo to build this for you.`;
            };
        } else {
            string1 = "";
        };
        script13998(comp(459, 0), comp(459, 3), 28556 as struct, 5, int1, 145, 24, int0, false, string0, script9670(int0, varbitplayer_16083));
        if ((CC_FIND(comp(459, 3), int0) == 1)) {
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script9612, -2147483643));
        };
        if ((int0 == varbitplayer_16083)) {
            IF_SETTEXT(string0, comp(459, 7));
            IF_SETTEXT(string1, comp(459, 8));
            IF_SETTEXT(string2, comp(459, 9));
            IF_SETMODEL(int3, comp(459, 6));
        };
        int0 = (int0 + 1);
        int1 = (int1 + 28);
    };
    return;
}