//
function script3391(int0: component): void {
    script17186(int0);
    IF_LIST_SETENTRIES(17139, int0);
    IF_LIST_SETDROPDOWNNUMENTRIES(0, int0);
    stack(1);
    stack(int0);
    IF_LIST_SETSELECTIONLIMIT();
    IF_LIST_SETDROPDOWNNUMENTRIES(STYLESHEET_GET_VALUE(IF_GETSTYLESHEET(int0), "list.dropdown.numentries", 0), int0);
    script13153(int0);
    return;
}