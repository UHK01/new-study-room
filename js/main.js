function status_check(num) {
    switch(num) {
        case 0:
            return "<span class=open>公開</span>";
            break;
        case 1:
            return "<span class=private>非公開</span>";
            break;
        case 2:
            return "<span class=delete>削除</span>";
            break;
        case 3:
            return "<span class=limit>限定公開</span>";
            break;
        case 4:
            return "<span class=limit>限定公開_2</span>";
            break;
        default:
            return "Error!";
    }
}