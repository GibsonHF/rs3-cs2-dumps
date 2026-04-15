//
function script5855(int0: component): void {
    var int1 = -1;
    switch (int0) {
        case 68354204: {
            int1 = varbitplayer_22201;
            break;
        }
        case 68354208: {
            int1 = varbitplayer_22202;
            break;
        }
        case 68354212: {
            int1 = varbitplayer_22203;
            break;
        }
    };
    if ((int1 == -1)) {
        return;
    };
    var int2 = enum_getvalue(0, 73, 8677 as cs2enum, int1);
    if ((int2 == -1 as struct)) {
        script8800("No ability active - drag an icon from the list on to this slot to use within the game.", int0, -1);
    } else {
        script8800(strconcat(strconcat(struct_getparam(int2, 4206), "<br>"), struct_getparam(int2, 4207)), int0, -1);
    };
    return;
}