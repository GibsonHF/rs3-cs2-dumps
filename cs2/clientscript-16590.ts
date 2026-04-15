//
function script16590(int0: unknown_int, string0: string): dbrow {
    switch (int0) {
        case 2: {
            stack(499728);
            stack(string0);
            DB_FIND(2);
            dbrow_findnext();
            return stack();
        }
        case 3: {
            stack(499744);
            stack(string0);
            DB_FIND(2);
            dbrow_findnext();
            return stack();
        }
    };
    return -1 as dbrow;
}