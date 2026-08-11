//
function script17199(int0: number): number {
    var int1 = -1;
    switch (int0) {
        case 54521: {
            int1 = 1;
            break;
        }
        case 54522: {
            int1 = 2;
            break;
        }
        case 54523: {
            int1 = 3;
            break;
        }
        case 54524: {
            int1 = 4;
            break;
        }
    };
    var int2 = enum_getvalue(0, 74, 16852 as cs2enum, int1);
    var int3 = (script1882(int1) + 1);
    switch (int3) {
        case 1: {
            IF_SETGRAPHIC(dbrow_getfield(int2, 884785, 0), comp(1253, 313));  // wheel_of_fortune:reward_layer_additional_prize_object
            break;
        }
        case 2: {
            IF_SETGRAPHIC(dbrow_getfield(int2, 884786, 0), comp(1253, 313));  // wheel_of_fortune:reward_layer_additional_prize_object
            break;
        }
        case 3: {
            IF_SETGRAPHIC(dbrow_getfield(int2, 884787, 0), comp(1253, 313));  // wheel_of_fortune:reward_layer_additional_prize_object
            break;
        }
        case 4: {
            IF_SETGRAPHIC(dbrow_getfield(int2, 884788, 0), comp(1253, 313));  // wheel_of_fortune:reward_layer_additional_prize_object
            break;
        }
        case 5: {
            IF_SETGRAPHIC(dbrow_getfield(int2, 884789, 0), comp(1253, 313));  // wheel_of_fortune:reward_layer_additional_prize_object
            break;
        }
    };
    IF_SETSIZE(100, 115, 0, 0, comp(1253, 313));  // wheel_of_fortune:reward_layer_additional_prize_object
    IF_SETPOSITION(0, 25, 1, 0, comp(1253, 313));  // wheel_of_fortune:reward_layer_additional_prize_object
    IF_SETHIDE(true, comp(1253, 312));  // wheel_of_fortune:reward_layer_additional_prize_rarity_gem
    return 1;
}