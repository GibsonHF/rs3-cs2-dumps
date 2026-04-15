//
function script7478(int0: int, int1: struct, int2: unknown_int): int {
    var string0 = "<col=ff0000>";
    var string1 = "";
    var int3 = INV_GETOBJ(94 as inv, 3);
    var int4 = INV_GETOBJ(94 as inv, 5);
    var string2 = "";
    var int5 = -1 as graphic;
    var int6 = struct_getparam(int1, 2806);
    var string3 = "";
    if ((struct_getparam(int1, 2811) == 1)) {
        if (((((item_getparam(int3, 2826) == 1) && (item_getparam(int4, 2826) == 1)) && (int6 == 3)) || ((((item_getparam(int3, 2827) == 1) && (item_getparam(int4, 2827) == 1)) && (int6 == 4)) || ((((item_getparam(int3, 8898) == 1) && (item_getparam(int4, 8898) == 1)) && (int6 == 29)) || (((((item_getparam(int3, 2825) == 1) && (item_getparam(int4, 2825) == 1)) && (int6 != 3)) && (int6 != 4)) && (int6 != 29)))))) {
            string0 = "<col=00ff00>";
        };
        string2 = `${string0}2x</col>`;
        switch (int6) {
            case 3: {
                int5 = 14906 as graphic;
                string3 = "Requires dual-wielded ranged weapons.";
                break;
            }
            case 4: {
                int5 = 14925 as graphic;
                string3 = "Requires dual-wielded magic weapons.";
                break;
            }
            case 29: {
                int5 = 24577 as graphic;
                string3 = "Requires dual-wielded necromancy weapons.";
                break;
            }
            default: {
                int5 = 14904 as graphic;
                switch (int1) {
                    case 1488: {
                        string3 = "Requires dual-wielded melee weapons or skilling tools.";
                        if ((script6688(int1) == 1)) {
                            string0 = "<col=00ff00>";
                        };
                        string2 = `${string0}2x*</col>`;
                        break;
                    }
                    default: {
                        string3 = "Requires dual-wielded melee weapons.";
                        break;
                    }
                };
                break;
            }
        };
    } else if ((struct_getparam(int1, 2812) == 1)) {
        if ((((OC_WEARPOS(int3) > 0) && (OC_WEARPOS2(int3) > 0)) && (((int6 == 3) && (item_getparam(int3, 2826) == 1)) || (((int6 == 4) && (item_getparam(int3, 2827) == 1)) || (((int6 == 29) && (item_getparam(int3, 8898) == 1)) || ((((int6 != 3) && (int6 != 4)) && (int6 != 29)) && (item_getparam(int3, 2825) == 1))))))) {
            string0 = "<col=00ff00>";
        };
        string2 = `${string0}2h</col>`;
        switch (int6) {
            case 3: {
                int5 = 14905 as graphic;
                string3 = "Requires a two-handed ranged weapon.";
                break;
            }
            case 4: {
                int5 = 14924 as graphic;
                string3 = "Requires a two-handed magic weapon.";
                break;
            }
            case 29: {
                int5 = 19291 as graphic;
                string3 = "Requires a two-handed necromancy weapon.";
                break;
            }
            default: {
                int5 = 14903 as graphic;
                string3 = "Requires a two-handed melee weapon.";
                break;
            }
        };
    } else if ((struct_getparam(int1, 2813) == 1)) {
        switch (script17448()) {
            case 1:
            case 2: {
                string0 = "<col=00ff00>";
                break;
            }
            case 3: {
                if ((struct_getparam(int1, 8888) == 0)) {
                    string0 = "<col=00ff00>";
                };
                break;
            }
        };
        string2 = `${string0}Shield</col>`;
        int5 = 14902 as graphic;
        string3 = "Requires a shield or a defender.";
    } else if ((struct_getparam(int1, 5195) == 1)) {
        if (((int3 != -1 as obj) && ((((item_getparam(int3, 2826) + item_getparam(int3, 2825)) + item_getparam(int3, 2827)) + item_getparam(int3, 8898)) > 0))) {
            string0 = "<col=00ff00>";
        };
        string2 = `${string0}Weapon</col>`;
        int5 = 19290 as graphic;
        string3 = "Requires a weapon.";
    } else {
        return int0;
    };
    return script7482(string2, int5, -1 as obj, string3, script7484(int0, int2));
}