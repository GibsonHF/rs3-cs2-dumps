//
function script11331(int0: number, int1: number): void {
    var int2 = 11;
    define_array[9](22);
    pop_array(0, -1);
    pop_array(1, 105840994);
    pop_array(2, 105840974);
    pop_array(3, -1);
    pop_array(4, 105840982);
    pop_array(5, 105840978);
    pop_array(6, 105840986);
    pop_array(7, 105840998);
    pop_array(8, 105840990);
    pop_array(9, -1);
    pop_array(10, 105841004);
    pop_array(11, -1);
    pop_array(12, 105840994);
    pop_array(13, 105840974);
    pop_array(14, -1);
    pop_array(15, 105840982);
    pop_array(16, 105840978);
    pop_array(17, 105840986);
    pop_array(18, 105840998);
    pop_array(19, 105840990);
    pop_array(20, -1);
    pop_array(21, 105841004);
    var int3 = 0;
    while ((int3 < int2)) {
        if ((push_array(int3) != -1)) {
            if ((int3 < int0)) {
                IF_SETTRANS(125, push_array(int3));
                IF_SETGRAPHIC(12297 as graphic, push_array(int3));
                IF_SETTRANS(125, push_array((int3 + int2)));
                IF_SETGRAPHIC(12297 as graphic, push_array((int3 + int2)));
            } else {
                IF_SETGRAPHIC(21231 as graphic, push_array(int3));
                IF_SETGRAPHIC(21231 as graphic, push_array((int3 + int2)));
            };
        };
        int3 = (int3 + 1);
    };
    int3 = int0;
    while ((int3 < int1)) {
        if ((push_array(int3) != -1)) {
            IF_SETTRANS(25, push_array((int3 + int2)));
            IF_SETGRAPHIC(12298 as graphic, push_array((int3 + int2)));
        };
        int3 = (int3 + 1);
    };
    return;
}