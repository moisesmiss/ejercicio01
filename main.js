document.getElementById('add_field').addEventListener('click', function(event){
    event.preventDefault();
    
    var input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('name', 'field');

    var fields = document.getElementById('fields');
    fields.appendChild(input);
});

document.getElementById('sum').addEventListener('click', function(event){
    event.preventDefault();
    
    var inputs = document.getElementsByName('field');
    var total = 0;
    for (var index = 0; index < inputs.length; index++) {
        var currentValue = parseInt(inputs[index].value);
        total += currentValue;
    }
    console.log(total);
    document.getElementById('result').innerText = total;
});