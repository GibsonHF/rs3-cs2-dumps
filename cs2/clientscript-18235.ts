//
function script18235(): [boolean, string, string, unknown_int] {
    var int0 = -1 as struct;
    var int1 = -1;
    switch (RANDOM(3)) {
        case 0: {
            int1 = 22941;
            break;
        }
        case 1: {
            int1 = 22942;
            break;
        }
        case 2: {
            int1 = 22943;
            break;
        }
    };
    switch (varbitplayer_16568) {
        case 1: {
            int0 = enum_getvalue(0, 73, 6817 as cs2enum, varbitplayer_16575);
            return [false, script17039(int0), struct_getparam(int0, 1273), int1];
        }
        case 2: {
            int0 = enum_getvalue(0, 73, 6817 as cs2enum, varbitplayer_16579);
            return [false, script17039(int0), struct_getparam(int0, 1273), int1];
        }
        case 3: {
            int0 = enum_getvalue(0, 73, 6817 as cs2enum, varbitplayer_16583);
            return [false, script17039(int0), struct_getparam(int0, 1273), int1];
        }
        case 4: {
            int0 = enum_getvalue(0, 73, 6817 as cs2enum, varbitplayer_16587);
            return [false, script17039(int0), struct_getparam(int0, 1273), int1];
        }
        case 5: {
            int0 = enum_getvalue(0, 73, 6817 as cs2enum, varbitplayer_16591);
            return [false, script17039(int0), struct_getparam(int0, 1273), int1];
        }
    };
    return [true, "None available", "Click here to view daily challenges.", int1];
}