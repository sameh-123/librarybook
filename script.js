class book{
    constructor(title,author,pages,read){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
    }
}
const books=[];
const cont=document.querySelector('.cont');
function createbook(){
    const btn=document.querySelector('.el');
    const frame=document.createElement('div');
    const form=document.createElement('form');
    const msg1=document.createElement('div');
    msg1.classList.add('msg');
    msg1.textContent="";
    const lab1=document.createElement('label');
    const inp1=document.createElement('input');
    lab1.setAttribute('for','title');
    lab1.textContent='Title:';
    inp1.type='text';
    inp1.id='title';
    inp1.required='true';
    const msg2=document.createElement('div');
    msg2.classList.add('msg');
    msg2.textContent="";
    const lab2=document.createElement('label');
    const inp2=document.createElement('input');
    lab2.setAttribute('for','author');
    lab2.textContent='Author:';
    inp2.type='text';
    inp2.id='author';
    const msg3=document.createElement('div');
    msg3.classList.add('msg');
    msg3.textContent="";
    const lab3=document.createElement('label');
    const inp3=document.createElement('input');
    lab3.setAttribute('for','pages');
    lab3.textContent='Pages:';
    inp3.type='number';
    inp3.min='1';
    inp3.id='pages';
    const ch=document.createElement('div');
    ch.classList.add('ch');
    const lab4=document.createElement('label');
    const inp4=document.createElement('input');
    lab4.setAttribute('for','read');
    lab4.textContent='Have you read it ? ';
    inp4.type='checkbox';
    inp4.id='read';
    ch.appendChild(lab4);
    ch.appendChild(inp4);
    const done=document.createElement('div');
    done.classList.add('done');
    const submit=document.createElement('button');
    const cancle=document.createElement('button');
    submit.id='submit';
    submit.type='button';
    submit.textContent='Add';
    submit.addEventListener('click',()=>{
        const tit=inp1.value;
        const auth=inp2.value;
        const pagesn=inp3.value;
        const read=(inp4.checked);
        if(tit==''|| auth==''|| pagesn==''){
            if(tit=='')msg1.textContent=('this field is required !');
            else msg1.textContent=('');
            if(auth=='')msg2.textContent=('this field is required !');
            else msg2.textContent=('');
            if(pagesn=='')msg3.textContent=('this field is required !');
            else msg3.textContent=('');
        }
        else{
            const newbook=new book(tit,auth,pagesn,read);
            books.push(newbook);
            add_to_home(newbook);
            cont.replaceChild(btn,frame);
        }
    });
    cancle.id='cancle';
    cancle.type='button';
    cancle.textContent='Cancle';
    cancle.addEventListener('click',()=>{
        cont.replaceChild(btn,frame);
    });
    done.appendChild(submit);
    done.appendChild(cancle);
    form.appendChild(lab1);
    form.appendChild(inp1);
    form.appendChild(msg1);
    form.appendChild(lab2);
    form.appendChild(inp2);
    form.appendChild(msg2);
    form.appendChild(lab3);
    form.appendChild(inp3);
    form.appendChild(msg3);
    form.appendChild(ch);
    form.appendChild(done);
    frame.appendChild(form);
    frame.classList.add('sty');
    cont.firstChild=frame;
    cont.replaceChild(frame,btn);
}
function add_to_home(newbook){
    const newdiv=document.createElement('div');
    newdiv.classList.add('ele');
    const booktit=document.createElement('div');
    booktit.classList.add('booktit');
    booktit.textContent=newbook.title;
    const by=document.createElement('div');
    by.classList.add('by');
    by.textContent="by";
    const bookauth=document.createElement('div');
    bookauth.classList.add('bookauth');
    bookauth.textContent=newbook.author;
    const pages=document.createElement('div');
    pages.classList.add('num')
    pages.textContent=newbook.pages+" pages";
    const down=document.createElement('div');
    down.classList.add('butns');
    const but1=document.createElement('button');
    but1.classList.add('btnn1');
    const but2=document.createElement('button');
    but2.classList.add('btnn2');
    but1.textContent="complete";
    but2.textContent="remove";
    but1.addEventListener('click',(e)=>{
        e.target.classList.toggle('bttntog');
    });
    if(newbook.read){
        but1.classList.add('bttntog');
    }
    down.appendChild(but1);
    down.appendChild(but2);
    newdiv.appendChild(booktit);
    newdiv.appendChild(by);
    newdiv.appendChild(bookauth);
    newdiv.appendChild(pages);
    newdiv.appendChild(down);
    cont.appendChild(newdiv);
    but2.addEventListener('click',(e)=>{
        cont.removeChild(newdiv);
    });
}
const ele=document.querySelector('.el');
ele.addEventListener('click',createbook);
