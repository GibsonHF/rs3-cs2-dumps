//
function script18237(): [boolean, string, string, unknown_int] {
    var string0 = "";
    var string1 = "";
    var int0 = -1;
    var int1 = false;
    var int2 = 8;
    var int3 = 0;
    var int4 = -1 as cs2enum;
    switch (varbitplayer_16569) {
        case 1: {
            int2 = varbitplayer_16574;
            int3 = varbitplayer_16575;
            int1 = false;
            break;
        }
        case 2: {
            int2 = varbitplayer_16578;
            int3 = varbitplayer_16579;
            int1 = false;
            break;
        }
        case 3: {
            int2 = varbitplayer_16582;
            int3 = varbitplayer_16583;
            int1 = false;
            break;
        }
        case 4: {
            int2 = varbitplayer_16586;
            int3 = varbitplayer_16587;
            int1 = false;
            break;
        }
        case 5: {
            int2 = varbitplayer_16590;
            int3 = varbitplayer_16591;
            int1 = false;
            break;
        }
        default: {
            int2 = (RANDOM(28) + 1);
            int1 = true;
            break;
        }
    };
    switch (int2) {
        case 8: {
            int4 = 6154 as cs2enum;
            int0 = 23221;
            break;
        }
        case 1: {
            int4 = 6817 as cs2enum;
            int0 = 22941;
            break;
        }
        case 22: {
            int4 = 7896 as cs2enum;
            int0 = 23222;
            break;
        }
        case 16: {
            int4 = 9007 as cs2enum;
            int0 = 23223;
            break;
        }
        case 11: {
            int4 = 9195 as cs2enum;
            int0 = 23224;
            break;
        }
        case 25: {
            int4 = 13007 as cs2enum;
            int0 = 23225;
            break;
        }
        case 21: {
            int4 = 13008 as cs2enum;
            int0 = 23226;
            break;
        }
        case 17: {
            int4 = 14605 as cs2enum;
            int0 = 23227;
            break;
        }
        case 15: {
            int4 = 16854 as cs2enum;
            int0 = 23228;
            break;
        }
        case 19: {
            int4 = 16855 as cs2enum;
            int0 = 23229;
            break;
        }
        case 9: {
            int4 = 16971 as cs2enum;
            int0 = 23230;
            break;
        }
        case 23: {
            int4 = 17095 as cs2enum;
            int0 = 23231;
            break;
        }
        case 13: {
            int4 = 17096 as cs2enum;
            int0 = 23232;
            break;
        }
        case 7: {
            int4 = 17097 as cs2enum;
            int0 = 23233;
            break;
        }
        case 12: {
            int4 = 17102 as cs2enum;
            int0 = 23234;
            break;
        }
        case 20: {
            int4 = 17103 as cs2enum;
            int0 = 23235;
            break;
        }
        case 14: {
            int4 = 17104 as cs2enum;
            int0 = 23236;
            break;
        }
        case 24: {
            int4 = 17105 as cs2enum;
            int0 = 23237;
            break;
        }
        case 10: {
            int4 = 17106 as cs2enum;
            int0 = 23238;
            break;
        }
        case 18: {
            int4 = 17107 as cs2enum;
            int0 = 23239;
            break;
        }
        case 26: {
            int4 = 9196 as cs2enum;
            int0 = 23240;
            break;
        }
        case 28: {
            int4 = 14056 as cs2enum;
            int0 = 10859;
            break;
        }
    };
    if ((int1 == true)) {
        return [int1, "None available", "Click here to view daily challenges.", int0];
    };
    if ((int4 == -1 as cs2enum)) {
        return [int1, string0, string1, int0];
    };
    var int5 = enum_getvalue(0, 73, int4, int3);
    if ((int5 != -1 as struct)) {
        string0 = script17039(int5);
        string1 = struct_getparam(int5, 1273);
    };
    return [int1, string0, string1, int0];
}