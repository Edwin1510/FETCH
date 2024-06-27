

const SubmitButton=()=>{
    const blogName=document.getElementById("blogName").value;
    const blogCategory=document.getElementById("blogCategory").value;
    const blogDetails=document.getElementById("blogDetails").value;
    if (blogName && blogCategory && blogDetails) {
        fetch(`${window.location.origin}/api/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blogName,
            blogCategory,
            blogDetails,
          }),
        })
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      }
}
      


const submit=document.getElementById("createBlog")
submit.addEventListener("click",SubmitButton)