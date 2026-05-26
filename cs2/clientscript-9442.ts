//
function script9442(int0: number, int1: number): void {
    CC_DELETEALL(int0);
    var int2 = IF_GETWIDTH(int0);
    var int3 = IF_GETHEIGHT(int0);
    var int4 = (int2 - 8);
    var int5 = (int3 - 6);
    var int6 = (int2 - 16);
    var int7 = (int3 - 18);
    CC_DELETEALL(int0);
    if ((int1 == 0)) {
        script6199(int0, 21538, 0, 0, 8, 6);
        script6199(int0, 21539, 8, 0, int6, 6);
        script6199(int0, 21540, int4, 0, 8, 6);
        script6199(int0, 21541, 0, 6, 8, 6);
        script6199(int0, 21542, 8, 6, int6, 6);
        script6199(int0, 21543, int4, 6, 8, 6);
        script6199(int0, 21544, 0, 12, 8, int7);
        script6199(int0, 21545, 8, 12, int6, int7);
        script6199(int0, 21546, int4, 12, 8, int7);
        script6199(int0, 21547, 0, int5, 8, 6);
        script6199(int0, 21548, 8, int5, int6, 6);
        script6199(int0, 21549, int4, int5, 8, 6);
    } else {
        script6199(int0, 21550, 0, 0, 8, 6);
        script6199(int0, 21551, 8, 0, int6, 6);
        script6199(int0, 21552, int4, 0, 8, 6);
        script6199(int0, 21553, 0, 6, 8, 6);
        script6199(int0, 21554, 8, 6, int6, 6);
        script6199(int0, 21555, int4, 6, 8, 6);
        script6199(int0, 21556, 0, 12, 8, int7);
        script6199(int0, 21557, 8, 12, int6, int7);
        script6199(int0, 21558, int4, 12, 8, int7);
        script6199(int0, 21559, 0, int5, 8, 6);
        script6199(int0, 21560, 8, int5, int6, 6);
        script6199(int0, 21561, int4, int5, 8, 6);
    };
    return;
}