//
function script11331(int0: int, int1: int): void {
    var int2 = 11;
    define_array[9](22);
    pop_array(0, 105840993);
    pop_array(1, 105841017);
    pop_array(2, 105840985);
    pop_array(3, 105840997);
    pop_array(4, 105841005);
    pop_array(5, 105840989);
    pop_array(6, 105841009);
    pop_array(7, 105841021);
    pop_array(8, 105841013);
    pop_array(9, 105841001);
    pop_array(10, 105841027);
    pop_array(11, 105840993);
    pop_array(12, 105841017);
    pop_array(13, 105840985);
    pop_array(14, 105840997);
    pop_array(15, 105841005);
    pop_array(16, 105840989);
    pop_array(17, 105841009);
    pop_array(18, 105841021);
    pop_array(19, 105841013);
    pop_array(20, 105841001);
    pop_array(21, 105841027);
    var int3 = 0;
    while ((int3 < int2)) {
        if ((int3 < int0)) {
            IF_SETTRANS(125, push_array(int3));
            stack(12297);
            stack(push_array(int3));
            IF_SETGRAPHIC();
            IF_SETTRANS(125, push_array((int3 + int2)));
            stack(12297);
            stack(push_array((int3 + int2)));
            IF_SETGRAPHIC();
        } else {
            stack(21231);
            stack(push_array(int3));
            IF_SETGRAPHIC();
            stack(21231);
            stack(push_array((int3 + int2)));
            IF_SETGRAPHIC();
        };
        int3 = (int3 + 1);
    };
    int3 = int0;
    while ((int3 < int1)) {
        IF_SETTRANS(25, push_array((int3 + int2)));
        stack(12298);
        stack(push_array((int3 + int2)));
        IF_SETGRAPHIC();
        int3 = (int3 + 1);
    };
    return;
}