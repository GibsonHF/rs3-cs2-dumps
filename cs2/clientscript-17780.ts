//
function script17780(int0: number, int1: number, int2: number, int3: number): number {
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    var int8 = script17501(varplayer_11131);
    var int9 = script17525(varplayer_11131, 1);
    var int10 = script17524(varplayer_11131, script17542(script17497(varplayer_11130)), 1);
    switch (int8) {
        case 1: {
            if ((script14488(varplayer_11130) == 1)) {
                int4 = (int1 * PARAHEIGHT(` ${inttostring(int10, 10)} ${script4583(int10, "soul", "souls")} added to the Well of Souls`, int2, 207));
                script2995(int3, IF_GETNEXTSUBID(int3), 0, (int0 + int5), 0, 0, int2, int4, 0, 0, 2100, ` ${inttostring(int10, 10)} ${script4583(int10, "soul", "souls")} added to the Well of Souls`);
                script2731(int3, CC_GETID(), 2);
                int5 = (int5 + CC_GETHEIGHT());
            };
            break;
        }
        case 5: {
            [int6, int7] = script17515(varplayer_11131, 0);
            int7 = script17832(int6, int7);
            int9 = (int9 + int7);
            break;
        }
    };
    int4 = (int1 * PARAHEIGHT(` ${inttostring(int9, 10)} ${OC_NAME(55336)}`, (int2 - 18), 207));
    script9731(int3, IF_GETNEXTSUBID(int3), 0, (int0 + int5), 0, 0, 18, 18, 0, 0, 55336, 1);
    script2995(int3, IF_GETNEXTSUBID(int3), 18, (int0 + int5), 0, 0, (int2 - 18), int4, 0, 0, 2100, ` ${inttostring(int9, 10)} ${OC_NAME(55336)}`);
    script2731(int3, CC_GETID(), 2);
    if ((int8 == 5)) {
        script3537(`Includes ${inttostring((int9 - int7), 10)} as ritual byproduct`);
    };
    int5 = (int5 + CC_GETHEIGHT());
    return int5;
}