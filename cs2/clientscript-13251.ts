//
function script13251(): void {
    var int0 = -1;
    var int1 = -1 as struct;
    while ((++int0 <= 46)) {
        int1 = script10405(int0);
        MES_TYPED(99, 0, `${inttostring(int0, 10)} - ${struct_getparam(int1, 3493)}`);
    };
    return;
}