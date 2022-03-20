var bttn = document.getElementById('add-item')
var New = document.getElementById('formArea')

bttn.addEventListener( 'click' , function(){
    var wrapper = document.createElement('div');
    wrapper.classList.add('repeat')
    var nameField = document.createElement('input');
    nameField.classList.add('nameArea')
    nameField.placeholder = "Name";
    var phoneField = document.createElement('input');
    phoneField.classList.add('phoneArea')
    phoneField.placeholder ='Phone Number'
    wrapper.appendChild(nameField);
     wrapper.appendChild(phoneField);
    New.appendChild(wrapper);
});
