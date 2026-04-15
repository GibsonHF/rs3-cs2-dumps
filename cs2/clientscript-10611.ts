//
function script10611(int0: struct): [string, string, graphic] {
    var string0 = struct_getparam(int0, 1266);
    var string1 = struct_getparam(int0, 1273);
    var int1 = struct_getparam(int0, 1271);
    var int2 = -1 as quest;
    if ((struct_getparam(int0, 1345) > 0)) {
        int2 = enum_getvalue(0, 3, 2252 as cs2enum, struct_getparam(int0, 1345));
        string0 = script2103(int2);
        string1 = quest_getparam(int2, 5968);
    };
    switch (MAP_LANG()) {
        case 1: {
            if ((struct_getparam(int0, 4450) != -1 as graphic)) {
                int1 = struct_getparam(int0, 4450);
            };
            break;
        }
        case 2: {
            if ((struct_getparam(int0, 4451) != -1 as graphic)) {
                int1 = struct_getparam(int0, 4451);
            };
            break;
        }
        case 3: {
            if ((struct_getparam(int0, 4452) != -1 as graphic)) {
                int1 = struct_getparam(int0, 4452);
            };
            break;
        }
        case 6: {
            if ((struct_getparam(int0, 4453) != -1 as graphic)) {
                int1 = struct_getparam(int0, 4453);
            };
            break;
        }
    };
    if (((script12477() <= 5219) && (script12477() >= 5179))) {
        string0 = "Meg's Investigation Services";
        int1 = 27322 as graphic;
        string1 = "Help Meg to investigate a series of thefts, missing items, people and more!";
    };
    return [string0, string1, int1];
}