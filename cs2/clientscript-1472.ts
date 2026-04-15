//
function script1472(int0: component, int1: int): void {
    IF_SETCOLOUR(int1, int0);
    var int2 = IF_GETGRAPHIC(int0);
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    switch (int2) {
        case 3194: {
            int3 = 3194;
            int4 = 3198;
            int5 = 3202;
            break;
        }
        case 3196: {
            int3 = 3196;
            int4 = 3200;
            int5 = 3204;
            break;
        }
        case 3193: {
            int3 = 3193;
            int4 = 3197;
            int5 = 3201;
            break;
        }
        case 3195: {
            int3 = 3195;
            int4 = 3199;
            int5 = 3203;
            break;
        }
    };
    if ((script13749() == true)) {
        IF_SETONCLICK(callback(script1474, int0, int5, int3), int0);
        stack(-1);
        stack("");
        stack(int0);
        IF_SETONRELEASE();
    } else {
        IF_SETONCLICK(callback(script44, int0, int5), int0);
        stack(1473);
        stack("iii");
        stack(int0);
        IF_SETONRELEASE();
    };
    IF_SETONMOUSEOVER(callback(script44, int0, int4), int0);
    IF_SETONMOUSELEAVE(callback(script44, int0, int3), int0);
    return;
}