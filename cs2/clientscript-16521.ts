//
function script16521(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    stack(21231);
    stack(82116613);
    IF_SETGRAPHIC();
    IF_SETSIZE(0, 0, 1, 1, 82116613);
    CC_DELETEALL(82116611);
    int1 = int0++;
    int2 = 0;
    script15938(82116611, int1, int2++, 0, -105, 1, 1, 0, 37, 1, 0);
    CC_SETSCROLLSIZE((2 * IF_GETWIDTH(82116611)), 0);
    CC_SETSCROLLPOS((CC_GETSCROLLWIDTH() / 4), 0);
    CC_SETONTIMER(callback(script16522, int1, 6));
    script7919(int1, int2++, 0, 0, 0, 1, (2 * IF_GETWIDTH(82116611)), 0, 0, 1, 18631, 1, 0, 1, 32);
    int1 = int0++;
    int2 = 0;
    script15938(82116611, int1, int2++, 0, -105, 1, 1, 0, 37, 1, 0);
    CC_SETSCROLLSIZE((2 * IF_GETWIDTH(82116611)), 0);
    CC_SETSCROLLPOS(CC_GETSCROLLWIDTH(), 0);
    CC_SETONTIMER(callback(script16522, int1, 4));
    script7919(int1, int2++, 0, 0, 0, 1, (2 * IF_GETWIDTH(82116611)), 0, 0, 1, 18632, 0, 0, 1, 0);
    int1 = int0++;
    int2 = 0;
    script15938(82116611, int1, int2++, 0, -45, 1, 1, 800, 600, 0, 0);
    CC_SENDTOFRONT();
    script7919(int1, int2++, 0, 0, 0, 1, 0, 0, 1, 1, 34947, 0, 0, 0, 0);
    return;
}