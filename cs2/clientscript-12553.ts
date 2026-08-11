//
function script12553(): void {
    CC_DELETEALL(comp(673, 0));  // tut5_spotlight:content_layer
    IF_SETHIDE(true, comp(673, 1));  // tut5_spotlight:centre
    IF_SETHIDE(true, comp(673, 4));  // tut5_spotlight:bottom
    IF_SETHIDE(true, comp(673, 2));  // tut5_spotlight:top
    IF_SETHIDE(true, comp(673, 6));  // tut5_spotlight:left
    IF_SETHIDE(true, comp(673, 8));  // tut5_spotlight:right
    IF_SETHIDE(true, comp(673, 5));  // tut5_spotlight:bottom_noclickthrough
    IF_SETHIDE(true, comp(673, 3));  // tut5_spotlight:top_noclickthrough
    IF_SETHIDE(true, comp(673, 7));  // tut5_spotlight:left_noclickthrough
    IF_SETHIDE(true, comp(673, 9));  // tut5_spotlight:right_noclickthrough
    return;
}