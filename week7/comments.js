// Comments: this code handles getting the list of comments from the data source, and outputting them to the screen at the right time.  This is often catagorized as Controller code.

class Comments {
    constructor(type, commentElementId) {
    this.type = type;
    this.commentElementId = commentElementId;
    this.model = new CommentModel(this.type);
}};