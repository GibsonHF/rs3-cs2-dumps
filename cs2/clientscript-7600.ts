//
function script7600(int0: unknown_int, int1: unknown_int): void {
    if ((MAP_MEMBERS() == 0)) {
        if ((enum_hasoutput(17, 5472 as cs2enum, int1) == 1)) {
            stack(16606);
            stack(int0);
            IF_SETGRAPHIC();
        } else {
            stack(9178);
            stack(int0);
            IF_SETGRAPHIC();
        };
    } else {
        stack(9178);
        stack(int0);
        IF_SETGRAPHIC();
    };
    return;
}