//
function script5344(int0: component, int1: int, int2: graphic, int3: graphic): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((CC_GETGRAPHIC() == int2)) {
            CC_SETGRAPHIC(int3);
        } else {
            CC_SETGRAPHIC(int2);
        };
    };
    return;
}