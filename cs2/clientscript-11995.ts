//
function script11995(int0: unknown_int, int1: component): void {
    if ((varbitplayer_45115 == 0)) {
        IF_SETOP(1, "Show All", int1);
        varbitplayer_45115 = 1;
    } else {
        IF_SETOP(1, "Filter", int1);
        varbitplayer_45115 = 0;
    };
    if ((varbitplayer_45116 != 1)) {
        script7819(struct_getparam(37670, 8124));
        script7819(struct_getparam(37671, 8124));
    };
    script11999(struct_getparam(37670, 8134), struct_getparam(37670, 8135), struct_getparam(37670, 8131), 0);
    script11999(struct_getparam(37671, 8134), struct_getparam(37671, 8135), struct_getparam(37671, 8131), 0);
    return;
}