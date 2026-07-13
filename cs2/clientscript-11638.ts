//
function script11638(int0: number): number {
    if ((int0 == -1)) {
        return -1;
    };
    stack(1511424);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}