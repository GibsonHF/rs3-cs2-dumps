//
function script17811(int0: number, int1: number, int2: number): number {
    var int3 = varplayer_11181;
    if ((int3 == 0)) {
        int3 = script17503(int0, 0);
    };
    var int4 = 0;
    var int5 = -1;
    var int6 = -1;
    var int7 = script17501(int0);
    var int8 = script17525(int0, 0);
    var int9 = script17524(int0, int3, 0);
    switch (int7) {
        case 1: {
            if (((int9 > 0) && (script14488(varplayer_11130) == 1))) {
                int4 = (int4 + script17812(int2, (int1 + int4), 2100, -1, -1, `${inttostring(int9, 10)} ${script4583(int9, "soul", "souls")} added to the Well of Souls`, 2, 30593));
            };
            break;
        }
        case 5: {
            [int5, int6] = script17515(int0, 0);
            int8 = (int8 + int6);
            break;
        }
    };
    int4 = (int4 + script17812(int2, (int1 + int4), 2100, -1, 55336, `${inttostring(int8, 10)} ${OC_NAME(55336)}`, 2, 30593));
    if ((int7 == 5)) {
        script3537(`Includes ${inttostring((int8 - int6), 10)} as ritual byproduct`);
    };
    return int4;
}