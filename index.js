const loadData= async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    const posts = data.posts    
    displayPost(posts)
}

const displayPost=posts => {

    const phoneContainer=document.getElementById('posts-container');
    posts.forEach(post => {
        console.log(post);
        const postCard= document.createElement('div');
        // postCard.classList.add('post-card');
        postCard.innerHTML = `
        <div  ">
                    <div>
                        <div class="card card-side bg-[#797DFC1A] shadow-xl">
                            <div class="relative ">
                            <figure><img class="lg:p-10"  src="${post?.image}" alt="Movie"/></figure>
                            <img class="absolute lg:p-10 -top-2 right-0" src="images/status.png" alt="">
                            </div>
                            <div class="card-body">
                        <div>
                            </div>
                                <div class="flex">
                                    <p>#${post?.category}</p>
                                    <p>Author :${post?.author?.name}</p>
                                </div>
                              <h2 class="card-title">${post?.title}</h2>
                              <p>${post?.description}</p>
                              <hr class="h-px mx-8 bg-gray-200 border-9 ">
                              <div class="flex items-center justify-between pt-6">
                                <div class="flex gap-9">
                                    <div class="flex gap-4"><img src="images/vector1.png" alt=""><span>560</span></div>
                                    
                                    <div class="flex gap-4"><img src="images/vector2.png" alt=""><span>1,568</span></div>
                                    <div class="flex gap-4"><img src="images/vector.png" alt=""><span> 5 min</span></div>
                                   </div>
                                   <div class="card-actions justify-end">
                                     <img src="images/vector3.png" alt="">
                                   </div>
                              </div>
                            </div>
                          </div>
                    </div>
                    
                </div>
        `
        phoneContainer.appendChild(postCard);
    });
   
};
loadData();