//
function script6495(int0: number, int1: number, int2: number): void {
    var string0 = "Show";
    var int3 = -1;
    var int4 = 95551536;
    var int5 = 95551497;
    var int6 = 95551498;
    if ((int0 == 95551536)) {
        int4 = 95485996;
        int5 = 95485959;
        int6 = 95485960;
    };
    if ((varbitplayer_45116 == 0)) {
        int3 = 0;
        string0 = "Show All";
        varbitplayer_45116 = 1;
        script12244();
        script12243(script12006(int0));
        IF_SETSCROLLPOS(0, 0, struct_getparam(37670, 8122));
        IF_SETSCROLLPOS(0, 0, struct_getparam(37671, 8122));
        script5808(int1, 1);
        script5808(int5, 1);
    } else {
        int3 = 1;
        string0 = "Show Active-Only";
        varbitplayer_45116 = 0;
        IF_SETSIZE(0, 1, 1, 0, int1);
        IF_SETSIZE(0, 1, 1, 0, int5);
    };
    IF_SETOP(1, string0, int0);
    IF_SETOP(1, string0, int4);
    IF_SETHIDE(int3, int1);
    IF_SETHIDE(int3, int5);
    if ((int2 != -1)) {
        IF_SETHIDE(int3, int2);
    };
    if ((int6 != -1)) {
        IF_SETHIDE(int3, int6);
    };
    script7819(struct_getparam(37670, 8124));
    script7819(struct_getparam(37671, 8124));
    return;
}