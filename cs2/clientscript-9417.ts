//
function script9417(int0: component, int1: unknown_int, int2: unknown_int, int3: int, int4: int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: struct): void {
    var string0 = "";
    if ((varplayer_3980 < int3)) {
        string0 = "You cannot afford this reward.<br>";
    };
    if (((varbitplayer_21034 - 1) < int4)) {
        string0 = strconcat(string0, "You need a higher-level faction token to purchase this reward.<br>");
    };
    if (((int5 == 0) && (INV_FREESPACE(93 as inv) == 0))) {
        string0 = strconcat(string0, "You do not have space in your inventory for this reward.<br>");
    };
    if ((int7 == 1)) {
        if ((int6 == 1)) {
            if ((script9414(int8) == 1)) {
                string0 = "You already have this reward in your inventory, bank or house.";
            };
        } else {
            switch (int8) {
                case 25079:
                case 25080:
                case 25081:
                case 25082: {
                    string0 = "You must use or destroy the lamp you own before purchasing another.";
                    break;
                }
                default: {
                    string0 = "You have already purchased this reward.";
                    break;
                }
            };
        };
    };
    script8800(string0, int0, -1);
    return;
}