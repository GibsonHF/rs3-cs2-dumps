//
function script21106(): void {
    CC_CREATECHILD(9, int0, int1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(0, 0, 0, 1);
    script11024(7);
    CC_CREATECHILD(9, int0, (int1 + 1));
    CC_SETPOSITION(1, 1, 0, 0);
    CC_SETSIZE(0, 1, 0, 1);
    script11024(8);
    return;
}