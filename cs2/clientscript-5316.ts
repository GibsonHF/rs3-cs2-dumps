//
function script5316(int0: component, int1: int, int2: int): void {
    if (((((((int1 >= 0) && (int1 < 40)) && (int2 >= 0)) && (int2 < 40)) && (CC_FIND(int0, int1) == 1)) && (CC_FIND[1](int0, int2) == 1))) {
        CC_SETPOSITION(0, CC_GETY[1](), 0, 0);
        CC_SETPOSITION[1](0, CC_GETY(), 0, 0);
    };
    return;
}