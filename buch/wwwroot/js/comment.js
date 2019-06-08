function myFunction() {
    if (document.getElementById("commenttext").value != "") {
        document.getElementById("postedcomments").value += document.getElementById("inputname").value + ": " + document.getElementById("commenttext").value + "\n";
    }
    savecomments(document.getElementById("postedcomments").value, "comment.txt");
    resetInputName();
    resetCommentText();
    loadComments();
}
function resetInputName() {
    if (document.getElementById("inputname").value != "") {
        document.getElementById("inputname").value = "";

    }
} function resetCommentText() {
    if (document.getElementById("commenttext").value != "") {
        document.getElementById("commenttext").value = "";
    }
}
function loadComments() {
    document.getElementById("postedcomments").value = "";
    document.getElementById("postedcomments").value = localStorage.getItem('comment');
}
function savecomments(data, fileName) {
    const comment = {
        name: document.getElementById("inputname").value,
        comment: document.getElementById("commenttext").value,
    }
    window.localStorage.setItem("comment", JSON.stringify(comment));

    
    
    //var a = document.createElement("a");
    //document.body.appendChild(a);
    //a.style = "display: none";

    //var json = JSON.stringify(data),
    //    blob = new Blob([data], { type: "text/plain;charset=utf-8" }),
    //    url = window.URL.createObjectURL(blob);
    //a.href = url;
    //a.download = fileName;
    //a.click();
    //window.URL.revokeObjectURL(url);
}