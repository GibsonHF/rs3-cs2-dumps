//
function script7785(int0: int, int1: int, int2: int): int {
    var int3 = 0;
    var int4 = 1;
    var int5 = 93;
    var int6 = 0;
    var int7 = script12422(int1, 1, int2);
    var int8 = int1;
    int6 = script12056(int0);
    int3 = (int7 - int6);
    if ((int3 > 0)) {
        int8 = ((int7 - int3) / int2);
    };
    if ((int8 < int1)) {
        switch (varplayer_8703) {
            case -1:
            case 0: {
                var int1 = int8;
                break;
            }
        };
    };
    return int1;
}