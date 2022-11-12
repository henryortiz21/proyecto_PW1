const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
const previous = document.querySelector('#previous');
const next = document.querySelector("#next");
const setImage = document.querySelectorAll(".setImage");

let index = 0;

const clearSet = () => {
   //essa função limpa a cor do seletor de imagem
  setImage.forEach((select) => {

    if (select.classList.contains('active'))
    {
      select.classList.remove('active');

    }

  })
}


setImage.forEach((choose)=>{
 
   
   //percorremos todas as imagens do carrousel e capturamos o index
    
   choose.addEventListener('click', () =>{
     
     
     clearSet();
   choose.classList.add('active');
   
    const myIndex = Number(choose.id);
    
    
    carrousel(myIndex)
    
     })
 
  });



//previous.addEventListener('click', (e)=>{
 
//  decrementIndex();
//});
//next.addEventListener('click', (e) =>{
  
//  incrementIndex();
//  }
//  );



const decrementIndex =  () =>{
  
 index--;
 if(index < 0)
 {
   index = 3;
   
 }
 
 
 
   carrousel(index);
  
  
};


const incrementIndex = () =>{
  
  
  index++
  
  if (index > 1)
  {
    index = 0;
  
  }
  

  
  
  
  carrousel(index);
  
};

function carrousel(arg)
{
  
  slide.forEach((img) =>{
    //percorrer imagens e verifica se a imagem está ativa e remove a classe, tornando a imagem invisível
    img.classList.add("notVisible");
    if(img.classList.contains('active'))
    {
      img.classList.remove('active');
    }
    
    
    
  })
  
  slide[arg].classList.add('active');
  clearSet();
  setImage[arg].classList.add('active')
}

setInterval(incrementIndex, 4000)


