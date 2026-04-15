//
function script380(int0: dbrow): void {
    if (((script13749() == false) || (int0 == -1 as dbrow))) {
        return;
    };
    var string0 = dbrow_getfield(int0, 516096, 0);
    if ((dbrow_getfield(int0, 516128, 0) == true)) {
        MARKETING_SENDANALYTICSEVENT(string0);
    };
    if ((dbrow_getfield(int0, 516112, 0) == true)) {
        MARKETING_SENDATTRIBUTIONEVENT(string0);
    };
    return;
}