//[clientscript,interface_flash_slot]
function script143(int0: component, int1: int, int2: int, int3: int): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    if ((IF_GETSCROLLWIDTH(int0) > 0)) {
        int6 = ((IF_GETSCROLLWIDTH(int0) - (36 * int1)) / (int1 - 1));
    } else {
        int6 = ((IF_GETWIDTH(int0) - (36 * int1)) / (int1 - 1));
    };
    if ((IF_GETSCROLLHEIGHT(int0) > 0)) {
        int7 = ((IF_GETSCROLLHEIGHT(int0) - (32 * int2)) / (int2 - 1));
    } else {
        int7 = ((IF_GETHEIGHT(int0) - (32 * int2)) / (int2 - 1));
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETGRAPHIC(937 as graphic);
    CC_SETSIZE(10, 32, 0, 0);
    CC_SETPOSITION((((36 + int6) * MODULO(int3, int1)) + 13), ((int3 / int1) * (32 + int7)), 0, 0);
    CC_SETHIDE(false);
    CC_SETONTIMER(callback(script144, int0, -2147483643, CLIENTCLOCK(), (CLIENTCLOCK() + 750)));
    return;
}