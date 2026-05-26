//
function script13489(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 30866 as graphic;
    var int5 = 30865 as graphic;
    if ((varbitplayer_35973 == int2)) {
        int4 = 31186 as graphic;
        int5 = 31185 as graphic;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int3 == 1)) {
            CC_SETGRAPHIC(int4);
        } else {
            CC_SETGRAPHIC(int5);
        };
    };
    return;
}