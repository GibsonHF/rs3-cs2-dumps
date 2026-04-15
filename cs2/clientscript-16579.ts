//
function script16579(int0: struct, int1: int): string {
    switch (varbitplayer_51273) {
        case 0: {
            if ((struct_getparam(int0, 8972) == 0)) {
                return "";
            };
            if ((script3921(int1) <= 0)) {
                return "";
            };
            break;
        }
        case 2: {
            if ((varplayer_5148 == -1 as struct)) {
                return "";
            };
            if ((struct_getparam(varplayer_5148, 9330) == false)) {
                return "";
            };
            if ((struct_getparam(int0, 5147) < 0)) {
                return "";
            };
            break;
        }
    };
    if ((PLAYERMEMBER() == true)) {
        return "As you're a member, this item is 10% cheaper for you! We've already added that discount to the price.";
    };
    return "If you were a member, this item would be 10% cheaper for you!";
}