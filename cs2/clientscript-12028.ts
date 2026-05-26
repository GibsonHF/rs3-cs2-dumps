//
function script12028(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string): number {
    var int5 = 0;
    var int6 = 0;
    var int7 = int2;
    var int8 = 0;
    while ((int8 < 3)) {
        switch (int8) {
            case 0: {
                int7 = int0;
                break;
            }
            case 1: {
                int7 = int1;
                break;
            }
            case 2: {
                int7 = int2;
                break;
            }
        };
        int5 = script7593(string0, int3, int7, 0);
        int6 = PARAWIDTH(string0, 9999, int7);
        if (((int5 < int4) && (int6 < int3))) {
            return int7;
        };
        int8 = (int8 + 1);
    };
    return int2;
}