//
function script1446(int0: component, int1: int): void {
    var string0 = "";
    var int2 = -1 as struct;
    switch (int0) {
        case 44302345: {
            if ((varbitplayer_22201 == 0)) {
                string0 = "You do not have a passive ability set.";
            } else {
                int2 = enum_getvalue(0, 73, 8677 as cs2enum, varbitplayer_22201);
            };
            break;
        }
        case 44302350: {
            if ((varbitplayer_22202 == 0)) {
                string0 = "You do not have an ability set in slot 1.";
            } else {
                int2 = enum_getvalue(0, 73, 8677 as cs2enum, varbitplayer_22202);
            };
            break;
        }
        case 44302359: {
            if ((varbitplayer_22203 == 0)) {
                string0 = "You do not have an ability set in slot 2.";
            } else {
                int2 = enum_getvalue(0, 73, 8677 as cs2enum, varbitplayer_22203);
            };
            break;
        }
    };
    if ((int2 != -1 as struct)) {
        string0 = struct_getparam(int2, 4207);
    };
    script8800(string0, int0, int1);
    return;
}