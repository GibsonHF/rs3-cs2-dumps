//
function script11091(int0: struct): [obj, int] {
    var int1 = -1 as obj;
    var int2 = -1;
    switch (int0) {
        case 21215: {
            int1 = INV_GETOBJ(94 as inv, 17);
            break;
        }
        case 6196: {
            [int1, int2] = [varplayer_10264, 2147483647];
            break;
        }
        case 50212: {
            if ((varplayer_11854 == -1 as obj)) {
                int1 = 7936 as obj;
            } else {
                int1 = varplayer_11854;
            };
            break;
        }
    };
    return [int1, int2];
}