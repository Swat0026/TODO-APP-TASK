var todo = [];
var newtodo = [];
function display(){
    var list = "";
    todo.forEach((element,index) => {
    var items =`<li>
    <input type="checkbox" onclick="check(${index})" /><label>${element}</label
    ><input type="text" /><button  class="edit" onclick="edit(${index})">EDIT</button
    ><button class="delete" onclick="del(${index})">DELETE</button>
    </li>`;
    list += items;
});
document.getElementById("incomplete-tasks").innerHTML =list;
};
function add(){
    var items  = document.getElementById("new-task").value;
    todo.push(items)
    display();
};
function edit(index){
    var itemlist = todo[index];
    document.getElementById("task").value=index;
    var x = document.getElementById("task").classList.add('todo');
    document.getElementById("new-task").value=itemlist;
    document.getElementById('btn-add').style.display = 'none';
    document.getElementById("btn-update").style = display;
};
function update(){
    var items = document.getElementById("new-task").value;
    var index = document.getElementById("task").value;
    var x = document.getElementById("task").className;
    if(x == "todo"){
        todo[index]=items;
        display();
        document.getElementById("task").className="";
    }
    else{
        newtodo[index]=items;
        displaynew();
        document.getElementById("task").className="";
    }
    
    
    document.getElementById('btn-add').style = display;
    document.getElementById("btn-update").style.display = 'none';
}

function del(index){
    todo.splice(index,1);
    display();
};
function check(index){
    var value = todo[index];
    newtodo.push(value);
    todo.splice(index,1);
    displaynew();
    display();
};
function displaynew(){
    var list = ""
    newtodo.forEach((element,index) => {
    var item =`<li>
    <input type="checkbox" onclick="newcheck(${index})" /><label>${element}</label
    ><input type="text" /><button class="edit" onclick="newedit(${index})">Edit</button
    ><button class="delete" onclick="newdel(${index})">Delete</button>
    </li>`;
    list += item;
});
document.getElementById("completed-tasks").innerHTML =list;
};
function newedit(index){
    var listitem = newtodo[index];
    document.getElementById("task").value=index;
    document.getElementById("new-task").value=listitem;
    var x = document.getElementById("task").classList.add('newtodo')
    document.getElementById('btn-add').style.display = 'none';
    document.getElementById("btn-update").style = display;
};
function newdel(index){
    newtodo.splice(index,1);
    displaynew();
};
function newcheck(index){
    var value = newtodo[index];
    todo.push(value);
    newtodo.splice(index,1);
    displaynew();
    display();
};