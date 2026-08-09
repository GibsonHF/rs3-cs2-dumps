//
function script380(int0: number): void {
    if (((script13749() == 0) || (int0 == -1))) {
        return;
    };
    var string0 = dbrow_getfield(int0, 516096, 0);
    if ((dbrow_getfield(int0, 516128, 0) == 1)) {
        MARKETING_SENDANALYTICSEVENT(string0);
    };
    if ((dbrow_getfield(int0, 516112, 0) == 1)) {
        MARKETING_SENDATTRIBUTIONEVENT(string0);
    };
    return;
}