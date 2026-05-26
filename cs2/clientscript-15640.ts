//
function script15640(int0: number, int1: number, int2: number, int3: number): void {
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
    script13992(int0, -1, 28557, int6);
    return;
}