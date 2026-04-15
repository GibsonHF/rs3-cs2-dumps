//
function script3367(int0: int, int1: int, string0: string): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = -1;
    CC_CREATE(comp(1216, 6), 4, IF_GETNEXTSUBID(comp(1216, 6)));
    CC_SETPOSITION(0, 25, 1, 2);
    CC_SETSIZE(0, 33, 1, 0);
    int3 = (STRINGWIDTH(string0, 23 as fontmetrics) + STRINGWIDTH("New", 23 as fontmetrics));
    CC_SETONTIMER(callback(script3368, -2147483643, string0, (CLIENTCLOCK() + (int0 * int1))));
    int2 = CC_GETX();
    CC_CREATE(79691782, 5, IF_GETNEXTSUBID(79691782));
    CC_SETPOSITION(0, 24, 1, 2);
    CC_SETSIZE(int3, 33, 0, 0);
    CC_SETTILING(1);
    int4 = 27167;
    CC_SETONTIMER(callback(script4226, -2147483643, int4, (CLIENTCLOCK() + (int0 * int1))));
    CC_SENDTOBACK();
    int2 = CC_GETX();
    int3 = CC_GETWIDTH();
    CC_CREATE(79691782, 5, IF_GETNEXTSUBID(79691782));
    CC_SETPOSITION((int2 - 50), 24, 0, 2);
    CC_SETSIZE(50, 33, 0, 0);
    int4 = 27166;
    CC_SETONTIMER(callback(script4226, -2147483643, int4, (CLIENTCLOCK() + (int0 * int1))));
    CC_SENDTOBACK();
    CC_CREATE(79691782, 5, IF_GETNEXTSUBID(79691782));
    CC_SETPOSITION((int2 + int3), 24, 0, 2);
    CC_SETSIZE(50, 33, 0, 0);
    int4 = 27168;
    CC_SETONTIMER(callback(script4226, -2147483643, int4, (CLIENTCLOCK() + (int0 * int1))));
    CC_SENDTOBACK();
    return;
}