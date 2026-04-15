//
function script16398(): void {
    var int0 = 0;
    var int1 = IF_GETNEXTSUBID(comp(955, 1));
    while ((int0 < int1)) {
        if ((CC_FIND(comp(955, 1), int0) == 1)) {
            if ((int0 == varplayer_8747)) {
                script7872(true, 1, true, true);
            } else {
                script7872(true, 1, true, false);
            };
        };
        int0 = (int0 + 1);
    };
    var int2 = true;
    var int3 = true;
    if ((script16385() == varplayer_8747)) {
        int2 = false;
    } else if ((script16386() == varplayer_8747)) {
        int3 = false;
    };
    script7871(comp(955, 29), int2, 1, false, false);
    script7871(comp(955, 3), int3, 1, false, false);
    script16399(62586910, int2, 9403, 9407);
    script16399(62586884, int3, 9403, 9407);
    return;
}