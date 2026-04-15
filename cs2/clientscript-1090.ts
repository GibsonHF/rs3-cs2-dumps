//[proc,quickchat_friend_status]
function script1090(string0: string): unknown_int {
    var int0 = FRIEND_GETSLOTFROMNAME(string0);
    if ((int0 == -1)) {
        return -1;
    };
    if ((FRIEND_GETWORLD(int0) == 0)) {
        return 0;
    };
    switch (FRIEND_PLATFORM(int0)) {
        case 0:
        case 4: {
            return 1;
        }
    };
    return 2;
}