//
function script19031(int0: int, int1: component): void {
    var int2 = script19710(int0);
    IF_NPC_SETCUSTOMRECOL(1, struct_getparam(int2, 2503), int1);
    stack(2);
    stack(int2);
    stack(2504);
    struct_getparam();
    IF_NPC_SETCUSTOMRECOL(stack(), int1);
    stack(3);
    stack(int2);
    stack(2505);
    struct_getparam();
    IF_NPC_SETCUSTOMRECOL(stack(), int1);
    stack(4);
    stack(int2);
    stack(2506);
    struct_getparam();
    IF_NPC_SETCUSTOMRECOL(stack(), int1);
    return;
}