//
function script14597(int0: obj): dbrow {
    stack(385168);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    return stack();
}