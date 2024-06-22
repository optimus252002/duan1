var arr = []
function call() {}
function getData() {

    $.ajax({
        url: "https://alliz-api.com/api/products/get?active=1&id_parent=0&id_web=2",
        type: 'GET',
    }).done(function(datas) {
        console.log(datas)
        
    });
}

getData(call)
