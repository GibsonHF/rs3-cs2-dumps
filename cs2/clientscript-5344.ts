//
function script5344(int0: number, int1: number, int2: number, int3: number): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((CC_GETGRAPHIC() == int2)) {
            CC_SETGRAPHIC(int3);
        } else {
            CC_SETGRAPHIC(int2);
        };
    };
    return;
}