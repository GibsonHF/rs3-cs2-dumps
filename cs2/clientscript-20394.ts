//
function script20394(int0: int): int {
    var int1 = 0;
    if (((CLIENTOPTION_GET(42) > 0) && (CLIENTOPTION_GET(6) > 0))) {
        int1 = (int0 * CLIENTOPTION_GET(42));
    };
    return int1;
}