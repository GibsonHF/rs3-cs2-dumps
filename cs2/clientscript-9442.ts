//
function script9442(int0: component, int1: unknown_int): void {
    CC_DELETEALL(int0);
    var int2 = IF_GETWIDTH(int0);
    var int3 = IF_GETHEIGHT(int0);
    var int4 = (int2 - 8);
    var int5 = (int3 - 6);
    var int6 = (int2 - 16);
    var int7 = (int3 - 18);
    CC_DELETEALL(int0);
    if ((int1 == 0)) {
        script6199(int0, 21538 as graphic, 0, 0, 8, 6);
        script6199(int0, 21539 as graphic, 8, 0, int6, 6);
        script6199(int0, 21540 as graphic, int4, 0, 8, 6);
        script6199(int0, 21541 as graphic, 0, 6, 8, 6);
        script6199(int0, 21542 as graphic, 8, 6, int6, 6);
        script6199(int0, 21543 as graphic, int4, 6, 8, 6);
        script6199(int0, 21544 as graphic, 0, 12, 8, int7);
        script6199(int0, 21545 as graphic, 8, 12, int6, int7);
        script6199(int0, 21546 as graphic, int4, 12, 8, int7);
        script6199(int0, 21547 as graphic, 0, int5, 8, 6);
        script6199(int0, 21548 as graphic, 8, int5, int6, 6);
        script6199(int0, 21549 as graphic, int4, int5, 8, 6);
    } else {
        script6199(int0, 21550 as graphic, 0, 0, 8, 6);
        script6199(int0, 21551 as graphic, 8, 0, int6, 6);
        script6199(int0, 21552 as graphic, int4, 0, 8, 6);
        script6199(int0, 21553 as graphic, 0, 6, 8, 6);
        script6199(int0, 21554 as graphic, 8, 6, int6, 6);
        script6199(int0, 21555 as graphic, int4, 6, 8, 6);
        script6199(int0, 21556 as graphic, 0, 12, 8, int7);
        script6199(int0, 21557 as graphic, 8, 12, int6, int7);
        script6199(int0, 21558 as graphic, int4, 12, 8, int7);
        script6199(int0, 21559 as graphic, 0, int5, 8, 6);
        script6199(int0, 21560 as graphic, 8, int5, int6, 6);
        script6199(int0, 21561 as graphic, int4, int5, 8, 6);
    };
    return;
}