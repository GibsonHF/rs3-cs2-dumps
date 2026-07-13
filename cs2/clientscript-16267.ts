//
function script16267(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): number {
    if ((script16270(int0, int1) == 0)) {
        return int2;
    };
    var int6 = script12098(int0, int1);
    if (((int6 <= int3) || (int6 > int4))) {
        return int2;
    };
    var int7 = script12097(int0, int1);
    var int8 = script14715(int0, int1);
    var string0 = script12095(int0, int1);
    var int9 = script2553(int0, int1);
    if ((((((int8 != -1 as obj) && (item_getparam(int8, 2640) > 0)) && (item_getparam(int8, 2640) != 62)) && (item_getparam(int8, 2641) == 0)) && ((item_getparam(int8, 2640) == int7) || (int7 == -1)))) {
        int6 = item_getparam(int8, 2645);
        string0 = OC_NAME(int8);
        if ((((((item_getparam(int8, 2639) == true) || (OC_MEMBERS(item_getparam(int8, 2655)) == 1)) || (OC_MEMBERS(item_getparam(int8, 2656)) == 1)) || (OC_MEMBERS(item_getparam(int8, 2650)) == 1)) || (OC_MEMBERS(int8) == 1))) {
            int9 = 1;
        };
    };
    var int10 = 27185;
    var int11 = 27186;
    var int12 = 27187;
    if ((int9 == 0)) {
        int10 = 27166;
        int11 = 27167;
        int12 = 27168;
    };
    CC_CREATE(comp(1216, 6), 4, IF_GETNEXTSUBID(comp(1216, 6)));
    CC_SETPOSITION(0, 25, 1, 2);
    var int13 = (STRINGWIDTH(string0, 23 as fontmetrics) + STRINGWIDTH("New", 23 as fontmetrics));
    CC_SETSIZE(0, 33, 1, 0);
    CC_SETONTIMER(callback(script3368, -2147483643, string0, (CLIENTCLOCK() + (int2 * int5))));
    var int14 = CC_GETX();
    CC_CREATE(79691782, 5, IF_GETNEXTSUBID(79691782));
    CC_SETPOSITION(0, 24, 1, 2);
    CC_SETSIZE(int13, 33, 0, 0);
    CC_SETTILING(1);
    CC_SETONTIMER(callback(script4226, -2147483643, int11, (CLIENTCLOCK() + (int2 * int5))));
    CC_SENDTOBACK();
    int14 = CC_GETX();
    int13 = CC_GETWIDTH();
    CC_CREATE(79691782, 5, IF_GETNEXTSUBID(79691782));
    CC_SETPOSITION((int14 - 50), 24, 0, 2);
    CC_SETSIZE(50, 33, 0, 0);
    CC_SETONTIMER(callback(script4226, -2147483643, int10, (CLIENTCLOCK() + (int2 * int5))));
    CC_SENDTOBACK();
    CC_CREATE(79691782, 5, IF_GETNEXTSUBID(79691782));
    CC_SETPOSITION((int14 + int13), 24, 0, 2);
    CC_SETSIZE(50, 33, 0, 0);
    CC_SETONTIMER(callback(script4226, -2147483643, int12, (CLIENTCLOCK() + (int2 * int5))));
    CC_SENDTOBACK();
    CC_CREATE(79691777, 6, IF_GETNEXTSUBID(79691777));
    CC_SETMODEL(32144);
    CC_SETSIZE(32, 32, 0, 0);
    CC_SETMODELANIM(15754);
    CC_SETMODELANGLE(0, 0, 512, 0, 0, (1500 + RANDOM(1000)));
    int13 = ((STRINGWIDTH(string0, 23) / 2) + 20);
    if ((RANDOM(2) == 0)) {
        CC_SETPOSITION(int13, 120, 1, 0);
    } else {
        CC_SETPOSITION((int13 * -1), 120, 1, 0);
    };
    CC_SETONTIMER(callback(script3369, -2147483643, (CLIENTCLOCK() + (int2 * int5)), 0));
    return (int2 + 1);
}