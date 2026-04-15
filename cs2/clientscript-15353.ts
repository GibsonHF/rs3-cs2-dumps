//
function script15353(int0: component, int1: component, int2: int): void {
    script15357(int0, int1, 0, 0);
    CC_DELETEALL(comp(1851, 40));
    script15332();
    var int3 = ENUM_GETOUTPUTCOUNT(16072 as cs2enum);
    var int4 = enum_getvalue(0, 41, 16072 as cs2enum, int2);
    if ((int2 == int3)) {
        script15339();
    } else if ((ACHIEVEMENT_GETSUBCATCOUNT(int4, -1) > 0)) {
        script15338(int4, -1 as category);
    } else {
        script15365();
    };
    var int5 = comp(1851, 12);
    IF_CLEARSCRIPTHOOKS(int5);
    var int6 = 0;
    if ((CC_FIND(int1, int2) == 1)) {
        int6 = CC_GETY();
    };
    if ((((varclient_6829 - 1) == int2) && (IF_GETHIDE(int5) == false))) {
        script16145(int5);
        script15356(int1, int6);
        return;
    };
    script15351(int2, -1);
    script16145(int5);
    var int7 = enum_getvalue(41, 26, 16076 as cs2enum, int4);
    if ((int7 == -1 as cs2enum)) {
        script15356(int1, int6);
        return;
    };
    script15355(int0, int1, int7, int4, int2, int6, 0);
    return;
}