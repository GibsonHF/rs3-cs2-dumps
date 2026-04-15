//
function script9536(int0: int, int1: int, int2: achievement): string {
    var int3 = -1 as struct;
    var int4 = 0;
    var int5 = 0;
    switch (int0) {
        case 6: {
            break;
        }
        default: {
            return "";
        }
    };
    int3 = enum_getvalue(0, 73, 6452 as cs2enum, int1);
    if ((int3 != -1 as struct)) {
        [int4, int5] = script9132(struct_getparam(int3, 1268));
        switch (int4) {
            case 0: {
                return "Ready";
            }
            case 1: {
                return `Refreshing in ${script9171(int5, 1)}`;
            }
            case 2:
            case 5: {
                return `Available in ${script9171(int5, 1)}`;
            }
            case 3:
            case 7: {
                return `Resets in ${script9171(int5, 1)}`;
            }
            case 6: {
                return "--:--";
            }
            case 4: {
                return `Ends in ${script9171(int5, 1)}`;
            }
            case -1: {
                return "Locked";
            }
        };
    } else {
        return "";
    };
    return "";
}