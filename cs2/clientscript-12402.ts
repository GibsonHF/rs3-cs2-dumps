//
function script12402(int0: dbrow): int {
    var int1 = 1;
    var int2 = script13407(script15319(int0, 1));
    var int3 = script13407(script15319(int0, 2));
    var int4 = script13407(script15319(int0, 3));
    if ((((varplayer_2481 == int2) && (varplayer_2480 == int3)) && (varplayer_2479 == int4))) {
        int1 = 4;
    };
    if (((varplayer_2480 == int2) && (varplayer_2479 == int3))) {
        int1 = 3;
    };
    if ((varplayer_2479 == int2)) {
        int1 = 2;
    };
    return int1;
}