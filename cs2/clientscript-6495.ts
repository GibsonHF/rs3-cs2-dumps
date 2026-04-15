//
function script6495(int0: component, int1: component, int2: component): void {
    var string0 = "Show";
    var int3 = false;
    var int4 = comp(1458, 48);
    var int5 = comp(1458, 9);
    var int6 = comp(1458, 10);
    if ((int0 == comp(1458, 48))) {
        int4 = comp(1457, 44);
        int5 = comp(1457, 7);
        int6 = comp(1457, 8);
    };
    if ((varbitplayer_45116 == 0)) {
        int3 = false;
        string0 = "Show All";
        varbitplayer_45116 = 1;
        script12244();
        script12243(script12006(int0));
        IF_SETSCROLLPOS(0, 0, struct_getparam(37670, 8122));
        IF_SETSCROLLPOS(0, 0, struct_getparam(37671, 8122));
        script5808(int1, 1);
        script5808(int5, 1);
    } else {
        int3 = true;
        string0 = "Show Active-Only";
        varbitplayer_45116 = 0;
        IF_SETSIZE(0, 1, 1, 0, int1);
        IF_SETSIZE(0, 1, 1, 0, int5);
    };
    IF_SETOP(1, string0, int0);
    IF_SETOP(1, string0, int4);
    IF_SETHIDE(int3, int1);
    IF_SETHIDE(int3, int5);
    if ((int2 != comp(-1, 65535))) {
        IF_SETHIDE(int3, int2);
    };
    if ((int6 != comp(-1, 65535))) {
        IF_SETHIDE(int3, int6);
    };
    script7819(struct_getparam(37670, 8124));
    script7819(struct_getparam(37671, 8124));
    return;
}