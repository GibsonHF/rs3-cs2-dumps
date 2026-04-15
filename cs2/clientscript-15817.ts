//
function script15817(): void {
    var int0 = comp(854, 5);
    var int1 = 10;
    CC_DELETEALL(int0);
    script15083(int0, int1, 14, 255, 430, "Select", 0, 0, 12934 as graphic, "Membership", "", "", 71 as struct, -1 as struct, -1, -1, -1, 0);
    int1 = (int1 + (255 + 9));
    if ((script15513() != 52664 as struct)) {
        script15083(int0, int1, 14, 255, 430, "Select", 0, 1, 12957 as graphic, "Keys", "", "", 71 as struct, -1 as struct, -1, -1, -1, 0);
        int1 = (int1 + (255 + 9));
    };
    script15083(int0, int1, 14, 255, 430, "Select", 0, 2, 14063 as graphic, "Bonds", "", "", 71 as struct, -1 as struct, -1, -1, -1, 0);
    int1 = (int1 + (255 + 9));
    script15083(int0, int1, 14, 255, 430, "Select", 0, 3, 12927 as graphic, "Runecoins", "", "", 71 as struct, -1 as struct, -1, -1, -1, 0);
    return;
}