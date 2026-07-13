//
function script20724(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string, string1: string, string2: string): number {
    if ((script6431() == 1)) {
        if ((STRING_LENGTH(string2) > 0)) {
            var string1 = string2;
        };
        script7857(109117444, int1, 0, 0, int0, 1, 0, 20, 32, 1, 0, int2, string1);
        CC_SETOP(1, string1);
        CC_SETONOP(callback(script20725, -2147483643));
        return (int0 + 40);
    };
    var int5 = 0;
    script15938(109117444, int1, int5++, 0, int0, 0, 0, 0, 32, 1, 0);
    CC_SETOP(1, string1);
    CC_SETONOP(callback(script20725, -2147483643));
    if ((STRING_LENGTH(string0) > 0)) {
        script15937(int1, int5++, 0, 0, 0, 0, int4, 32, 0, 0);
        script7918(int1, int5++, 0, 0, 1, 1, 0, 0, 1, 1, 2271);
        script20481(int1, int5++, 0, -2, 1, 0, 0, 0, 1, 1, 17471, string0, 0, 1, 1);
        CC_SETTEXTFONT(56 as fontmetrics);
        CC_GETDYNAMICLAYER();
        CC_GETDYNAMICLAYER();
        script10485(int1, int5++, 0, 0, 2, 0, (int4 + 4), 0, 1, 1, 2100, string1);
        script6711(3, 21);
        return (int0 + 36);
    };
    var int6 = 21;
    var int7 = 30;
    if ((int3 == 18908)) {
        int6 = 31;
        int7 = 48;
    };
    script15937(int1, int5++, 0, 0, 0, 0, 32, 32, 0, 0);
    script15937(int1, int5++, 0, 0, 1, 1, 21, 30, 0, 0);
    script7918(int1, int5++, 0, 0, 1, 0, int6, int7, 0, 0, int3);
    CC_GETDYNAMICLAYER();
    CC_GETDYNAMICLAYER();
    CC_GETDYNAMICLAYER();
    script10485(int1, int5++, 0, 0, 2, 0, (int4 + 4), 0, 1, 1, 2100, string1);
    script6711(3, 21);
    return (int0 + 36);
}