//
function script15490(int0: struct, int1: int): [obj, int] {
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = -1 as obj;
    var int7 = 0;
    var int8 = -1 as obj;
    var int9 = 0;
    var int10 = -1 as obj;
    var int11 = 0;
    var int12 = -1 as obj;
    var int13 = 0;
    var int14 = -1 as obj;
    var int15 = 0;
    [int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, int14, int15] = script15489(int0);
    switch (int1) {
        case 1: {
            return [int2, int3];
        }
        case 2: {
            return [int4, int5];
        }
        case 3: {
            return [int6, int7];
        }
        case 4: {
            return [int8, int9];
        }
        case 5: {
            return [int10, int11];
        }
        case 6: {
            return [int12, int13];
        }
        case 7: {
            return [int14, int15];
        }
    };
    script12478(`Invalid id passed into trh_get_bonus_prize_obj_data_specific, expected 1-7, got ${inttostring(int1, 10)}`);
    return [-1 as obj, -1];
}