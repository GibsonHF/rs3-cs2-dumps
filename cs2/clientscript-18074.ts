//
function script18074(int0: int): void {
    var int1 = comp(1226, 30);
    var int2 = script17905(int0);
    var int3 = script17903(int0);
    var int4 = script17902(int0);
    varplayer_11357 = int0;
    if ((int2 == -1 as dbrow)) {
        script12478(`No cached mission found at slot ${inttostring(int0, 10)}`);
        script18076();
        return;
    };
    var int5 = 1;
    var int6 = 0;
    if ((IF_FIND(int1) == 1)) {
        script18077();
        int6 = script18080(int2, int2, int6, 0);
        int6 = script18079(int2, int1, int6);
        script18075(int6, int1);
    };
    return;
}