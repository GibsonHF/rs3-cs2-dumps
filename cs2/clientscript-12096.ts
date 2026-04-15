//
function script12096(int0: struct): string {
    var string0 = "";
    var int1 = struct_getparam(int0, 6569);
    var int2 = struct_getparam(int0, 2213);
    var int3 = struct_getparam(int0, 8875);
    var int4 = struct_getparam(int0, 5442);
    var int5 = -1 as struct;
    if ((int1 == -1 as dbrow)) {
        string0 = struct_getparam(int0, 2211);
    } else {
        switch (DB_GETROWTABLE(int1)) {
            case 5: {
                string0 = dbrow_getfield(int1, 20528, 0);
                if ((struct_getparam(int0, 5443) == 0)) {
                    string0 = `${string0}<br>${struct_getparam(int0, 2211)}`;
                };
                int4 = 1;
                break;
            }
            case 86: {
                string0 = dbrow_getfield(int1, 352304, 0);
                break;
            }
            case 88: {
                string0 = script14789(int1);
                break;
            }
            case 94: {
                string0 = `Offering this to the Monolith at the Archaeology campus will unlock the '${dbrow_getfield(int1, 385040, 0)}' relic power.<br><br>Power: ${script14610(int1)}`;
                break;
            }
            case 235: {
                string0 = script17817(int1);
                break;
            }
            default: {
                string0 = struct_getparam(int0, 2211);
                break;
            }
        };
    };
    if ((int4 == 1)) {
        if (((int2 != -1 as obj) && (struct_getparam(int0, 5443) == 1))) {
            string0 = `${string0}Ingredients: ${script12104(int2, int3)}`;
        };
        if (((int2 != -1 as obj) && (struct_getparam(int0, 8876) == 1))) {
            int5 = item_getparam(int2, 3203);
            string0 = `${string0}Ingredients:`;
            if ((struct_getparam(int5, 3205) != -1 as obj)) {
                string0 = script17670(string0, struct_getparam(int5, 3205), int3);
            };
            if ((struct_getparam(int5, 3210) != -1 as obj)) {
                string0 = script17670(string0, struct_getparam(int5, 3210), int3);
            };
            if ((struct_getparam(int5, 3215) != -1 as obj)) {
                string0 = script17670(string0, struct_getparam(int5, 3215), int3);
            };
            if ((struct_getparam(int5, 3220) != -1 as obj)) {
                string0 = script17670(string0, struct_getparam(int5, 3220), int3);
            };
            if ((struct_getparam(int5, 3225) != -1 as obj)) {
                string0 = script17670(string0, struct_getparam(int5, 3225), int3);
            };
            if ((struct_getparam(int5, 5559) != -1 as obj)) {
                string0 = script17670(string0, struct_getparam(int5, 5559), int3);
            };
            if ((struct_getparam(int5, 5564) != -1 as obj)) {
                string0 = script17670(string0, struct_getparam(int5, 5564), int3);
            };
            if ((struct_getparam(int5, 5569) != -1 as obj)) {
                string0 = script17670(string0, struct_getparam(int5, 5569), int3);
            };
        };
    };
    return string0;
}