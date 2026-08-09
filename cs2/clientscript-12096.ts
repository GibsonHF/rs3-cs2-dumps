//
function script12096(int0: number, int1: number): string {
    var string0 = "";
    var int2 = 0;
    if ((int0 != -1)) {
        var int1 = struct_getparam(int0, 6569);
        string0 = struct_getparam(int0, 2211);
        int2 = struct_getparam(int0, 5442);
    };
    if ((int1 != -1)) {
        switch (DB_GETROWTABLE(int1)) {
            case 5: {
                string0 = dbrow_getfield(int1, 20528, 0);
                if ((struct_getparam(int0, 5443) == 0)) {
                    string0 = `${string0}<br>${struct_getparam(int0, 2211)}`;
                };
                int2 = 1;
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
            case 370: {
                string0 = script20815(int1);
                break;
            }
        };
    };
    if ((int2 == 0)) {
        return string0;
    };
    var int3 = struct_getparam(int0, 2213);
    var int4 = struct_getparam(int0, 8875);
    var int5 = -1;
    var string1 = "<br>";
    if (((int3 != -1) && (struct_getparam(int0, 5443) == 1))) {
        string0 = `${string0}Ingredients: ${script12104(int3, int4, string1)}`;
    };
    if (((int3 != -1) && (struct_getparam(int0, 8876) == 1))) {
        int5 = item_getparam(int3, 3203);
        string0 = `${string0}Ingredients:`;
        if ((struct_getparam(int5, 3205) != -1)) {
            string0 = script17670(string0, struct_getparam(int5, 3205), int4);
        };
        if ((struct_getparam(int5, 3210) != -1)) {
            string0 = script17670(string0, struct_getparam(int5, 3210), int4);
        };
        if ((struct_getparam(int5, 3215) != -1)) {
            string0 = script17670(string0, struct_getparam(int5, 3215), int4);
        };
        if ((struct_getparam(int5, 3220) != -1)) {
            string0 = script17670(string0, struct_getparam(int5, 3220), int4);
        };
        if ((struct_getparam(int5, 3225) != -1)) {
            string0 = script17670(string0, struct_getparam(int5, 3225), int4);
        };
        if ((struct_getparam(int5, 5559) != -1)) {
            string0 = script17670(string0, struct_getparam(int5, 5559), int4);
        };
        if ((struct_getparam(int5, 5564) != -1)) {
            string0 = script17670(string0, struct_getparam(int5, 5564), int4);
        };
        if ((struct_getparam(int5, 5569) != -1)) {
            string0 = script17670(string0, struct_getparam(int5, 5569), int4);
        };
    };
    return string0;
}