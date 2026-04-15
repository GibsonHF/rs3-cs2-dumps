//
function script8896(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = 199695;
    var int2 = 863806;
    var int3 = 4155768;
    if ((varbitplayer_22875 == 1)) {
        int1 = 3682602;
        int2 = 4273706;
        int3 = 1120799;
    } else if ((varbitplayer_22875 == 0)) {
        int1 = 2367774;
        int2 = 2367774;
        int3 = 1776411;
    };
    CC_CREATE(int0, 3, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETCOLOUR(int1);
    CC_SETFILL(1);
    CC_SETTRANS(10);
    CC_CREATE(int0, 5, 1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETGRAPHIC(2749 as graphic);
    CC_SETCOLOUR(int2);
    CC_SETTRANS(0);
    CC_CREATE(int0, 5, 2);
    CC_SETSIZE(0, 3, 1, 0);
    CC_SETGRAPHIC(2749 as graphic);
    CC_SETCOLOUR(int3);
    return;
}