//
function script9135(int0: component, int1: int): void {
    var string0 = "";
    var int2 = -1 as struct;
    var int3 = -1 as cs2enum;
    switch (varbitplayer_20794) {
        case 0:
        case 1: {
            int3 = 6452 as cs2enum;
            break;
        }
        case 2: {
            int3 = 8014 as cs2enum;
            break;
        }
        case 3: {
            int3 = 8015 as cs2enum;
            break;
        }
        case 4: {
            int3 = 8016 as cs2enum;
            break;
        }
        case 5: {
            int3 = 8017 as cs2enum;
            break;
        }
    };
    int2 = enum_getvalue(0, 73, int3, (1 + int1));
    var int4 = 0;
    var int5 = 0;
    [int4, int5] = script9132(struct_getparam(int2, 1268));
    switch (int4) {
        case 0: {
            string0 = "This activity is available to play";
            break;
        }
        case 1: {
            string0 = `This activity will reset in ${script9172(int5)}`;
            break;
        }
        case 2: {
            string0 = `This activity begins in ${script9172(int5)}`;
            break;
        }
        case 5: {
            string0 = `The lobby for this activity opens in ${script9172(int5)}`;
            break;
        }
        case 3: {
            string0 = `You can play this activity again in ${script9172(int5)}`;
            break;
        }
        case 4: {
            string0 = `This activity ends in ${script9172(int5)}`;
            break;
        }
        case -1: {
            string0 = "You don't meet the requirements for this activity.";
            break;
        }
        case 6: {
            string0 = "There are currently no upcoming stars";
            break;
        }
        case 7: {
            string0 = `This activity will reset in ${script9172(int5)}`;
            break;
        }
    };
    script8800(string0, int0, int1);
    return;
}