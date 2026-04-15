//
function script3045(): void {
    var int0 = comp(909, 47);
    var int1 = CHAT_GETFILTER_PRIVATE();
    var int2 = 0;
    var int3 = 2;
    while ((int2 < 3)) {
        if ((CC_FIND(int0, (int2 * int3)) == 1)) {
            if ((int1 == int2)) {
                CC_SETGRAPHIC(18525 as graphic);
                CC_SETOP(1, "");
                CC_SETONOP(callback());
                CC_SETONCLICK(callback());
            } else {
                CC_SETGRAPHIC(18526 as graphic);
                CC_SETOP(1, "Select");
                CC_SETONOP(callback(script3046, (int2 + 2)));
                CC_SETONCLICK(callback(script10036));
            };
        };
        int2 = (int2 + 1);
    };
    return;
}