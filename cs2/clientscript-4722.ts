//
function script4722(int0: int, int1: int): [unknown_int, string] {
    var string0 = "";
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = -1 as cs2enum;
    var int28 = -1 as struct;
    if ((CLANPROFILE_FIND() == 1)) {
        int2 = varbitclan_6507;
        int3 = varbitclan_6508;
        int4 = varbitclan_6509;
        int22 = 4;
        while ((int22 <= 15)) {
            int24 = script4949(int22);
            int23 = script4959(int22);
            switch (int24) {
                case 1: {
                    int5 = int23;
                    break;
                }
                case 2: {
                    int6 = int23;
                    break;
                }
                case 3: {
                    int8 = int23;
                    break;
                }
                case 4: {
                    int7 = int23;
                    break;
                }
                case 5: {
                    int10 = int23;
                    break;
                }
                case 6: {
                    int9 = int23;
                    break;
                }
                case 7: {
                    int11 = int23;
                    break;
                }
            };
            int22 = (int22 + 1);
        };
        int27 = enum_getvalue(0, 26, 4012 as cs2enum, int0);
        int28 = enum_getvalue(0, 73, int27, int1);
        int12 = struct_getparam(int28, 1532);
        int13 = struct_getparam(int28, 1533);
        int14 = struct_getparam(int28, 1534);
        int15 = struct_getparam(int28, 1535);
        int16 = struct_getparam(int28, 1536);
        int17 = struct_getparam(int28, 1538);
        int18 = struct_getparam(int28, 1537);
        int19 = struct_getparam(int28, 1540);
        int20 = struct_getparam(int28, 1539);
        int21 = struct_getparam(int28, 1541);
        int25 = (int12 - int2);
        if ((int25 > 1)) {
            string0 = strconcat(string0, `Your citadel is ${inttostring(int25, 10)} tiers too low. `);
            int26 = 1;
        } else if ((int25 == 1)) {
            string0 = strconcat(string0, "Your citadel is one tier too low. ");
            int26 = 1;
        };
        int25 = (int13 - int3);
        if ((int25 > 1)) {
            string0 = strconcat(string0, `Your warehouse is ${inttostring(int25, 10)} tiers too low. `);
            int26 = 1;
        } else if ((int25 == 1)) {
            string0 = strconcat(string0, "Your warehouse is one tier too low. ");
            int26 = 1;
        };
        int25 = (int14 - int4);
        if ((int25 > 1)) {
            string0 = strconcat(string0, `Your battlefield is ${inttostring(int25, 10)} tiers too low. `);
            int26 = 1;
        } else if ((int25 == 1)) {
            string0 = strconcat(string0, "Your battlefield is one tier too low. ");
            int26 = 1;
        };
        int25 = (int15 - int5);
        if ((int25 > 1)) {
            string0 = strconcat(string0, `Your Woodcutting plot is ${inttostring(int25, 10)} tiers too low. `);
            int26 = 1;
        } else if ((int25 == 1)) {
            string0 = strconcat(string0, "Your Woodcutting plot is one tier too low. ");
            int26 = 1;
        };
        int25 = (int16 - int6);
        if ((int25 > 1)) {
            string0 = strconcat(string0, `Your Mining plot is ${inttostring(int25, 10)} tiers too low. `);
            int26 = 1;
        } else if ((int25 == 1)) {
            string0 = strconcat(string0, "Your Mining plot is one tier too low. ");
            int26 = 1;
        };
        int25 = (int18 - int8);
        if ((int25 > 1)) {
            string0 = strconcat(string0, `Your Firemaking plot is ${inttostring(int25, 10)} tiers too low. `);
            int26 = 1;
        } else if ((int25 == 1)) {
            string0 = strconcat(string0, "Your Firemaking plot is one tier too low. ");
            int26 = 1;
        };
        int25 = (int17 - int7);
        if ((int25 > 1)) {
            string0 = strconcat(string0, `Your Smithing plot is ${inttostring(int25, 10)} tiers too low. `);
            int26 = 1;
        } else if ((int25 == 1)) {
            string0 = strconcat(string0, "Your Smithing plot is one tier too low. ");
            int26 = 1;
        };
        int25 = (int20 - int10);
        if ((int25 > 1)) {
            string0 = strconcat(string0, `Your Crafting plot is ${inttostring(int25, 10)} tiers too low. `);
            int26 = 1;
        } else if ((int25 == 1)) {
            string0 = strconcat(string0, "Your Crafting plot is one tier too low. ");
            int26 = 1;
        };
        int25 = (int19 - int9);
        if ((int25 > 1)) {
            string0 = strconcat(string0, `Your Cooking plot is ${inttostring(int25, 10)} tiers too low. `);
            int26 = 1;
        } else if ((int25 == 1)) {
            string0 = strconcat(string0, "Your Cooking plot is one tier too low. ");
            int26 = 1;
        };
        int25 = (int21 - int11);
        if ((int25 > 1)) {
            string0 = strconcat(string0, `Your Summoning plot is ${inttostring(int25, 10)} tiers too low. `);
            int26 = 1;
        } else if ((int25 == 1)) {
            string0 = strconcat(string0, "Your Summoning plot is one tier too low. ");
            int26 = 1;
        };
        if ((int26 == 0)) {
            return [1, string0];
        };
    };
    return [0, string0];
}