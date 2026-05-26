//
function script16398(): void {
    var int0 = 0;
    var int1 = IF_GETNEXTSUBID(62586881);
    while ((int0 < int1)) {
        if ((CC_FIND(62586881, int0) == 1)) {
            if ((int0 == varplayer_8747)) {
                script7872(1, 1, 1, 1);
            } else {
                script7872(1, 1, 1, 0);
            };
        };
        int0 = (int0 + 1);
    };
    var int2 = 1;
    var int3 = 1;
    if ((script16385() == varplayer_8747)) {
        int2 = 0;
    } else if ((script16386() == varplayer_8747)) {
        int3 = 0;
    };
    script7871(62586909, int2, 1, 0, 0);
    script7871(62586883, int3, 1, 0, 0);
    script16399(62586910, int2, 9403, 9407);
    script16399(62586884, int3, 9403, 9407);
    return;
}