function pay() {
    document.getElementById("staus-label").innerText = "payment success";
    Unity.call("payment success");
    var msg = document.getElementById("msg");
}

function fail() {
    document.getElementById("staus-label").innerText = "payment failed";
    Unity.call("payment failed");
    var msg = document.getElementById("msg");
}
