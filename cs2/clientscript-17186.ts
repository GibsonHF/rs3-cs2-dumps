//
function script17186(int0: component): void {
    var int1 = IF_GETSTYLESHEET(int0);
    if ((int1 == -1)) {
        return;
    };
    stack(540672);
    stack(int1);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    if (((int2 != -1) && (IF_FIND(int0) == 1))) {
        script10643(int2);
        if ((dbrow_getfield(int2, 540688, 0) == 16)) {
            script15961(int2);
        };
    };
    return;
}