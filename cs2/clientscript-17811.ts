//
function script17811(int0: dbrow, int1: int, int2: component): int {
    var int3 = varplayer_11181;
    if ((int3 == 0)) {
        int3 = script17503(int0, 0);
    };
    var int4 = 0;
    var int5 = -1 as obj;
    var int6 = -1;
    var int7 = script17501(int0);
    var int8 = script17525(int0, 0);
    var int9 = script17524(int0, int3, 0);
    switch (int7) {
        case 1: {
            if (((int9 > 0) && (script14488(varplayer_11130) == true))) {
                int4 = (int4 + script17812(int2, (int1 + int4), 2100 as dbrow, -1 as graphic, -1 as obj, `${inttostring(int9, 10)} ${script4583(int9, "soul", "souls")} added to the Well of Souls`, 2, 30593 as graphic));
            };
            break;
        }
        case 5: {
            [int5, int6] = script17515(int0, 0);
            int8 = (int8 + int6);
            break;
        }
    };
    int4 = (int4 + script17812(int2, (int1 + int4), 2100 as dbrow, -1 as graphic, 55336 as obj, `${inttostring(int8, 10)} ${OC_NAME(55336 as obj)}`, 2, 30593 as graphic));
    if ((int7 == 5)) {
        script3537(`Includes ${inttostring((int8 - int6), 10)} as ritual byproduct`);
    };
    return int4;
}