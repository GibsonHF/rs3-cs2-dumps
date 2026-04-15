//
function script18156(int0: int, int1: int): [unknown_int, unknown_string] {
    if ((script12869(47781 as struct) < enum_getvalue(0, 0, 6152 as cs2enum, int1))) {
        return [0, "You are not yet eligible to claim this reward."];
    };
    if ((script18141(int0, int1) == 1)) {
        return [0, "You have already claimed this reward."];
    };
    switch (script18149(int0)) {
        case 2: {
            if ((PLAYERMEMBER() == false)) {
                return [0, "You must log into a members' world to claim this reward."];
            };
            break;
        }
    };
    if ((varbitplayer_52723 == 1)) {
        return [1, "Collect this progress reward."];
    };
    return [1, "Collect this weekly progress reward."];
}