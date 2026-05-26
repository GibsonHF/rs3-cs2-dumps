//
function script15724(): void {
    CC_DELETEALL(54263811);
    IF_SETHIDE(1, 58392579);
    SHOP_REQUESTDATA();
    script9525(54263811, 3, -1);
    IF_SETONTIMER(callback(script15725), 54263811);
    script20623(4);
    return;
}