//
function script19011(int0: number, int1: number, int2: number, int3: number, int4: number): number {
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1 as graphic;
    var int10 = -1 as graphic;
    [int5, int6, int7, int8, int9, int10] = script19013(int0);
    switch (int0) {
        case 49941: {
            stack(122552324);
            stack(int1);
            var int1 = (int1 + 1);
            script2994((int2 + int5), int6, 0, 0, int7, int8, 0, 0, -1);
            if ((int4 == 1)) {
                CC_SETGRAPHIC(int9);
            } else {
                CC_SETGRAPHIC(int10);
            };
            break;
        }
    };
    return int1;
}