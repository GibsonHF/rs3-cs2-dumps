//
function script967(int0: struct, int1: unknown_int, int2: unknown_int, int3: unknown_int): [string, string, string, int, int] {
    var string0 = struct_getparam(int0, 2794);
    var string1 = struct_getparam(int0, 2795);
    var string2 = "";
    var int4 = struct_getparam(int0, 2809);
    var int5 = 0;
    switch (struct_getparam(int0, 2799)) {
        case 0: {
            string2 = "Basic Attack<br>";
            [string0, string1] = script17696(int0);
            break;
        }
        case 1: {
            string2 = script3108(int0);
            break;
        }
        case 3: {
            string2 = "Threshold Ability<br>";
            int5 = 500;
            break;
        }
        case 4: {
            string2 = "Ultimate Ability<br>";
            int5 = script2936(int0);
            break;
        }
        case 2: {
            string2 = "Enhanced Ability<br>";
            if (((struct_getparam(int0, 2806) == 29) && (struct_getparam(int0, 5542) != 11))) {
                string2 = "Incantation<br>";
            };
            int5 = script17445(int0);
            break;
        }
        case 5: {
            string2 = "Special Ability<br>";
            int4 = 1;
            if ((int0 == 11748 as struct)) {
                if ((((OC_CATEGORY(INV_GETOBJ(94 as inv, 2)) == 4700 as category) && (OC_HASVAROBJ(INV_GETOBJ(94 as inv, 2)) == 1)) && (INV_GETVAR(94 as inv, 2, 47702) > 0))) {
                    [string0, string1, int5] = script15096(94 as inv, 2);
                };
            } else {
                [string0, string1, int5] = script959();
            };
            break;
        }
        case 6: {
            string2 = "Passive<br>";
            break;
        }
        case 7: {
            string2 = "Utility Ability<br>";
            break;
        }
    };
    string1 = script3111(int0, string1, int2, int3);
    if ((((int1 == 1) && (script690(int0) != 0)) && (script690(int0) != 3))) {
        string1 = strconcat(string1, script767(int0));
    };
    return [string0, string1, string2, int4, int5];
}