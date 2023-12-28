 data= [{
    'img1': 'asset/asset1.jpg',
    'img2': 'asset/asset2.jpg',
    'title':'Web ecommerce',
    'subtitle':'buyung latter',
    'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta voluptates nam deleniti doloremque, rem reprehenderit? Officiis porro laboriosam necessitatibus, facere at veniam tempore ab ut, debitis, dignissimos atque ipsum!'
},{
    'img1': 'asset/asset1.jpg',
    'img2': 'asset/asset2.jpg',
    'title':'Web ecommerce',
    'subtitle':'buyung latter',
    'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta voluptates nam deleniti doloremque, rem reprehenderit? Officiis porro laboriosam necessitatibus, facere at veniam tempore ab ut, debitis, dignissimos atque ipsum!'
}]
var container = document.querySelector('#Project')
data.array.forEach(element => {
    container.innerHTML +=
    `<div class="project">
    <div class="img-project">
        <img src="`+element.img1`"alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}</p>
    </div> 
    <button class="read-more">read more<button>
    </div>`

    
    
});