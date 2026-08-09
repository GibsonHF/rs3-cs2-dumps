//
function script17092(int0: number, int1: number, int2: number, long0: bigint, long1: bigint, long2: bigint): [bigint, bigint] {
    var int3 = 0;
    var long3 = 0n;
    [long2, int3, long3] = script11467(int0, long2, int1, int2);
    var long0 = script17375(long0, long2);
    if ((int3 == 1)) {
        var long1 = script17375(long1, long3);
    };
    return [long0, long1];
}