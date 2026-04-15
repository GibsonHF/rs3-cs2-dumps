//
function script5897(int0: component, int1: struct): void {
    var int1 = script9952(int1);
    if ((int1 == -1 as struct)) {
        return;
    };
    if ((int0 != comp(-1, 65535))) {
        script4408(int0);
        IF_SETHIDE(false, int0);
        IF_SETNOCLICKTHROUGH(1, int0);
        CC_CREATE(int0, 5, 0);
        CC_SETPOSITION(struct_getparam(int1, 3575), struct_getparam(int1, 3576), 2, 0);
        CC_SETSIZE(struct_getparam(int1, 3563), struct_getparam(int1, 3564), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3601));
        CC_CREATE(int0, 5, 1);
        if ((struct_getparam(int1, 3601) != -1 as graphic)) {
            IF_SETPOSITION(struct_getparam(int1, 3575), struct_getparam(int1, 3576), 2, 0, int0);
            IF_SETSIZE(struct_getparam(int1, 3563), struct_getparam(int1, 3564), 0, 0, int0);
            CC_SETPOSITION((struct_getparam(int1, 3573) - struct_getparam(int1, 3575)), (struct_getparam(int1, 3574) - struct_getparam(int1, 3576)), 2, 0);
        } else {
            IF_SETPOSITION(struct_getparam(int1, 3573), struct_getparam(int1, 3574), 2, 0, int0);
            IF_SETSIZE(struct_getparam(int1, 3565), struct_getparam(int1, 3566), 0, 0, int0);
            CC_SETPOSITION(0, 0, 2, 0);
        };
        CC_SETSIZE(struct_getparam(int1, 3565), struct_getparam(int1, 3566), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 3602));
        CC_SETONMOUSEOVER(callback(script5336, int0, 1, struct_getparam(int1, 3603)));
        CC_SETONMOUSELEAVE(callback(script5336, int0, 1, struct_getparam(int1, 3602)));
        CC_SETMOUSEOVERCURSOR(36);
    };
    return;
}