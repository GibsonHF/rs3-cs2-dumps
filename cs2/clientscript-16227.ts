//
function script16227(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string): number {
    stack(int0);
    stack(5);
    stack(int1);
    var int1 = (int1 + 1);
    CC_CREATE();
    stack(int0);
    stack(4);
    stack(int1);
    int1 = (int1 + 1);
    CC_CREATE[1]();
    var int5 = (10 + (83 * int2));
    if ((int4 == 1)) {
        CC_SETGRAPHIC(15968 as graphic);
        CC_SETOP[1](1, "Select");
        CC_SETOPCURSOR[1](1, 46);
        CC_SETCOLOUR[1](3225411);
    } else if ((int3 == int2)) {
        CC_SETGRAPHIC(14145 as graphic);
        CC_SETCOLOUR[1](14734449);
    } else {
        CC_SETGRAPHIC(14120 as graphic);
        CC_SETOP[1](1, "Select");
        CC_SETOPCURSOR[1](1, 46);
        CC_SETCOLOUR[1](8427167);
        CC_SETONMOUSEOVER[1](callback(script16223, int0, (int1 - 1), 1));
        CC_SETONMOUSELEAVE[1](callback(script16223, int0, (int1 - 1), 0));
    };
    CC_SETTEXT[1](string0);
    CC_SETSIZE[1](0, 83, 1, 0);
    CC_SETPOSITION[1](0, int5, 1, 0);
    CC_SETSIZE(0, 83, 1, 0);
    CC_SETPOSITION(0, int5, 1, 0);
    CC_SETTEXTFONT[1](58 as fontmetrics);
    CC_SETTEXTALIGN[1](1, 1, 16);
    return int1;
}