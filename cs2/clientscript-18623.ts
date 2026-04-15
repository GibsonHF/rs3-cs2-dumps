//
function script18623(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    switch (int0) {
        case 19342: {
            int2 = 90;
            int3 = 20;
            int5 = 15;
            int6 = 46308;
            break;
        }
        case 47221: {
            int2 = 115;
            int3 = 20;
            int5 = 15;
            int6 = 46309;
            break;
        }
    };
    var string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)}.`;
    string0 = `${string0}<br>- Applies <col=ffffff> <sprite=27430><nbsp>${struct_getparam(int6, 2794)}</col> to self.`;
    string0 = `${string0}<br>- ${script17710(int5)}.`;
    return string0;
}