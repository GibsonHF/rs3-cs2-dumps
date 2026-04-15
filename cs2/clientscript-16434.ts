//
function script16434(int0: dbrow): void {
    var int1 = -1 as obj;
    var int2 = 0;
    [int1, int2] = dbrow_getfield(int0, 688224, 0);
    script13463(`You will also receive the following when you open a parcel: ${OC_NAME(int1)} x ${inttostring(int2, 10)}.`);
    return;
}