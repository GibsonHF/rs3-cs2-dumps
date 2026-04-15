//
function script11532(int0: struct, int1: struct, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: int): [string, string, string, unknown_int, unknown_int, int, unknown_int] {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 1;
    var int10 = 0;
    switch (int4) {
        case 6: {
            int6 = script327(int1);
            if ((int6 > 0)) {
                string2 = `${inttostring(int6, 10)}% off!`;
            } else {
                string2 = struct_getparam(int1, 6615);
            };
            if ((int2 != 1)) {
                string0 = string2;
            };
            string1 = struct_getparam(int1, 7402);
            break;
        }
        case 8: {
            string2 = "New!";
            if ((int2 != 1)) {
                string1 = string2;
            };
            break;
        }
    };
    switch (int3) {
        case 1: {
            string0 = struct_getparam(int1, 5093);
            string1 = struct_getparam(int1, 5204);
            break;
        }
        case 2: {
            string0 = struct_getparam(int1, 5092);
            string1 = struct_getparam(int1, 4859);
            int7 = 1;
            break;
        }
        case 3: {
            string1 = "You cannot afford this item.";
            if ((STRING_LENGTH(struct_getparam(int1, 7141)) != 0)) {
                string1 = `${string1} ${struct_getparam(int1, 7141)}`;
            };
            int7 = 1;
            if ((int2 == 1)) {
                int9 = 0;
                int10 = 1;
            };
            break;
        }
        case 4: {
            string1 = "You must be on a members' world to purchase this item.";
            int7 = 1;
            break;
        }
        case 5: {
            string1 = "You cannot claim this item.";
            if ((STRING_LENGTH(struct_getparam(int1, 7141)) != 0)) {
                string1 = `${string1} ${struct_getparam(int1, 7141)}`;
            };
            int7 = 1;
            break;
        }
        case 7: {
            string1 = "You cannot unlock this upgrade.";
            if ((STRING_LENGTH(struct_getparam(int1, 7141)) != 0)) {
                string1 = `${string1} ${struct_getparam(int1, 7141)}`;
            };
            int7 = 1;
            break;
        }
        case 0: {
            int9 = 0;
            break;
        }
        default: {
            string1 = "This has already been purchased.";
            break;
        }
    };
    if ((STRING_LENGTH(string0) == 0)) {
        switch (int2) {
            case 0: {
                string0 = struct_getparam(int1, 5091);
                if ((struct_getparam(int0, 9050) == 1)) {
                    string0 = struct_getparam(int0, 9051);
                };
                break;
            }
            case 1: {
                int8 = script9095(int1, script13501(int1));
                if (((PLAYERMEMBER() == false) && (struct_getparam(int1, 5147) > 0))) {
                    int8 = struct_getparam(int1, 5147);
                };
                if ((int8 == 0)) {
                    string0 = "FREE!";
                } else {
                    string0 = TOSTRING_LOCALISED(int8, 1);
                };
                break;
            }
        };
    };
    return [string0, string1, string2, int9, int10, int6, int7];
}