//
function script15933(int0: component, int1: int, int2: graphic, int3: graphic): void {
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        stack(script15934(int2, int3));
        stack(int0);
        IF_SETGRAPHIC();
    };
    return;
}