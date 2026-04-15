//
function script10891(int0: int, int1: component, int2: component, int3: component): void {
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    if ((int0 == 1)) {
        script10898(int1, int2, 28556 as struct, true);
        script2731(int3, -1, 3);
    } else {
        script10898(int1, int2, 28556 as struct, false);
        script2731(int3, -1, 21);
    };
    return;
}