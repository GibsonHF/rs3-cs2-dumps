//
function script20487(int0: number, int1: number, int2: number): number {
    var int3 = 0;
    if (((int2 > 0) && (CC_FIND(int1, (int2 - 1)) == 1))) {
        int3 = (CC_GETY() + CC_GETHEIGHT());
    };
    CC_CREATE(comp(1477, 887), 5, IF_GETNEXTSUBID(comp(1477, 887)));  // toplevel_v2:optext_content
    CC_SETSIZE(0, 2, 1, 0);
    CC_SETPOSITION(0, (int3 + 5), 1, 0);
    CC_SETGRAPHIC(35516 as graphic);
    stack(int1);
    stack(4);
    stack(int2);
    var int2 = (int2 + 1);
    CC_CREATE();
    CC_SETSIZE(0, 8, 1, 0);
    CC_SETPOSITION(0, int3, 1, 0);
    return int2;
}