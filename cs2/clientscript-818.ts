//
function script818(int0: number): void {
    var string0 = "No information is available about this beacon.";
    var int1 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int1 = comp(575, 3);  // firedup_beacon_map:firedup_1
            break;
        }
        case 2: {
            int1 = comp(575, 4);  // firedup_beacon_map:firedup_2
            break;
        }
        case 3: {
            int1 = comp(575, 5);  // firedup_beacon_map:firedup_3
            break;
        }
        case 4: {
            int1 = comp(575, 6);  // firedup_beacon_map:firedup_4
            break;
        }
        case 5: {
            int1 = comp(575, 7);  // firedup_beacon_map:firedup_5
            break;
        }
        case 6: {
            int1 = comp(575, 8);  // firedup_beacon_map:firedup_6
            break;
        }
        case 7: {
            int1 = comp(575, 9);  // firedup_beacon_map:firedup_7
            break;
        }
        case 8: {
            int1 = comp(575, 10);  // firedup_beacon_map:firedup_8
            break;
        }
        case 9: {
            int1 = comp(575, 11);  // firedup_beacon_map:firedup_9
            break;
        }
        case 10: {
            int1 = comp(575, 12);  // firedup_beacon_map:firedup_10
            break;
        }
        case 11: {
            int1 = comp(575, 13);  // firedup_beacon_map:firedup_11
            break;
        }
        case 12: {
            int1 = comp(575, 14);  // firedup_beacon_map:firedup_12
            break;
        }
        case 13: {
            int1 = comp(575, 15);  // firedup_beacon_map:firedup_13
            break;
        }
        case 14: {
            int1 = comp(575, 16);  // firedup_beacon_map:firedup_14
            break;
        }
        default: {
            return;
        }
    };
    IF_SETMODEL(41805 as model, int1);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int1);
    return;
}