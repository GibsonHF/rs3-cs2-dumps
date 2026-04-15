//
function script18085(int0: dbrow, int1: component, int2: int): int {
    var int3 = script17903(varplayer_11357);
    var int4 = script17905(varplayer_11357);
    var int5 = dbrow_getfield(int0, 1019984, 0);
    var int6 = dbrow_getfield(int0, 1019969, 0);
    var int7 = 0;
    if ((IF_FIND(int1) == 1)) {
        if (((int3 >= int5) && (int0 == int4))) {
            CC_CREATECHILD(0, int7, 5);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETPOSITION(0, 0, 0, 0);
            script10485(5, int7, 10, int2, 0, 0, 0, 30, 1, 0, 7982 as dbrow, "Mission Completed");
            int7 = (int7 + 1);
            var int2 = (int2 + 30);
            script7858(5, varplayer_11357, 10, int2, 0, 0, 120, 30, 0, 0, script17989(22), "Claim");
            script17954("Complete Mission", 0);
            script7872(true, 1, false, false);
            CC_SETOP(1, "Complete Mission");
            CC_SETONOP(callback(script18086));
            int2 = (int2 + 40);
        } else {
            CC_CREATECHILD(0, int7, 5);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETPOSITION(0, 0, 0, 0);
        };
    } else {
        script12478("Cannot find parent layer when trying to populate BP3 missions info panel.");
    };
    return int2;
}