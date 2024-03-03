const loadData= async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    const posts = data.posts    
    displayPost(posts)
}

const displayPost=posts => {

    const postContainer=document.getElementById('posts-container');
    posts.forEach(post => {
        // console.log(post);
        const postCard= document.createElement('div');
        // postCard.classList.add('post-card');
        postCard.innerHTML = `
        <div  ">
                    <div class="item-start">
                        <div class="card lg:card-side bg-[#797DFC1A] shadow-xl">
                            <div class="relative  lg:p-10 ">
                            <figure><img class=" lg:h-[72px] lg:w-[72px]"  src="${post?.image}" alt="Movie"/></figure>
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
                                <div class="flex gap-2 lg:gap-9">
                                    <div class="flex gap-1 lg:gap-4"><img src="images/vector1.png" alt=""><span>${post?.comment_count}</span></div>
                                    
                                    <div class="flex gap-1 lg:gap-4"><img src="images/vector2.png" alt=""><span>${post?.view_count}</span></div>
                                    <div class="flex gap-1 lg:gap-4"><img src="images/vector.png" alt=""><span> ${post?.posted_time}M</span></div>
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
        postContainer.appendChild(postCard);
    });
   
};
const latestPost=async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await response.json();
   console.log(data);
    displayLatestPosts(data);
    
    
}

const displayLatestPosts =latest => {
    const latestPosts = document.getElementById('Latest-post-container');
    latest.forEach(post => {
        console.log(post);
        const latestPostCard= document.createElement('div');
        const getId= post.id;
        latestPostCard.innerHTML =`
        <div class="card card-compact w-96 bg-gray-100 shadow-xl">
                    <figure><img class="p-6" src="${post.cover_image}" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="flex items-center">
                            <img src="images/frame32.png" alt=""> <span class="text-xl font-normal text-[#12132D99]">${post?.author?.
                                posted_date}</span>
                        </div>
                      <h2 class="card-title">${post.title}</h2>
                      <p class="text-xl font-normal text-[#12132D99]">${post.description}</p>
                      <div class="card-actions gap-4">
                       <img class="h-11 w-11 rounded-full	" src="${post.profile_image}" alt="">
                       <div>
                        <h1 class="text-[#12132D] font-bold">${post?.author?.name}</h1>
                        <p class="text-xl font-normal text-[#12132D99]"> ${post?.author?.designation} </p>
                       </div>
                       <div>
                        <h1></h1>
                       </div>
                      </div>
                    </div>
                  </div>
        `
        latestPosts.appendChild(latestPostCard);

    });
}

// displayLatestPosts =document.getElementById('Latest-post-container');

latestPost();
loadData();