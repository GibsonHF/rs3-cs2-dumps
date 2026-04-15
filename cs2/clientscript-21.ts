//
function script21(int0: component, int1: struct): void {
    if ((script6431() == true)) {
        var int1 = script9952(int1);
        IF_SETPOSITION(((struct_getparam(int1, 3573) + (2 * struct_getparam(int1, 3565))) + 10), struct_getparam(int1, 3574), 2, 0, int0);
        IF_SETSIZE(struct_getparam(int1, 3565), struct_getparam(int1, 3566), 0, 0, int0);
    } else {
        int1 = script9952(int1);
        IF_SETPOSITION(((struct_getparam(int1, 3573) + struct_getparam(int1, 3565)) + 5), struct_getparam(int1, 3574), 2, 0, int0);
        IF_SETSIZE(struct_getparam(int1, 3565), struct_getparam(int1, 3566), 0, 0, int0);
    };
    return;
}