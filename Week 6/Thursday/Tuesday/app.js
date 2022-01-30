const areRectanglesOverlap = (rect1, rect2) => {
    let [left1, top1, right1, bottom1] = [rect1[0], rect1[1], rect1[2], rect1[3]], [left2, top2, right2, bottom2] = [rect2[0], rect2[1], rect2[2], rect2[3]];
    // The first rectangle is under the second or vice versa
    if (top1 < bottom2 || top2 < bottom1) {
        return false;
    }
    // The first rectangle is to the left of the second or vice versa
    if (right1 < left2 || right2 < left1) {
        return false;
    }
    // Rectangles overlap
    return true;
}

//  TC1: Rectangle A: a(0, 0) b(8, 0) c(8, 8) d(0, 8), Rectangle B: f(-5, 0) g(5, 0) h(4, 5) k(-5, 4)
console.log(areRectanglesOverlap([0, 8, 0, 8], [-5, 0, 4, 5]));
// TC2: Rectangle A: a(0, 0) b(8, 0) c(8, 8) d(0, 8), Rectangle B: f(-5, 0) g(5, 0) h(4, 5) k(-5, 4)
console.log(areRectanglesOverlap([0, 8, 0, 8], [-5, 0, 4, 5]));
// TC3: Rectangle A: a(0, 0) b(8, 0) c(8, 8) d(0, 8), Rectangle B: f(-1, 0) g(1, 0) h(2, 1) k(-1, 1)
console.log(areRectanglesOverlap([0, 8, 0, 8], [-1, 0, 2, 1]));
// TC4: Rectangle A: a(-5, -1) b(-5, 2) c(-7, 2) d(-7, -1), Rectangle B: f(-6, 1) g(-4, 0) h(-2, 1) k(1, -6)
console.log(areRectanglesOverlap([-7, -2, -5, -1], [-4, 0, -2, 1]));
