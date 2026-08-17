//
function script20166(): number {
    CC_CREATECHILD(9, int0, int1);
    CC_SETPOSITION(0, int2, 0, 0);
    CC_SETSIZE(0, 0, 1, 0);
    script11024(7);
    CC_CREATECHILD(9, int0, (int1 + 1));
    CC_SETPOSITION(1, (int2 + 1), 0, 0);
    CC_SETSIZE(1, 0, 1, 0);
    script11024(8);
    return;
}