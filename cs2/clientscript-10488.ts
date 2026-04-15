//
function script10488(int0: unknown_int, int1: unknown_int, string0: string): void {
    unk11045[1]();
    var int2 = -1;
    switch (int0) {
        case 3:
        case 7: {
            int2 = FRIEND_GETSLOTFROMNAME(string0);
            if ((int2 != -1)) {
                unk11044[1](int2);
            };
            break;
        }
        case 41: {
            if ((unk10993(int1) == 1)) {
                int2 = ACTIVECLANCHANNEL_GETUSERSLOT(string0);
                if ((int2 != -1)) {
                    CC_SETLINKACTIVECLANCHANNEL[1](int2);
                };
            };
            break;
        }
        case 44: {
            if ((ACTIVECLANCHANNEL_FIND_LISTENED() == 1)) {
                int2 = ACTIVECLANCHANNEL_GETUSERSLOT(string0);
                if ((int2 != -1)) {
                    CC_SETLINKACTIVECLANCHANNEL[1](int2);
                };
            };
            break;
        }
        case 24:
        case 22: {
            if ((PLAYER_GROUP_FIND() == 1)) {
                int2 = script10276(string0);
                if ((int2 != -1)) {
                    CC_SETLINKPLAYERGROUP[1](int2, 1);
                };
            };
            break;
        }
    };
    return;
}