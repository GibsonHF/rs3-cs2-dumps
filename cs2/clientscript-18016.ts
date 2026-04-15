//
function script18016(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int): [int, int, int, int, int] {
    var int6 = comp(1227, 40);
    var int7 = comp(1227, 41);
    var int8 = 1;
    var int9 = script17969(varplayer_11339, 0, 0, int0);
    var int10 = script18018(int0);
    var int11 = false;
    var int12 = false;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    switch (int0) {
        case 1: {
            int11 = false;
            int12 = false;
            int13 = 0;
            break;
        }
        case 2: {
            int11 = false;
            int12 = false;
            if ((script17862(varplayer_11339) < script17892(varplayer_11339))) {
                int13 = 0;
            } else {
                int13 = 1;
            };
            break;
        }
    };
    script18041(int6, int10, int9);
    script18041(int7, int10, int9);
    var int5 = (int5 + int9);
    var [int1, int2] = script17978(int8, int7, int9, 1, -1, int11, int10, int12, int13, int1, int2, int0);
    if ((CC_FINDBYCATEGORY(int6, 2, int10) == 1)) {
        var [int3, int4] = script17970(int3, int4);
        switch (int0) {
            case 1: {
                [int3, int4] = script17970(int3, int4);
                cc_setparam(4935, int3);
                cc_setparam(8654, int4);
                script17947(int3, int4, 0, 0, 0, 0, 0, 0, 1, 1, script17986(int11, int12, -1));
                CC_GETDYNAMICLAYER();
                int4 = (int4 + 1);
                [int14, int15] = script17895(int10, 0);
                script10485(int14, int15, 0, 0, 1, 0, 10, 5, 1, 1, 2100 as dbrow, `Levels after 99 are Heroic Levels. They require ${TOSTRING_LOCALISED(dbrow_getfield(varplayer_11339, 991328, 0), 1)} hero points per level but contain Heroic rewards.`);
                CC_SETCOLOUR(16777215);
                CC_SETTEXTALIGN(1, 1, 0);
                CC_SENDTOFRONT();
                CC_SETOP(1, "Heroic Levels Info");
                CC_SETONOP(callback(script18000, -1, int11, int10, -2147483645, -2147483643, 0, 0, 1));
                break;
            }
            case 2: {
                cc_setparam(4935, int3);
                cc_setparam(8654, int4);
                script17947(int3, int4, 0, 0, 0, 0, 0, 0, 1, 1, script17986(int11, int12, -1));
                CC_GETDYNAMICLAYER();
                int4 = (int4 + 1);
                script10485(int3, int4, 100, 0, 0, 0, (200 - 15), 0, 0, 1, 2100 as dbrow, script17971(varplayer_11339));
                CC_SETCOLOUR(16777215);
                int4 = (int4 + 1);
                script15937(int3, int4, 0, 0, 0, 0, 100, 0, 0, 1);
                int4 = (int4 + 1);
                script18025(int3, int4, CC_GETLAYER(), script17892(varplayer_11339), int12, 100, 2);
                break;
            }
        };
    };
    return [int1, int2, int3, int4, int5];
}