//
function script5528(int0: int, int1: int, int2: int, int3: obj, int4: component, int5: component, int6: component, int7: component): int {
    CC_DELETEALL(int4);
    if ((int3 == -1 as obj)) {
        IF_SETHIDE(true, int4);
        return int0;
    };
    script5530(int0, int1, int3, int4, int5, int6, int7);
    IF_SETHIDE(false, int4);
    return ((int0 + int1) + int2);
}