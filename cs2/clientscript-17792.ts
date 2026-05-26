//
function script17792(int0: number, int1: number): void {
    if ((CC_FIND(80216098, int0) == 1)) {
        script7872(1, 1, 1, 1);
    };
    var int2 = DB_LISTALL(235);
    var int3 = 0;
    var int4 = -1;
    while ((++int4 < int2)) {
        dbrow_findnext();
        int3 = script17503(stack(), 0);
        if (((CC_FIND(80216098, int3) == 1) && (int3 != int0))) {
            script7872(1, 1, 1, 0);
        };
    };
    script17793(int1);
    return;
}