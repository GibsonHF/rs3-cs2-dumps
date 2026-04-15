//
function script11521(int0: int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = script13749();
    while ((int2 < 4)) {
        int3 = 0;
        while ((int3 < 4)) {
            CC_CREATE(comp(1627, 36), 3, int1);
            CC_SETPOSITION((int2 * 16), ((3 - int3) * 16), 0, 0);
            CC_SETSIZE(16, 16, 0, 0);
            CC_SETOP(1, "Select");
            CC_SETFILL(1);
            int4 = script11527(0, ((int2 * 4) + int3));
            CC_SETCOLOUR(HSVTORGB((int4 + (2048 * int0))));
            if ((int5 == false)) {
                CC_SETONMOUSEREPEAT(callback(script11526, -2147483643));
                CC_SETONVARTRANSMIT(callback(script11522, -2147483645, -2147483643, int4, 5455, 1));
            } else {
                CC_SETONCLICK(callback(script11526, -2147483643));
            };
            int1 = (int1 + 1);
            int3 = (int3 + 1);
        };
        int2 = (int2 + 1);
    };
    return;
}