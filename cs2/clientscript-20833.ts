//
function script20833(int0: number, int1: number, int2: number): void {
    var int3 = dbrow_findnext();
    var int4 = 0;
    var int5 = -1;
    while ((int3 != -1)) {
        int4 = dbrow_getfield(int3, 1515520, 0);
        if ((CC_FIND(int0, int4) == 1)) {
            stack(20834);
            stack(int0);
            stack(int1);
            stack(int2);
            stack(int3);
            stack(int4);
            unk11040("iiiii");
            CC_CALLONRESIZE();
        };
        int3 = dbrow_findnext();
    };
    return;
}