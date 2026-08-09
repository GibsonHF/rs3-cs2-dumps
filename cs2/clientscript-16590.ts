//
function script16590(int0: number, string0: string): number {
    switch (int0) {
        case 2: {
            stack(499728);
            stack(string0);
            DB_FIND(2);
            return dbrow_findnext();
        }
        case 3: {
            stack(499744);
            stack(string0);
            DB_FIND(2);
            return dbrow_findnext();
        }
    };
    return -1;
}