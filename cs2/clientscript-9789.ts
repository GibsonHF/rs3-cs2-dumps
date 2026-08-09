//
function script9789(): void {
    CC_DELETEALL(comp(1253, 556));
    CC_CREATE(comp(1253, 556), 5, 0);
    CC_CREATE(comp(1253, 556), 5, 1);
    CC_CREATE(comp(1253, 556), 5, 2);
    CC_CREATE(comp(1253, 556), 5, 3);
    CC_CREATE(comp(1253, 556), 5, 4);
    IF_SETONOP(callback(script9725, 1, 0), comp(644, 3));
    IF_SETONOP(callback(script9725, 1, 1), comp(644, 4));
    IF_SETONOP(callback(script9725, 1, 2), comp(644, 5));
    IF_SETONOP(callback(script9725, 1, 3), comp(644, 6));
    IF_SETONOP(callback(script9725, 1, 4), comp(644, 7));
    IF_SETONOP(callback(script9725, 2, 0), comp(644, 45));
    IF_SETONOP(callback(script9725, 2, 1), comp(644, 50));
    IF_SETONOP(callback(script9725, 2, 2), comp(644, 55));
    IF_SETONOP(callback(script9725, 2, 3), comp(644, 60));
    IF_SETONOP(callback(script9725, 2, 4), comp(644, 65));
    IF_SETONOP(callback(script9725, 5, 0), comp(644, 22));
    IF_SETONOP(callback(script9725, 6, 0), comp(644, 76));
    IF_SETONOP(callback(script9725, 7, 0), comp(644, 12));
    IF_SETONOP(callback(script9725, 8, 0), comp(644, 31));
    IF_SETONOP(callback(script9725, 8, 1), comp(644, 30));
    return;
}