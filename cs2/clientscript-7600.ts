//
function script7600(int0: number, int1: number): void {
    if ((MAP_MEMBERS() == 0)) {
        if ((enum_hasoutput(17, 5472, int1) == 1)) {
            IF_SETGRAPHIC(16606, int0);
        } else {
            IF_SETGRAPHIC(9178, int0);
        };
    } else {
        IF_SETGRAPHIC(9178, int0);
    };
    return;
}