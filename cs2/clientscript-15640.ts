//
function script15640(int0: component, int1: unknown_int, int2: int, int3: int): void {
    var int4 = script11023(int0);
    var int5 = script11022(int0);
    var int6 = 0;
    if (((int4 == int2) || (int4 == int3))) {
        stack(12762);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETVFLIP(1, int1);
        int6 = 1;
    } else if (((int5 == int2) || (int5 == int3))) {
        stack(12762);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETVFLIP(0, int1);
        int6 = 1;
    } else {
        stack(12760);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETVFLIP(1, int1);
    };
    script13992(int0, comp(-1, 65535), 28557 as struct, int6);
    return;
}