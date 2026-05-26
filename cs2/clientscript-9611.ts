//
function script9611(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int3 = -1;
    while ((int0 < 8)) {
        [int2, string0, string2, int3] = script9613(int0);
        if ((int2 > 0)) {
            string1 = `Level ${TOSTRING_LOCALISED(int2, 1)} Construction required.`;
            if ((STAT(22) < int2)) {
                string2 = `${string2}<br><br><col=ffffff>You can pay Papa Mambo to build this for you.`;
            };
        } else {
            string1 = "";
        };
        script13998(30081024, 30081027, 28556, 5, int1, 145, 24, int0, 0, string0, script9670(int0, varbitplayer_16083));
        if ((CC_FIND(30081027, int0) == 1)) {
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script9612, -2147483643));
        };
        if ((int0 == varbitplayer_16083)) {
            IF_SETTEXT(string0, 30081031);
            IF_SETTEXT(string1, 30081032);
            IF_SETTEXT(string2, 30081033);
            IF_SETMODEL(int3, 30081030);
        };
        int0 = (int0 + 1);
        int1 = (int1 + 28);
    };
    return;
}