function showImg(getId){
    
    if(getId === 'fhd'){
        const content = `    <div class="card-holder">
        <img src="./assets/img1.jpeg" alt="Image 1">
        <h3 class="desc">FILTER LEVEL 0</h3>
    </div>
      
      <div class="card-holder">
        <img src="./assets/img2.jpeg" alt="Image 2">
        <h3 class="desc">FILTER LEVEL 1</h3>
    </div>
      
      <div class="card-holder">
        <img src="./assets/img3.jpeg" alt="Image 3">
        <h3 class="desc">FILTER LEVEL 2</h3>
    </div>
      
      <div class="card-holder">
        <img src="./assets/img4.jpeg" alt="Image 4">
        <h3 class="desc">FILTER LEVEL 3</h3>
    </div>`
    document.getElementById('container-gallery').innerHTML = content;
    }else if(getId == 'hd'){
        const content = `    <div class="card-holder">
        <img style="filter: blur(0.4px);" src="./assets/img1.jpeg" alt="Image 1">
        <h3 class="desc">FILTER LEVEL 0</h3>
    </div>
      
      <div class="card-holder">
        <img style="filter: blur(0.4px);" src="./assets/img2.jpeg" alt="Image 2">
        <h3 class="desc">FILTER LEVEL 1</h3>
    </div>
      
      <div class="card-holder">
        <img style="filter: blur(0.4px);" src="./assets/img3.jpeg" alt="Image 3">
        <h3 class="desc">FILTER LEVEL 2</h3>
    </div>
      
      <div class="card-holder">
        <img style="filter: blur(0.4px);" src="./assets/img4.jpeg" alt="Image 4">
        <h3 class="desc">FILTER LEVEL 3</h3>
    </div>`

document.getElementById('container-gallery').innerHTML = content;
    }else if(getId == 'lesshd'){
        const content = `<div class="card-holder">
        <img style="filter: blur(1.1px);" src="./assets/img1.jpeg" alt="Image 1">
        <h3 class="desc">FILTER LEVEL 0</h3>
    </div>
      
      <div class="card-holder">
        <img style="filter: blur(1.1px);" src="./assets/img2.jpeg" alt="Image 2">
        <h3 class="desc">FILTER LEVEL 1</h3>
    </div>
      
      <div class="card-holder">
        <img style="filter: blur(1.1px);" src="./assets/img3.jpeg" alt="Image 3">
        <h3 class="desc">FILTER LEVEL 2</h3>
    </div>
      
      <div class="card-holder">
        <img style="filter: blur(1.1px);" src="./assets/img4.jpeg" alt="Image 4">
        <h3 class="desc">FILTER LEVEL 3</h3>
    </div>`
    document.getElementById('container-gallery').innerHTML = content;
    }else{
        const content = `<div class="card-holder">
        <img style="filter: blur(2px);" src="./assets/img1.jpeg" alt="Image 1">
        <h3 class="desc">FILTER LEVEL 0</h3>
    </div>
      
      <div class="card-holder">
        <img style="filter: blur(2px);" src="./assets/img2.jpeg" alt="Image 2">
        <h3 class="desc">FILTER LEVEL 1</h3>
    </div>
      
      <div class="card-holder">
        <img style="filter: blur(2px);" src="./assets/img3.jpeg" alt="Image 3">
        <h3 class="desc">FILTER LEVEL 2</h3>
    </div>
      
      <div class="card-holder">
        <img style="filter: blur(2px);" src="./assets/img4.jpeg" alt="Image 4">
        <h3 class="desc">FILTER LEVEL 3</h3>
    </div>`
    document.getElementById('container-gallery').innerHTML = content;

    }
}

